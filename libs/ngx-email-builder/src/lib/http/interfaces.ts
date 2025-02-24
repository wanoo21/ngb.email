/**
 * Convertor errors response interface, id any.
 */
export interface IMjmlServerResponseErrors {
  /**
   * Error message.
   */
  message: string;
  /**
   * MJML TagName error occurred.
   */
  tagName: string;
}

/**
 * Convertor response interface.
 */
export interface IMjmlServerResponse {
  /**
   * Converted HTML Template based on {@link IIPEmail}.
   */
  html: string;
  /**
   * Converted MJML Template based on {@link IIPEmail}.
   */
  mjml: string;
  /**
   * Error representation if any. See {@link IMjmlServerResponseErrors}.
   */
  errors: IMjmlServerResponseErrors[];
}
