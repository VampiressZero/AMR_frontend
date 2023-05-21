import { AnimeEpisode } from '../dtos/animeFull.dto';
import { AnimeCommon } from './animeCommon';
import { Genre } from './genre';
import { Studio } from './studio';

/** Available anime sources. */
export enum AnimeSource{
  FourKomaManga = 'Four koma manga',
  Book = 'Book',
  CardGame = 'Card game',
  Game = 'Game',
  LightNovel = 'Light novel',
  Manga = 'Manga',
  MixedMedia = 'Mixed media',
  Music = 'Music',
  Novel = 'Novel',
  Original = 'Original',
  PictureBook = 'Picture book',
  Radio = 'Radio',
  VisualNovel = 'Visual novel',
  WebManga = 'Web manga',
  WebNovel = 'Web novel',
  Other = 'Other',
  Unknown = 'Unknown',
}

/** Available anime ratings. */
export enum AnimeRating{
  G = 'G',
  Pg = 'PG',
  Pg13 = 'PG-13',
  R17 = 'R-17',
  RPlus = 'R-PLUS',
  RX = 'R-X',
  Unknown = 'Unknown',
}

/** Available anime seasons. */
export enum AnimeSeason{
  Summer = 'Summer',
  Winter = 'Winter',
  Spring = 'Spring',
  Fall = 'Fall',
  NonSeasonal = 'Non seasonal',
}

/** Anime. */
export interface AnimeFull extends AnimeCommon {
  /** Sources of the anime. */
  readonly source: AnimeSource;

  /** Seasons of the anime. */
  // readonly season: AnimeSeason;

  /** Ratings of the anime. */
  readonly rating: AnimeRating;

  /** Synopsis of the anime. */
  readonly synopsis: string;

  /** List of studios creating on anime. */
  readonly studio: string;

  /** List of anime genres. */
  readonly genres: readonly string[];

  readonly episodesTotal: number;

  readonly nextEpisodeTime: Date | null;

  readonly mpaa: string;

  readonly duration: string;

  readonly author: string;

  readonly episodes: readonly AnimeEpisode[];
}

export type AnimeCreate = Omit<AnimeFull, 'studiosData' | 'genresData' | 'id'>;
