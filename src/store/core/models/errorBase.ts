/** Error. */
export interface ErrorBase<T> {

  /** Fields validation errors. */
  readonly data: T | null;

  /** Code of error. */
  readonly code: string | null;

  /** General information about the error. */
  readonly detail: string;

}
