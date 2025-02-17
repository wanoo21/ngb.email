import {
  ChangeDetectionStrategy,
  Component,
  inject,
  output,
  signal,
} from '@angular/core';
import { IIPEmail, IUserTemplateCategory } from '@wlocalhost/ngx-email-builder';
import { AsyncPipe, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, tap } from 'rxjs';

import { UIFormModule } from '../directives/form/form-input.directive';

@Component({
  selector: 'tail-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UIFormModule, AsyncPipe, TitleCasePipe, NgOptimizedImage],
})
export class TemplateListComponent {
  readonly http = inject(HttpClient);
  readonly selected = output<IIPEmail>();
  readonly selectedCategory = signal<IUserTemplateCategory | null>(null);
  readonly categories$ = this.http
    .get<IUserTemplateCategory[]>('/templates/templates.json')
    .pipe(
      // Load the first category by default
      tap(([category]) => this.selectedCategory.set(category))
    );

  async selectTemplate(category: string, name: string) {
    const template = await lastValueFrom(
      this.http.get<IIPEmail>(`/templates/${category}/${name}/index.json`),
      {
        defaultValue: null,
      }
    );
    if (template) {
      this.selected.emit(template);
    }
  }
}
