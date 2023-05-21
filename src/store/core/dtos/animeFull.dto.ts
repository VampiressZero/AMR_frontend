import { AnimeCommonDto } from './animeCommon.dto';
import { GenreDto } from './genre.dto';
import { StudioDto } from './studio.dto';

/** Available anime sources. */
export enum AnimeSourceDto {
  FourKomaManga = 'FOUR_KOMA_MANGA',
  Book = 'BOOK',
  CardGame = 'CARD_GAME',
  Game = 'GAME',
  LightNovel = 'LIGHT_NOVEL',
  Manga = 'MANGA',
  MixedMedia = 'MIXED_MEDIA',
  Music = 'MUSIC',
  Novel = 'NOVEL',
  Original = 'ORIGINAL',
  PictureBook = 'PICTURE_BOOK',
  Radio = 'RADIO',
  VisualNovel = 'VISUAL_NOVEL',
  WebManga = 'WEB_MANGA',
  WebNovel = 'WEB_NOVEL',
  Other = 'OTHER',
  Unknown = 'UNKNOWN',
}

/** Available anime ratings. */
export enum AnimeRatingDto {
  G = 'G',
  Pg = 'PG',
  Pg13 = 'PG_13',
  R17 = 'R_17',
  RPlus = 'R_PLUS',
  RX = 'R_X',
  Unknown = 'UNKNOWN',
}

/** Available anime seasons. */
export enum AnimeSeasonDto {
  Summer = 'SUMMER',
  Winter = 'WINTER',
  Spring = 'SPRING',
  Fall = 'FALL',
  NonSeasonal = 'NON_SEASONAL',
}

export interface AnimeEpisode {
  readonly name: string,
  readonly video: string,
  readonly audio: string,
  readonly subtitles: string
}

/** Anime DTO. */
export interface AnimeFullDto extends AnimeCommonDto {

  /** Sources of the anime. */
  readonly source: AnimeSourceDto;

  // /** Seasons of the anime. */
  // readonly season: AnimeSeasonDto;

  /** Ratings of the anime. */
  readonly rating: AnimeRatingDto;

  /** Synopsis of the anime. */
  readonly description: string;

  /** List of studios creating on anime. */
  readonly studio: string;

  /** List of anime genres. */
  readonly genres: readonly string[];

  readonly episodesTotal: number;

  readonly nextEpisodeTime: string | null;

  readonly mpaa: string;

  readonly duration: string;

  readonly author: string;

  readonly episodes: readonly AnimeEpisode[];
}
