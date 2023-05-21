
import { Grid } from '@mui/material';
import { memo, FC } from 'react';
import ReactPlayer from 'react-player';

import styles from './VideoPlayer.module.css';

interface Props {

  /** Src videos. */
  readonly videosSrc: readonly string[];

}

/** Anime details description page component. */
const VideoPlayerComponent: FC<Props> = ({ videosSrc }) => {

  console.log(1);

  return (
    <Grid className={styles['video-box']} xs={10} item container>
      <ReactPlayer
        height='auto'
        width='100%'
        url={'https://' + videosSrc[0]}
        controls={true}
      />
    </Grid>
  );
};

export const VideoPlayer = memo(VideoPlayerComponent);
