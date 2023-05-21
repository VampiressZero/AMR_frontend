/** Available anime statuses. */
export enum AnimeStatus {
  Airing = 'On air',
  Finished = 'Finished',
  NotYetAired = 'Not yet aired',
}

// /** Available anime types. */
// export enum AnimeType {
//   Tv = 'TV',
//   Ova = 'OVA',
//   Movie = 'Movie',
//   Special = 'Special',
//   Ona = 'ONA',
//   Music = 'Music',
// }

/** Anime. */
export interface AnimeCommon {

  /** Anime ID. */
  readonly id: number;

  /** Image of the anime. */
  readonly image: string;

  /** Russian name of the anime. */
  readonly titleRussian: string;

  /** English name of the anime. */
  readonly titleEnglish: string;

  /** Original name of the anime. */
  readonly titleOriginal: string;

  /** Type anime of the anime. */
  readonly type: string;

  /** Status of the anime. */
  readonly status: string;

  // /** Rating of the anime. */
  // readonly rating: number;

  /** Start date of airing. */
  readonly airingStart: Date | null;

  /** End date of airing. */
  readonly airingFinish: Date | null;
}
