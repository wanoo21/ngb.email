import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  model,
  signal,
} from '@angular/core';
import type {
  ISocialBlockOptions,
  ISocialNetwork,
} from '../social-block.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';
import { SocialPathPipe, TLinkTarget } from '@wlocalhost/ngx-email-builder';
import { TitleCasePipe } from '@angular/common';

import { formViewProvider } from '../../../directives/form-providers';
import { AlignComponent } from '../../../settings/align/align.component';
import { FontComponent } from '../../../settings/font/font.component';
import { UIFormModule } from '../../../directives/form/form-input.directive';
import { TooltipDirective } from '../../../directives/tooltip/tooltip.directive';
import { PaddingComponent } from '../../../settings/padding/padding.component';
import { LineHeightComponent } from '../../../settings/line-height/line-height.component';

const modeLabels = new Map([
  ['horizontal', $localize`:@@social_horizontal:Horizontal`],
  ['vertical', $localize`:@@social_vertical:Vertical`],
]);

const targetLabels = new Map<TLinkTarget, string>([
  ['_blank', $localize`:@@link_target_blank:Blank`],
  ['_self', $localize`:@@link_target_self:Self`],
  ['_parent', $localize`:@@link_target_parent:Parent`],
  ['_top', $localize`:@@link_target_top:Top`],
]);

@Component({
  selector: 'tail-social-settings',
  templateUrl: './social-settings.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [formViewProvider()],
  imports: [
    AlignComponent,
    FontComponent,
    UIFormModule,
    TooltipDirective,
    FormsModule,
    PaddingComponent,
    SocialPathPipe,
    TitleCasePipe,
    LineHeightComponent,
    ReactiveFormsModule,
  ],
})
export class SocialSettingsComponent implements AfterViewInit {
  readonly networks = model.required<ISocialNetwork[]>();
  readonly options = model.required<ISocialBlockOptions>();

  readonly form = inject(NgForm);
  readonly destroyRef = inject(DestroyRef);

  supportedNetworks: ISocialNetwork['name'][] = [
    'github',
    'instagram',
    'web',
    'snapchat',
    'youtube',
    'vimeo',
    'medium',
    'soundcloud',
    'facebook',
    'twitter',
    'pinterest',
    'linkedin',
    'tumblr',
    'xing',
  ];

  readonly editNetwork = signal<ISocialNetwork['name'] | null>(null);
  readonly currentEditingNetwork = computed(() => {
    const editNetwork = this.editNetwork();
    return this.networks().find(({ name }) => name === editNetwork) || null;
  });

  readonly editNetworkForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    href: new FormControl('', { nonNullable: true }),
    label: new FormControl('', { nonNullable: true }),
    target: new FormControl('_blank', { nonNullable: true }),
  });

  readonly modeOptions = [...modeLabels.keys()].map((value) => ({
    value,
    label: modeLabels.get(value),
  }));

  readonly targetOptions = [...targetLabels.keys()].map((value) => ({
    value,
    label: targetLabels.get(value),
  }));

  constructor() {
    effect(() => {
      const editingNetwork = this.currentEditingNetwork();
      if (editingNetwork) {
        this.editNetworkForm.patchValue(editingNetwork, { emitEvent: false });
      }
    });
  }

  ngAfterViewInit() {
    const { form } = this.form;
    setTimeout(() => {
      form.patchValue(this.options(), { emitEvent: false });
      form.valueChanges
        .pipe(
          debounceTime(300),
          takeUntilDestroyed<ISocialBlockOptions>(this.destroyRef)
        )
        .subscribe((options) => {
          this.options.set(options);
        });
    });

    this.editNetworkForm.valueChanges
      .pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef))
      .subscribe((network) => {
        this.networks.update((networks) =>
          networks.map((n) =>
            n.name === network.name ? (network as ISocialNetwork) : n
          )
        );
      });
  }

  networkIsActive(network: ISocialNetwork['name']): boolean {
    return this.networks().some(({ name }) => name === network);
  }

  addOrEditNetwork(network: ISocialNetwork['name']): void {
    if (!this.networkIsActive(network)) {
      this.networks.update((networks) => [
        ...networks,
        {
          name: network,
          href: '',
          label: '',
          target: '_blank',
        },
      ]);
    }
    this.editNetwork.set(network);
  }

  deleteCurrentNetwork(): void {
    if (this.editNetwork()) {
      this.networks.update((networks) =>
        networks.filter(({ name }) => name !== this.editNetwork())
      );
    }
  }
}
