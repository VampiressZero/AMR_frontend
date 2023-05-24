
import { Grid } from '@mui/material';
import { memo, FC, useState, useRef, SyntheticEvent } from 'react';
import ReactPlayer from 'react-player';
import { OnProgressProps } from 'react-player/base';
import screenfull from 'screenfull';
import { formatTime } from 'features/utils';

import { ControlIcons } from '../ControlIcons';

import styles from './VideoPlayer.module.css';

interface Props {

  /** Src videos. */
  readonly videosSrc: readonly string[];

}

let count = 0;

/** Anime details description page component. */
// eslint-disable-next-line max-lines-per-function
const VideoPlayerComponent: FC<Props> = ({ videosSrc }) => {
  const reactPlayerRef = useRef<ReactPlayer | null>(null);
  const playerDivRef = useRef<HTMLDivElement | null>(null);
  const controlsRef = useRef<HTMLDivElement | null>(null);
  const [playerstate, setPlayerState] = useState({
    playing: false,
    muted: false,
    volume: 1,
    playerbackRate: 1.0,
    played: 0,
    seeking: false,
  });

  const { playing, muted, volume, playerbackRate, played } = playerstate;

  const handlePlaying = () => {
    setPlayerState({
      ...playerstate,
      playing: !playerstate.playing,
    });
  };

  const handleRewind = () => {
    reactPlayerRef.current?.seekTo(reactPlayerRef.current.getCurrentTime() - 10, 'seconds');
  };

  const handleFastForward = () => {
    reactPlayerRef.current?.seekTo(reactPlayerRef.current.getCurrentTime() + 30, 'seconds');
  };

  const handlePlayerProgress = (state: OnProgressProps) => {
    if (count > 2 && controlsRef.current) {
      controlsRef.current.style.visibility = 'hidden';
      count = 0;
    }
    if (controlsRef.current && controlsRef.current.style.visibility === 'visible') {
      count += 1;
    }
    if (!playerstate.seeking) {
      setPlayerState({ ...playerstate, ...state });
    }
  };

  const handlePlayerSeek = (_event: Event, value: number | number[]) => {
    setPlayerState({ ...playerstate, played: (Number(value) / 100) });
    reactPlayerRef.current?.seekTo(Number(value) / 100);
  };

  const handlePlayerMouseSeekUp = (_event: Event | SyntheticEvent<Element, Event>, value: number | number[]) => {
    setPlayerState({ ...playerstate, seeking: false });
    reactPlayerRef.current?.seekTo(Number(value) / 100);
  };

  const currentPlayerTime = reactPlayerRef.current ? formatTime(reactPlayerRef.current.getCurrentTime()) : '00:00';
  const movieDuration = reactPlayerRef.current ? formatTime(reactPlayerRef.current.getDuration()) : '00:00';

  const handleMuting = () => {
    // if (muted === true) {
    //   setPlayerState({ ...playerstate, volume: 0 });
    // }
    setPlayerState({ ...playerstate, muted: !playerstate.muted });
  };

  const handleVolumeChange = (_event: Event, value: number | number[]) => {
    setPlayerState({ ...playerstate, volume: (Number(value) / 100), muted: Number(value) === 0 });
  };

  const handleVolumeSeek = (_event: Event | SyntheticEvent<Element, Event>, value: number | number[]) => {
    setPlayerState({ ...playerstate, volume: (Number(value) / 100), muted: Number(value) === 0 });
  };

  const handlePlayerRate = (rate: number) => {
    setPlayerState({ ...playerstate, playerbackRate: rate });
  };

  const handleFullScreenMode = () => {
    // eslint-disable-next-line no-unused-expressions
    playerDivRef?.current && screenfull.toggle(playerDivRef.current);
  };

  const handleMouseMove = (() => {
    if (controlsRef.current) {
      controlsRef.current.style.visibility = 'visible';
      count = 0;
    }
  });

  const hanldeMouseLeave = (() => {
    if (controlsRef.current) {
      controlsRef.current.style.visibility = 'hidden';
      count = 0;
    }
  });

  return (
    <Grid
      onMouseMove={handleMouseMove}
      onMouseLeave={hanldeMouseLeave}
      className={styles['video']}
      ref={playerDivRef}
      xs={10}
      item
      container>
      <ReactPlayer
        height='auto'
        width='100%'
        ref={reactPlayerRef}
        url={videosSrc[0]}
        playing={playing}
        muted={muted}
        onProgress={handlePlayerProgress}
        playbackRate={playerbackRate}
      />
      {reactPlayerRef.current && <ControlIcons
        key={2}
        ref={controlsRef}
        played={played}
        isPlaying={playing}
        onPlaying={handlePlaying}
        onRewind={handleRewind}
        onFastForward={handleFastForward}
        onSeek={handlePlayerSeek}
        onSeekMouseUp={handlePlayerMouseSeekUp}
        playedTime={currentPlayerTime}
        fullVideoTime={movieDuration}
        onMuting={handleMuting}
        isMuted={muted}
        volume={volume}
        onChangeVolume={handleVolumeChange}
        onSeekVolume={handleVolumeSeek}
        playerBackRate={playerbackRate}
        onPlayRate={handlePlayerRate}
        onFullScreenMode={handleFullScreenMode}
        reactPlayerRef={reactPlayerRef.current}
      />}
    </Grid>
  );
};

export const VideoPlayer = memo(VideoPlayerComponent);
