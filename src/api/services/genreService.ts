import { Genre } from 'store/core/models/genre';
import { PaginationDto } from 'store/core/dtos/pagination.dto';
import { GenreDto } from 'store/core/dtos/genre.dto';
import { GenreMapper } from 'store/core/mappers/genre.mapper';

import { http } from '..';

const genreUrl = 'anime/genres/';

export namespace GenresService {

  /** Fetches a list of genres. */
  export async function fetchGenres(): Promise<Genre[]> {
    const { data } = await http.get<PaginationDto<GenreDto>>(genreUrl);
    return data.results.map(dto => GenreMapper.fromDto(dto));
  }

  /**
   * Obtains information about a genre by provided id.
   * @param id Genre id.
   */
  export async function fetchGenreById(id: number): Promise<Genre> {
    const { data } = await http.get<GenreDto>(`${genreUrl}${id}/`);
    return GenreMapper.fromDto(data);
  }

}
