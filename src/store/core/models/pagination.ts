/** Pagination. */
export interface Pagination<T> {
  /** Total count of items. */
  readonly count: number;

  /** Array of items requested. */
  readonly results: readonly T[];

  /** Next page of items. */
  readonly next: string;

  /** Previous page of items. */
  readonly previous: string;
}
