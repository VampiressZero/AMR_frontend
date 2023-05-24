import { AnimeCommonDto, AnimeStatusDto } from '../dtos/animeCommon.dto';
import { AnimeCommon } from '../models/animeCommon';

export namespace AnimeCommonMapper {

  /**
   * Maps dto to model.
   * @param dto Anime dto.
   */
  export function fromDto(dto: AnimeCommonDto): AnimeCommon {
    console.log(dto.cover);

    return ({
      id: dto.id,
      image: dto.cover,
      titleEnglish: dto.englishName,
      titleOriginal: dto.originalName,
      titleRussian: dto.russianName,
      // rating: dto.rating,
      type: dto.type,
      status: dto.status,
      airingStart: dto.startDate === null ? null : new Date(dto.startDate),
      airingFinish: dto.finishDate === null ? null : new Date(dto.finishDate),
    });
  }

  // export const fromDtoMapStatus: Readonly<Record<AnimeStatusDto, AnimeStatus>> = {
  //   [AnimeStatusDto.Airing]: AnimeStatus.Airing,
  //   [AnimeStatusDto.Finished]: AnimeStatus.Finished,
  //   [AnimeStatusDto.NotYetAired]: AnimeStatus.NotYetAired,
  // };

  // export const toDtoMapStatus: Readonly<Record<AnimeStatus, AnimeStatusDto>> = {
  //   [AnimeStatus.Airing]: AnimeStatusDto.Airing,
  //   [AnimeStatus.Finished]: AnimeStatusDto.Finished,
  //   [AnimeStatus.NotYetAired]: AnimeStatusDto.NotYetAired,
  // };

  // export const fromDtoMapType: Readonly<Record<AnimeTypeDto, AnimeType>> = {
  //   [AnimeTypeDto.Tv]: AnimeType.Tv,
  //   [AnimeTypeDto.Ova]: AnimeType.Ova,
  //   [AnimeTypeDto.Movie]: AnimeType.Movie,
  //   [AnimeTypeDto.Special]: AnimeType.Special,
  //   [AnimeTypeDto.Ona]: AnimeType.Ona,
  //   [AnimeTypeDto.Music]: AnimeType.Music,
  // };

  // export const toDtoMapType: Readonly<Record<AnimeType, AnimeTypeDto>> = {
  //   [AnimeType.Tv]: AnimeTypeDto.Tv,
  //   [AnimeType.Ova]: AnimeTypeDto.Ova,
  //   [AnimeType.Movie]: AnimeTypeDto.Movie,
  //   [AnimeType.Special]: AnimeTypeDto.Special,
  //   [AnimeType.Ona]: AnimeTypeDto.Ona,
  //   [AnimeType.Music]: AnimeTypeDto.Music,
  // };
}
