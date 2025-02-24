import { inject, Provider } from '@angular/core';
import { ControlContainer } from '@angular/forms';

export function formViewProvider(): Provider {
  return {
    provide: ControlContainer,
    useFactory: () => inject(ControlContainer, { skipSelf: true }),
  };
}
