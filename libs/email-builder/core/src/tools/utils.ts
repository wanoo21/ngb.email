/**
 * Create CSS border styles based on {@link IBorder} object.
 * @param border Border object.
 * @param rule Most likely you won't need it, but for some cases, it can be changed. Default is: `border`.
 *
 * @return CSS Border styles.
 */
import { IBackground, IBorder, IFont, ILineHeight, IMargin, IPadding, IWidthHeight, TFontWeight } from "../interfaces";

export function createBorder(border: IBorder, rule = 'border'): { [p: string]: string; borderRadius: string } {
  const { color = '#000000', style = 'solid', width = 4, radius = 0 } = border;
  return {
    [rule]: `${width}px ${style} ${color}`,
    borderRadius: `${radius}px`
  };
}

/**
 * Create CSS padding styles based on {@link IPadding} object.
 * @param padding Padding object.
 * @param rule Most likely you won't need it, but for some cases, it can be changed. Default is: `padding`.
 */
export function createPadding(padding: IPadding, rule = 'padding'): Record<string, string> {
  const { top = 10, right = 25, bottom = 10, left = 25 } = padding;
  return {
    [rule]: `${top}px ${right}px ${bottom}px ${left}px`
  };
}

/**
 * Create CSS margin styles based on {@link IMargin} object.
 * @param margin Margin object.
 */
export function createMargin(margin: IMargin): { margin: string } {
  const { top = 0, bottom = 0 } = margin;
  return {
    margin: `${top}px 0 ${bottom}px`
  };
}

/**
 * Create CSS font styles based on {@link IFont} object.
 * @param font Font object.
 */
export function createFont(font: IFont): { fontFamily: string; fontSize: string; fontStyle: string; fontWeight: number | TFontWeight } {
  const { family = '', size = 13, style = 'normal', weight = 'normal' } = font;
  return {
    fontFamily: family,
    fontSize: `${size}px`,
    fontStyle: style,
    fontWeight: weight
  };
}

/**
 * Create CSS line-height styles based on {@link ILineHeight} object.
 * @param lineHeight Line-height object.
 */
export function createLineHeight(lineHeight: ILineHeight): { lineHeight: string } {
  const { value = 22, unit = 'px' } = lineHeight;
  return {
    lineHeight: unit !== 'none' ? `${value}${unit}` : 'normal'
  };
}

/**
 * Create background styles based on {@link IBackground} object.
 * @param background Background object.
 */
export function createBackground(background: IBackground): string {
  const { url = '', color = 'white', repeat = 'no-repeat' } = background;
  return `${color} ${url && `url(${url})`} ${repeat} top center`;
}

/**
 * Create Width or Height styles based on {@link IWidthHeight} object.
 * @param widthHeight Width or Height object.
 */
export function createWidthHeight(widthHeight: IWidthHeight): string {
  const { value = 100, unit = '%', auto = false } = widthHeight;
  return (auto && 'auto') || (['%', 'px'].indexOf(unit) > -1 && `${value}${unit}`) || unit;
}
