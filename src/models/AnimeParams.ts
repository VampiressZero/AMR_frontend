import { AnimeSort, Order } from 'store/core/models/animeSort';

/** Parameters for the anime query. */
export interface AnimeQueryParams {

  /**  Sort query. */
  readonly sort: AnimeSort;

  /** Search query. */
  readonly search: string;

  /** Types query. */
  readonly types: string[];

  // readonly types: AnimeType[];
}

/** Parameters for the anime. */
export interface AnimeParams {

  /**  Order settings. */
  ordering: Order;

  /** Search settings. */
  search: string;

  /** Types settings. */
  types: string[]
  // types: AnimeType[];
}
