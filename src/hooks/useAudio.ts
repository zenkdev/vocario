import { useEffect, useState } from 'react';

const useAudio = (url: string): (() => void) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const play = (): void => {
    if (playing) {
      setTimeout(() => setPlaying(false), 0);
    }
    setTimeout(() => setPlaying(true), 0);
  };

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return play;
};

export default useAudio;
