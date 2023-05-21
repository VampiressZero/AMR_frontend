import { AnimeCommon } from '../core/models/animeCommon';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { AnimeService } from 'api/services/anime';
import { addAnimeCommon } from '../animeCommon/slice';
import { addGenres } from '../genre/slice';
import { addStudios } from '../studio/slice';

export const fetchAnimeById = createAsyncThunk(
  'anime/fetchAnimeById',
  async(id: number, { dispatch }) => {
    const animeFull = await AnimeService.fetchAnimeById(id);
    console.log(12);
    

    dispatch(addAnimeCommon(animeFull as AnimeCommon));
    // dispatch(addStudios([...animeFull.studiosData]));
    // dispatch(addGenres([...animeFull.genresData]));

    return animeFull;
  },
);
