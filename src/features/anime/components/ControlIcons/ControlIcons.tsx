
import { Button, Grid, IconButton, Popover, Slider, Typography } from '@mui/material';
import { memo, SyntheticEvent, useState, MouseEvent, useRef, forwardRef } from 'react';
import {
  FastForwardSharp,
  FastRewind,
  Fullscreen,
  PauseSharp,
  PlayArrowSharp,
  VolumeUp,
  KeyboardDoubleArrowRight,
  KeyboardDoubleArrowLeft,
  VolumeOff,
  CameraAlt,
} from '@mui/icons-material';
import ReactPlayer from 'react-player';
import html2canvas from 'html2canvas';

import { PrettoSlider } from './PrettoSlider';
import styles from './ControlIcons.module.css';
interface Props {

  /** Handle play and pause. */
  readonly onPlaying: () => void;

  /** Process rewind. */
  readonly onRewind: () => void;

  /** Handle the fast forward. */
  readonly onFastForward: () => void;

  /** Is the video playing. */
  readonly isPlaying: boolean;

  /** Handle the volume level. */
  readonly onMuting: () => void;

  /** Is there any sound. */
  readonly isMuted: boolean;

  /** Current video time. */
  readonly played: number;

  /** Current player time.. */
  readonly playedTime: string;

  /** Full video time. */
  readonly fullVideoTime: string;

  /** Handle player seek. */
  readonly onSeek: (_event: Event, value: number | number[]) => void;

  /** Handle player mouse seek up. */
  readonly onSeekMouseUp: (_event: Event | SyntheticEvent<Element, Event>, value: number | number[]) => void;

  /** Handle change volume. */
  readonly onChangeVolume: (_event: Event, value: number | number[]) => void;

  /** Handle seek volume. */
  readonly onSeekVolume: (_event: Event | SyntheticEvent<Element, Event>, value: number | number[]) => void;

  /** Current volume. */
  readonly volume: number;

  /** Current rate of video. */
  readonly playerBackRate: number;

  /** Handle play rate. */
  readonly onPlayRate: (rate: number) => void;

  /** Handle full screen mode. */
  readonly onFullScreenMode: () => void;

  /** */
  readonly reactPlayerRef: ReactPlayer;
}

