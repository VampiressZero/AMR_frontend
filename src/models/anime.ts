import { AnimeEpisode } from 'store/core/dtos/animeFull.dto';
import { AnimeSource, AnimeSeason, AnimeRating } from 'store/core/models/animeFull';
import { Genre } from 'store/core/models/genre';
import { Studio } from 'store/core/models/studio';

/** */
export interface AnimeExtension{

  /** Anime ID. */
  readonly id: number;

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
