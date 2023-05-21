import { StudioMapper } from 'store/core/mappers/studio.mapper';
import { StudioDto } from 'store/core/dtos/studio.dto';
import { Studio } from 'store/core/models/studio';

import { http } from '..';

const studioUrl = 'anime/studios/';

export namespace StudioService {

  /**
   * Obtains information about a studio by provided id.
   * @param id Studio id.
   */
  export async function fetchStudioById(id: number): Promise<Studio> {
    const { data } = await http.get<StudioDto>(`${studioUrl}${id}/`);
    return StudioMapper.fromDto(data);
  }

}
