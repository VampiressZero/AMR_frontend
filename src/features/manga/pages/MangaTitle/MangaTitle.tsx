import { Grid } from '@mui/material';
import { FC, memo, useEffect, useState } from 'react';

import styles from './MangaTitle.module.css';
import { useAppDispatch, useAppSelector } from 'store';
import { useLocation } from 'react-router-dom';

import { VideoPlayer } from 'features/anime/components/VideoPlayer';
import { selectAnimeById } from 'store/animeExtender/selectors';
import { fetchAnimeById } from 'store/animeExtender/dispatchers';
import { formatDate } from 'features/utils';

const INITIAL_ID = 0;

/** Manga page component. */
const MangaTitleComponent: FC = () => {
  const location = useLocation()
  const [id, setId] = useState(INITIAL_ID);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const idParam = Number(location.pathname.replace('/manga/', ''));

    if (idParam !== INITIAL_ID && idParam !== id) {
      setId(idParam);
      dispatch(fetchAnimeById(idParam));
    }
  }, [dispatch, id, location.pathname]);

  const anime = useAppSelector(state => selectAnimeById(state, id));

  return (
    <Grid spacing={2} container>
      <Grid item xs={3}>
        <img
          className={styles['anime__image']}
          alt={`image of anime ${anime.titleEnglish || anime.titleOriginal
            }`}
          src={anime.image}
        />
      </Grid>

      <Grid item xs={9}>
        <Grid className={styles['anime__detail']}>
          <p className={styles['anime__title-english']}>
            {anime.titleRussian}
          </p>
          <Grid className={styles['anime__title-alternative']}>
            <p>{anime.titleOriginal}</p>
            <p>{anime.titleEnglish}</p>
          </Grid>
        </Grid>
        <Grid className={styles['anime__detail']}>
          <span className={styles['anime__title-details']}>Тип</span>
          <span>{anime.type}</span>
        </Grid>
        <Grid className={styles['anime__detail']}>
          <span className={styles['anime__title-details']}>Выпуск</span>
          <span>
            с {formatDate(anime.airingStart)} до {' '}
            {formatDate(anime.airingFinish)}
          </span>
        </Grid>
        <Grid className={styles['anime__detail']}>
          <span className={styles['anime__title-details']}>Статус</span>
          <span>{anime.status}</span>
        </Grid>
        <Grid className={styles['anime__detail']}>

          <span className={styles['anime__title-details']}>
            Студия
          </span>
          <span>
            {anime.studio}
          </span>

        </Grid>
        <Grid className={styles['anime__detail']}>

          <span className={styles['anime__title-details']}>Жанры</span>
          <span>{anime.genres?.join(', ')}</span>

        </Grid>
        <Grid className={styles['anime__detail']}>
          <span className={styles['anime__title-details']}>Описание</span>
          <span>{anime.synopsis}</span>
        </Grid>
      </Grid>

      {anime.episodes &&
        <VideoPlayer videosSrc={[anime.episodes[0].video]} />
      }
    </Grid>
  );
};

export const MangaTitle = memo(MangaTitleComponent);
