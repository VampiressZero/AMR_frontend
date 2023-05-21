import { Grid } from '@mui/material';
import { FC, memo, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'store';
import styles from './MangaPage.module.css';
import { fetchAnimeById } from 'store/animeExtender/dispatchers';
import { selectAnimeIdList, selectAnimeList } from 'store/animeCommon/selectors';
import { AnimeCommon } from 'store/core/models/animeCommon';
import { MangaShortPage } from 'features/manga/components/MangaShort';

const DayOfWeek = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

/** Manga page component. */
const MangaPageComponent: FC = () => {
  const [isDisplayDayOfWeek, setIsDisplayDayOfWeek] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const dispatch = useAppDispatch();
   useEffect(()=> {
    dispatch(fetchAnimeById(6))
   }, [dispatch])

   const animeIdList = useAppSelector(selectAnimeIdList);
   const animeList = useAppSelector(state => selectAnimeList(state, animeIdList));

  const handleDisplayDayOfWeek = (index: number) => {
    setIsDisplayDayOfWeek(isDisplayDayOfWeek.map((isDisplayDay, i) => {
      if (index === i) {
        return !isDisplayDay;
      } else {
        return isDisplayDay;
      }
    }));
  };
  
  return (
    <Grid container spacing={2}>
      <Grid spacing={1} container item>
        <Grid item className={styles.text_popular}>
          <h2>Самые популярные аниме</h2>
          <a className={styles.text_all_anime} href="/manga_all_titles">Вся манга</a>
        </Grid>
        <Grid item className={styles.slider}>
          <img alt='' src="https://localhost:7057/Animes/Shingeki%20no%20Kyojin/Cover.jpeg" />
          <img alt='' src="../img/40834.jpg" />
        </Grid>
      </Grid>
      <Grid spacing={1} container item>
        <Grid item xs={12}>
          <h2 className={styles.title_ongoing}>Онгоинги</h2>
          <div className='grid__images'>
            {animeList.map((anime: AnimeCommon) => <MangaShortPage key={anime.id} manga={anime} />)}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const MangaPage = memo(MangaPageComponent);
