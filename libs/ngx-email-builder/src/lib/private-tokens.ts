import { inject, InjectionToken, isDevMode, Type } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

import { IIPEmailBuilderConfig } from "./public-tokens";
import { AIPEmailBuilderBlock } from "./core/Block";
import { IBlockState } from "./interfaces";
import { addToStore, getFromStore } from "./tools/utils";

interface ILicenseResponse {
  status: boolean;
  active: boolean;
}

export class IPEmailBuilderConfig {
  protected defConfig: IIPEmailBuilderConfig = {
    xApiKey: "", socialIconsPath: "", convertorPath: ""
  };

  constructor(config: IIPEmailBuilderConfig, readonly http: HttpClient) {
    this.defConfig = { ...this.defConfig, ...config };
  }

  get socialIconsPath(): NonNullable<IIPEmailBuilderConfig["socialIconsPath"]> {
    return !this.isFreeVersion && this.defConfig.socialIconsPath || "https://www.mailjet.com/images/theme/v1/icons/ico-social";
  }

  get templatesThumbsPath(): NonNullable<IIPEmailBuilderConfig["templatesThumbsPath"]> {
    return !this.isFreeVersion && this.defConfig.templatesThumbsPath || "https://ngb-templates.s3.amazonaws.com";
  }

  get xApiKey(): NonNullable<IIPEmailBuilderConfig["xApiKey"]> {
    return this.defConfig.xApiKey || "t7HdQfZjGp6R96fOV4P8v18ggf6LLTQZ1puUI2tz";
  }

  get historyRecordLimit(): number {
    return this.isFreeVersion ? 5 : this.defConfig.historyRecordLimit || 20;
  }

  get isFreeVersion(): boolean {
    if (isDevMode()) {
      return !this.#hasValidLicense;
    } else if (this.#hasValidLicense) {
      return !!getFromStore(this.#licenseHash);
    }
    return true;
  }

  get convertorPath(): string {
    return !this.isFreeVersion && this.defConfig.convertorPath || "https://ngb-api.wlocalhost.org/v1";
  }

  get providers(): IIPEmailBuilderConfig["providers"] {
    return this.defConfig.providers;
  }

  get #hasValidLicense(): boolean {
    return !!this.defConfig.licenseKey && /^([(A-Z\d+)]{8}-){3}([(A-Z\d+)]{8})$/g.test(this.defConfig.licenseKey);
  }

  get #licenseHash(): string {
    return `__${this.defConfig.licenseKey}`.toLowerCase().replace(/-/g, "");
  }

  fetchLicense() {
    if (!isDevMode() && this.#hasValidLicense && !getFromStore(this.#licenseHash)) {
      return firstValueFrom(this.http.post<ILicenseResponse>("https://ngb-api.wlocalhost.org/v1/activate", {
        licenseKey: this.defConfig.licenseKey
      }), { defaultValue: { status: true, active: false } }).then(({ status, active }) => {
        if (status && active) {
          addToStore(this.#licenseHash, btoa((new Date().getTime() / 1000).toFixed(0)));
        }
      }).catch(e => {
        console.warn("There seems to be an issue with activating the license key, please report the problem to support@wlocalhost.org, include this message into body", e.message);
        return Promise.resolve();
      });
    }
    return Promise.resolve();
  }
}

export const IP_EMAIL_BUILDER_CONFIG = new InjectionToken<IPEmailBuilderConfig>("Wlocalhost configurations", {
    providedIn: "root",
    factory: () => {
      const httpClient = inject(HttpClient);
      return new IPEmailBuilderConfig({}, httpClient);
    }
  }
);

export const IP_EMAIL_BUILDER_BLOCKS = new InjectionToken<Type<AIPEmailBuilderBlock>[]>("Wlocalhost blocks map", {
  providedIn: "root",
  factory: () => []
});

export interface IIPEmailBuilderBlockData {
  block: Type<AIPEmailBuilderBlock>;
  type: string;
  title: string;
  state: IBlockState;
}

export const IP_EMAIL_BUILDER_BLOCKS_DATA = new InjectionToken<IIPEmailBuilderBlockData[]>("Wlocalhost blocks' info map", {
  providedIn: "root",
  factory: () => []
});
