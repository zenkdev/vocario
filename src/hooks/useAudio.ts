import { useCallback, useEffect, useState } from 'react';

const useAudio = (url: string, preload: 'none' | 'metadata' | 'auto' = 'metadata'): [boolean, () => void] => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = useCallback(() => setPlaying(current => !current), []);

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [audio, playing]);

  useEffect(() => {
    audio.preload = preload;
    audio.addEventListener('ended', () => setPlaying(false));
    return () => audio.removeEventListener('ended', () => setPlaying(false));
  }, [audio, preload]);

  return [playing, toggle];
};

export default useAudio;
