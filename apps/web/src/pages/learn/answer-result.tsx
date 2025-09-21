import * as actions from '@/lib/learn-slice';
import * as selectors from '@/lib/learn-selectors';
import Fab from '@mui/material/Fab';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import StopIcon from '@mui/icons-material/Stop';
import Typography from '@mui/material/Typography';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Answer } from '@/shared/model';
import { Button } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useCallback, useEffect, useRef, useState } from 'react';

import AudioPlayer from './audio-player';

const customControls = ({ playing, toggle }: { playing: boolean; toggle: () => void }) => (
  <Fab color="primary" onClick={toggle}>
    {playing ? <StopIcon /> : <VolumeUpIcon />}
  </Fab>
);

interface AnswerResultProps {
  text: string;
  smallText?: string;
}

const useAnswerResult = () => {
  const dispatch = useAppDispatch();
  const { answer } = useAppSelector(state => state.learn);
  const audioUrl = useAppSelector(selectors.selectAudioUrl);

  const handleClick = useCallback(() => {
    dispatch(actions.nextWord({ force: true }));
  }, [dispatch]);

  return {
    title: answer === Answer.valid ? 'Correct' : 'Correct answer',
    color: answer === Answer.valid ? 'success' : 'danger',
    audioUrl,
    handleClick,
  };
};

function AnswerResult({ text, smallText }: AnswerResultProps) {
  const { title, color, audioUrl, handleClick } = useAnswerResult();
  const player = useRef<AudioPlayer>(null);
  const [playing, setPlaying] = useState(false);
  const handlePlayingChange = useCallback((value: boolean) => setPlaying(value), [setPlaying]);
  useEffect(() => {
    const el = player.current;
    if (el) {
      el.toggle();
    }
  }, []);

  return (
    <Stack py={1} gap={2}>
      <Typography variant="body2" color={color}>
        {title}
      </Typography>
      <LinearProgress sx={{ width: '100%' }} variant={playing ? 'indeterminate' : 'determinate'} value={0} />
      <AudioPlayer ref={player} src={audioUrl} customControls={customControls} onPlayingChange={handlePlayingChange} />
      <Typography variant="body2" color={color}>
        {text}
      </Typography>
      {smallText && <Typography variant="subtitle1">{smallText}</Typography>}
      <Stack alignItems="center">
        <Button variant="outlined" onClick={handleClick}>
          Next
        </Button>
      </Stack>
    </Stack>
  );
}

export default AnswerResult;
