import { Collapse, Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { FC, Fragment, memo, useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from 'store';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import styles from './AnimePage.module.css';
import { fetchAnimeById } from 'store/animeExtender/dispatchers';
import { selectAnimeIdList, selectAnimeList } from 'store/animeCommon/selectors';
import { AnimeCommon } from 'store/core/models/animeCommon';
import { AnimeShortPage } from 'features/anime/components/AnimeShort';
import { fetchAnimeList } from 'store/animeCommon/dispatchers';

const DayOfWeek = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье',
];

/** Anime page component. */
const AnimePageComponent: FC = () => {
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
  useEffect(() => {
    dispatch(fetchAnimeList())
    // dispatch(fetchAnimeById(6))
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
          <a className={styles.text_all_anime} href="/anime_all_titles">Все аниме</a>
        </Grid>
        <Grid item className={styles.slider}>
          {animeList.map((anime: AnimeCommon) => <AnimeShortPage key={anime.id} anime={anime} />)}

        </Grid>
      </Grid>
      <Grid spacing={1} container item>
        <Grid item xs={4.5}>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <h3 className={styles.title_schedule}> Расписание </h3>
            }
          >
            {DayOfWeek.map((item: string, i: number) =>
              <Fragment key={i}>
                <div>
                  <ListItemButton className={styles.day_week_name} onClick={() => handleDisplayDayOfWeek(i)}>
                    <ListItemText primary={item} />
                    {isDisplayDayOfWeek[i] ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </div><Collapse in={isDisplayDayOfWeek[i]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem key={i + 100} className={styles.schedule_item} sx={{ pl: 4 }}>
                      <img className={styles.round_picture} src="../img/45576.jpg" alt="Реикарнация" title="Реикарнация" />
                      <p>Реинкарнация безработного: История о приключениях в другом мире</p>
                      <p style={{ textAlign: 'end' }}>10 серия <br /> (2 янв. 17:15)</p>
                    </ListItem>
                  </List>
                </Collapse>
              </Fragment>
            )}
          </List>

        </Grid>
        <Grid item xs={7.5}>
          <h2 className={styles.title_ongoing}>Онгоинги</h2>
          <div className='grid__images'>
            {animeList.map((anime: AnimeCommon) => <AnimeShortPage key={anime.id} anime={anime} />)}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const AnimePage = memo(AnimePageComponent);
