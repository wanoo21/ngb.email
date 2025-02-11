import { assertInInjectionContext, DestroyRef, inject, Injector, runInInjectionContext } from '@angular/core';

import { IPDefinedFonts } from './interface';
import { IP_EMAIL_FONTS } from './token';
import { DOCUMENT } from '@angular/common';
import { fontParserFactory } from './parser';

/**
 * Provide custom fonts for the email builder
 *
 * @param config - Custom fonts configuration
 */
export function withIPFonts(config: IPDefinedFonts) {
  return {
    provide: IP_EMAIL_FONTS,
    useValue: config,
  };
}

/**
 * Inject custom fonts for the email builder
 *
 * @param injector
 */
export function injectIPFonts({ injector }: { injector?: Injector } = {}) {
  !injector && assertInInjectionContext(injectIPFonts);
  const assertedInjector = injector || inject(Injector);

  return runInInjectionContext(assertedInjector, () => {
    const fonts = inject(IP_EMAIL_FONTS);
    const document = inject(DOCUMENT);
    const destroyRef = inject(DestroyRef);
    const parser = fontParserFactory(document, fonts);
    destroyRef.onDestroy(() => parser.destroy());
    return { ...fonts, parser };
  });
}
