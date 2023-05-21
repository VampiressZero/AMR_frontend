import { AnimeCommon } from 'store/core/models/animeCommon';
import { ListItem } from '@mui/material';
import { memo, FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {

  /** Anime. */
  readonly anime: AnimeCommon;
}

/** Anime short description page component. */
const AnimeShortPageComponent: FC<Props> = ({ anime }) => {
  const navigate = useNavigate();

  const setId = useCallback(() => {
    navigate(`/anime/${String(anime.id)}`)
  }, [anime.id, navigate]);

  return (
    <ListItem>
      <img
        onClick={setId}
        alt={`${anime.titleEnglish || anime.titleOriginal}`}
        src={anime.image}
      />
    </ListItem>
  );
};

export const AnimeShortPage = memo(AnimeShortPageComponent);
