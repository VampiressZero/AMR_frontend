import { AnimeCommon } from 'store/core/models/animeCommon';
import { ListItem } from '@mui/material';
import { memo, FC, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';


interface Props {

  /** Manga. */
  readonly manga: AnimeCommon;
}

/** Manga short description page component. */
const MangaShortPageComponent: FC<Props> = ({ manga }) => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const setId = useCallback(() => {
    navigate(`/manga/${String(manga.id)}`)
    console.log(`/manga/${String(manga.id)}`);
  }, [manga.id, navigate]);

  return (
    <ListItem>
      <img
        onClick={setId}
        alt={`${manga.titleEnglish || manga.titleOriginal}`}
        src={manga.image}
      />
    </ListItem>
  );
};

export const MangaShortPage = memo(MangaShortPageComponent);