/** Anime details description page component. */
// eslint-disable-next-line max-lines-per-function
const ControlIconsComponent = forwardRef<HTMLDivElement, Props>(({
  onPlaying,
  isPlaying,
  onFastForward,
  onRewind,
  played,
  onSeek,
  onSeekMouseUp,
  playedTime,
  fullVideoTime,
  onMuting,
  isMuted,
  volume,
  onChangeVolume,
  onSeekVolume,
  playerBackRate,
  onPlayRate,
  onFullScreenMode,
  reactPlayerRef,
}, ref) => {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [video, setVideo] = useState<HTMLVideoElement | null>(null);

  const handlePopOver = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'playbackrate-popover' : undefined;

  const downloadScreen = () => {
    const video = (reactPlayerRef as any).player.player.player as HTMLVideoElement;
    // // video.style.objectFit = 'cover';
    video.crossOrigin = 'anonymous';
    console.log(video.crossOrigin);
    // setVideo(video);
    if (canvasRef.current) {
        canvasRef.current.width = video.videoWidth;
        canvasRef.current.height = video.videoHeight;
        const ctx = (canvasRef.current.getContext('2d') as CanvasRenderingContext2D);
        ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      // const qw = html2canvas(canvasRef.current, {
      //   allowTaint: true,
      //   foreignObjectRendering: true,
      //   useCORS: true
      // })
      // qw.then((canvas) => {
      //   console.log(canvas);
      //   const q = canvas.toDataURL();
      //   console.log(q);
        
      //   const tmpLink = document.createElement('a');
      //   tmpLink.download = 'image.png';
      //   tmpLink.href = q;
      //   document.body.appendChild(tmpLink);
      //   tmpLink.click();
      //   document.body.removeChild(tmpLink);
      // }).catch((error) => {
      //   console.log(error);

      // });

      try {
        console.log(canvasRef.current.toDataURL("image/png", 1));

        const imageUrl = canvasRef.current.toDataURL("image/png", 1);
        const tmpLink = document.createElement('a');
        tmpLink.download = 'image.png';
        tmpLink.href = imageUrl;
        document.body.appendChild(tmpLink);
        tmpLink.click();
        document.body.removeChild(tmpLink);
      } catch (error: any) {
        console.log(error)
      }

      // // //   const qwe = html2canvas(video, {
      // // //     allowTaint: true,
      // // //     foreignObjectRendering: true,
      // // //     useCORS: true,
      // // //   });
      // // //   console.log(qwe);
      // //   // qwe.then((canvas) => {
      //     canvasRef.current.width = video.videoWidth;
      //     canvasRef.current.height = video.videoHeight;
      // const ctx = (canvasRef.current.getContext('2d') as CanvasRenderingContext2D);
      // //     // console.log(ctx);
      // //     // console.log(ctx.getImageData(0,0, video.videoWidth, video.videoHeight));
      // //     // // console.log(canvas.toDataURL());
      // ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      // const asd = ctx.getImageData(0, 0, video.videoWidth, video.videoHeight)
      // console.log(asd);

      // ctx.putImageData(asd, video.videoWidth, video.videoHeight);
      // // var image = new Image();
      // // image.src = canvasRef.current.toDataURL();

      // // console.log(image.src);
      // // console.log(image);


      // const imageUrl = canvasRef.current.toDataURL();
      // const tmpLink = document.createElement('a');
      // tmpLink.download = 'image.png';
      // tmpLink.href = imageUrl;
      // document.body.appendChild(tmpLink);
      // tmpLink.click();
      // document.body.removeChild(tmpLink);
      // // })

    }
  };
  // const TempImage = window.Image

  // const Image = function() {
  //        const img = new TempImage()
  //        img.crossOrigin = 'anonymous'
  //        return img
  // }

  // console.log(Image());

  return (
    <><Grid
      width={video?.width}
      height={video?.height}
      ref={ref}
      className={styles['controls']}
      container>
      <Grid container direction='row' alignItems='center' justifyContent='start' style={{ padding: 16 }}>
        <Grid item>
          <Typography variant='h5' style={{ color: 'white' }}>Player</Typography>
        </Grid>
      </Grid>

      <Grid container direction='row' alignItems='center' justifyContent='center'>
        <IconButton className={styles['controls__icons']} aria-label='reqind'>
          <FastRewind fontSize='large' style={{ color: 'white' }} />
        </IconButton>

        <IconButton className={styles['controls__icons']} aria-label='reqind' onClick={onPlaying}>
          {isPlaying ? (
            <PauseSharp fontSize="large" style={{ color: 'white' }} />
          ) : (
            <PlayArrowSharp fontSize="large" style={{ color: 'white' }} />
          )}
        </IconButton>

        <IconButton className={styles['controls__icons']} aria-label='reqind'>
          <FastForwardSharp fontSize='large' style={{ color: 'white' }} />
        </IconButton>
      </Grid>

      <Grid container direction='row' alignItems='center' justifyContent='space-between' style={{ padding: 16 }}>
        <Grid item>
          <Typography variant='h5' style={{ color: 'white' }}>Tears Of Steel</Typography>
        </Grid>

        <Grid item xs={12}>
          <PrettoSlider
            min={0}
            max={100}
            value={played * 100}
            onChange={onSeek}
            onChangeCommitted={onSeekMouseUp} />
          <Grid container direction="row" justifyContent="space-between">
            <Typography variant="h6" style={{ color: 'white' }}>
              {playedTime}
            </Typography>
            <Typography variant="h6" style={{ color: 'white' }}>
              {fullVideoTime}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>

          <Grid container alignItems="center" direction="row">
            <IconButton className={styles['controls__icons']} aria-label='reqind' onClick={onPlaying}>
              {isPlaying ? (
                <PauseSharp fontSize="large" style={{ color: 'white' }} />
              ) : (
                <PlayArrowSharp fontSize="large" style={{ color: 'white' }} />
              )}
            </IconButton>
            <IconButton className={styles['controls__icons']} aria-label="reqind" onClick={onMuting}>
              {isMuted ? (
                <VolumeOff fontSize='large' style={{ color: 'white' }} />
              ) : (
                <VolumeUp fontSize='large' style={{ color: 'white' }} />
              )}
            </IconButton>
            <Slider
              min={0}
              max={100}
              value={volume * 100}
              onChange={onChangeVolume}
              onChangeCommitted={onSeekVolume}
              className={styles['volume__slider']} />
          </Grid>
        </Grid>
        <Grid item>
          <IconButton onClick={onRewind} className={styles['controls__icons']}>
            <KeyboardDoubleArrowLeft fontSize="small" />
            <Typography>10</Typography>
          </IconButton>
          <IconButton onClick={onFastForward} className={styles['controls__icons']}>
            <Typography>30</Typography>
            <KeyboardDoubleArrowRight fontSize="small" />
          </IconButton>

          <IconButton className={styles['controls__icons']} aria-label="reqind">
            {/* PhotoSizeSelectLarge   HighlightAlt   ScreenshotMonitorOutlined */}
            <CameraAlt fontSize="large" style={{ color: 'white' }} onClick={downloadScreen} />
          </IconButton>
          <Button onClick={handlePopOver} variant="text" className={styles['controls__playback-speed']}>
            <Typography>{playerBackRate}X</Typography>
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}>
            <Grid container direction='column-reverse'>
              {[0.5, 1, 1.25, 1.5, 1.75, 2].map(rate => (
                <Button variant='text' onClick={() => onPlayRate(rate)}>
                  <Typography color={rate === playerBackRate ? 'secondary' : 'default'}>{rate}</Typography>
                </Button>
              ))}
            </Grid>
          </Popover>

          <IconButton className={styles['controls__icons']} onClick={onFullScreenMode}>
            <Fullscreen fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid><canvas width={0} height={0} style={{ display: 'none', visibility: 'hidden' }} ref={canvasRef}></canvas></>
  );
});

export const ControlIcons = memo(ControlIconsComponent);
