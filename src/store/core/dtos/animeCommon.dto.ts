/** Available anime statuses. */
export enum AnimeStatusDto {
  Airing = 'AIRING',
  Finished = 'FINISHED',
  NotYetAired = 'NOT_YET_AIRED',
}

/** Available anime types. */
// export enum AnimeTypeDto {
//   Tv = 'TV',
//   Ova = 'OVA',
//   Movie = 'MOVIE',
//   Special = 'SPECIAL',
//   Ona = 'ONA',
//   Music = 'MUSIC',
// }

/** Anime DTO. */
export interface AnimeCommonDto {

  /** Anime ID. */
  readonly id: number;

  /** Image of the anime. */
  readonly cover: string;

  /** Russian name of the anime. */
  readonly russianName: string;

  /** English name of the anime. */
  readonly englishName: string;

  /** Original name of the anime. */
  readonly originalName: string;

  /** Type of the anime. */
  readonly type: string;

  /** Status of the anime. */
  readonly status: AnimeStatusDto;

  /** Start date of airing. */
  readonly startDate: string | null;

  /** End date of airing. */
  readonly finishDate: string | null;
}
