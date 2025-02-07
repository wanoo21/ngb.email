import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AIPEmailBuilderRestService } from './email-builder-rest.service';
import { IIPEmail, IMjmlServerResponse } from '../interfaces';

/**
 * The AIPEmailBuilderService is an abstract service that provides conversion of IPEmail object to ready-to-use MJML and HTML.
 * It also includes an array of standard fonts used in email building.
 */
@Injectable({
  providedIn: 'root',
  useFactory: () => inject(DefaultIPEmailBuilderService),
})
export abstract class AIPEmailBuilderService {
  readonly standardFonts: string[] = [];

  abstract convert(value: IIPEmail): Promise<IMjmlServerResponse>;
}

/**
 * The ProIPEmailBuilderService is a concrete implementation of the AIPEmailBuilderService for the Pro version.
 */
@Injectable({ providedIn: 'root' })
export class DefaultIPEmailBuilderService implements AIPEmailBuilderService {
  readonly restService = inject(AIPEmailBuilderRestService);
  readonly standardFonts = [
    'Palatino Linotype, Book Antiqua, Palatino, serif',
    'Times New Roman, Times, serif',
    'Arial, Helvetica, sans-serif',
    'Arial Black, Gadget, sans-serif',
    'Comic Sans MS, cursive, sans-serif',
    'Impact, Charcoal, sans-serif',
    'Lucida Sans Unicode, Lucida Grande, sans-serif',
    'Tahoma, Geneva, sans-serif',
    'Trebuchet MS, Helvetica, sans-serif',
    'Verdana, Geneva, sans-serif',
    'Courier New, Courier, monospace',
    'Lucida Console, Monaco, monospace',
  ];

  /**
   * Convert IPEmail object to ready-to-use MJML and HTML
   *
   * @param value IPEmail object
   * @returns Promise with MJML and Template
   * @example
   * ```ts
   * const {mjml, html} = await this.emailBuilderService.convert(email);
   * ```
   */
  convert(value: IIPEmail): Promise<IMjmlServerResponse> {
    return lastValueFrom(this.restService.convert(value), {
      defaultValue: { mjml: '', html: '', errors: [] },
    });
  }
}
