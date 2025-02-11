import { createFont, debounce } from '../tools/utils';
import { IFont } from '../ui/settings/interfaces';
import { IPDefinedFonts } from './interface';

export function fontParserFactory(document: Document, fonts: IPDefinedFonts) {
  const googleFontLink = document.createElement('link');
  const addFontToHead = debounce((family: string) => {
    const fontIsIncluded = Array.from(document.querySelectorAll('link')).some(
      ({ href }) => href.includes(family)
    );
    if (!fontIsIncluded) {
      googleFontLink.href = `https://fonts.googleapis.com/css2?family=${family}&display=swap`;
      googleFontLink.rel = 'stylesheet';
      document.head.appendChild(googleFontLink);
    }
  }, 500);

  function formatAndLoadGoogleFont(font: IFont): IFont {
    let family = font.family;
    if (!fonts.webSafeFonts.includes(font.family)) {
      family = font.family.split(':wght@')[0].replace(/\+/g, ' ');
      addFontToHead(font.family);
    } else {
      googleFontLink.remove();
    }
    return { ...font, family };
  }

  return {
    /**
     * Format and load google font if needed
     */
    formatAndLoadGoogleFont,
    /**
     * Format and load google font if needed and create font object
     */
    createFont: (font: IFont) => {
      return createFont(formatAndLoadGoogleFont(font));
    },
    /**
     * Destroy google font link
     */
    destroy: () => {
      googleFontLink.remove();
    },
  };
}
