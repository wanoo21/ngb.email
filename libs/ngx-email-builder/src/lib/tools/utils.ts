import { IBackground, IBorder, IFont, ILineHeight, IMargin, IPadding, IWidthHeight } from '../ui/settings/interfaces';

/**
 * Create CSS border styles based on {@link IBorder} object.
 * @param border Border object.
 * @param rule Most likely you won't need it, but for some cases, it can be changed. Default is: `border`.
 *
 * @return CSS Border styles.
 */
export function createBorder(
  border: IBorder,
  rule = 'border'
): { [p: string]: string; borderRadius: string } {
  const {
    color = '#000000',
    style = 'solid',
    radius = 0,
    sizes,
    width,
  } = border;
  const styles = { borderRadius: `${radius}px` };
  if (sizes) {
    const { top, right, left, bottom } = sizes;
    return {
      [`border-top`]: `${top}px ${style} ${color}`,
      [`border-right`]: `${right}px ${style} ${color}`,
      [`border-left`]: `${left}px ${style} ${color}`,
      [`border-bottom`]: `${bottom}px ${style} ${color}`,
      ...styles,
    };
  }

  return {
    [rule]: `${width}px ${style} ${color}`,
    ...styles,
  };
}

/**
 * Create CSS padding styles based on {@link IPadding} object.
 * @param padding Padding object.
 * @param rule Most likely you won't need it, but for some cases, it can be changed. Default is: `padding`.
 */
export function createPadding(
  padding: IPadding,
  rule = 'padding'
): Record<string, string> {
  const { top = 10, right = 25, bottom = 10, left = 25 } = padding;
  return {
    [rule]: `${top}px ${right}px ${bottom}px ${left}px`,
  };
}

/**
 * Create CSS margin styles based on {@link IMargin} object.
 * @param margin Margin object.
 */
export function createMargin(margin: IMargin): { margin: string } {
  const { top = 0, bottom = 0 } = margin;
  return {
    margin: `${top}px 0 ${bottom}px`,
  };
}

/**
 * Create CSS font styles based on {@link IFont} object.
 * @param font Font object.
 */
export function createFont(font: IFont): {
  fontFamily: string;
  fontSize: string;
  fontStyle: string;
  fontWeight: number;
} {
  const {
    family = '',
    size = 13,
    style = 'normal',
    weight = 400,
    fallback,
  } = font;
  const fontFamily = family.length ? family : fallback;
  return {
    fontFamily,
    fontSize: `${size}px`,
    fontStyle: style,
    fontWeight: weight,
  };
}

/**
 * Create CSS line-height styles based on {@link ILineHeight} object.
 * @param lineHeight Line-height object.
 */
export function createLineHeight(lineHeight: ILineHeight): {
  lineHeight: string;
} {
  const { value = 22, unit = 'px' } = lineHeight;
  return {
    lineHeight: unit !== 'none' ? `${value}${unit}` : 'normal',
  };
}

/**
 * Create background styles based on {@link IBackground} object.
 * @param background Background object.
 */
export function createBackground(background: Partial<IBackground>): string {
  const { url = '', color = 'white', repeat = 'no-repeat' } = background;
  return `${color} ${url && `url(${url})`} ${repeat} top center`;
}

/**
 * Create Width or Height styles based on {@link IWidthHeight} object.
 * @param widthHeight Width or Height object.
 */
export function createWidthHeight(widthHeight: Partial<IWidthHeight>): string {
  const { value = 100, unit = '%', auto = false } = widthHeight;
  return (
    (auto && 'auto') ||
    (['%', 'px'].indexOf(unit) > -1 && `${value}${unit}`) ||
    unit
  );
}

/**
 * An alternative lodash defaultsDeep function. Use it on your own risk.
 * @param to The object with default properties
 * @param sources An array of objects with default properties
 */
export function defaultsDeep<T extends Record<PropertyKey, any>>(
  to: T,
  ...sources: T[]
): T {
  for (const source of sources) {
    for (const key in source) {
      if (!to[key]) to[key] = source[key];
      if (!Array.isArray(source[key]) && typeof source[key] === 'object') {
        to[key] = defaultsDeep(to[key], source[key]);
      } else {
        to[key] = source[key];
      }
    }
  }
  return to;
}

/**
 * Debounce a function based on delay
 * @param callback
 * @param delay
 */
export function debounce<T = void>(
  callback: (...args: any[]) => T,
  delay = 1000
) {
  let timeoutId: number | undefined;
  return (...args: any[]): T | void => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = undefined;
      callback(...args);
    }, delay) as unknown as number;
  };
}

/**
 * Generate a random, unique string
 */
export function randomString(from = 10, to = 5): string {
  return btoa(String(Math.random())).substr(from, to).toLowerCase();
}
