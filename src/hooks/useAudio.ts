import { useCallback, useEffect, useState } from 'react';

type UseAudio = { playing: boolean; toggle: () => void; setUrl: (value: string) => void };

const useAudio = (url?: string, preload: 'none' | 'metadata' | 'auto' = 'metadata'): UseAudio => {
  const [audio] = useState(Object.assign(new Audio(url), { preload }));
  const [playing, setPlaying] = useState(false);
  const toggle = useCallback(() => setPlaying(current => !current), []);
  const setUrl = useCallback(
    (value: string) => {
      audio.src = value;
    },
    [audio],
  );

  useEffect(() => {
    if (playing) {
      // eslint-disable-next-line no-console
      audio.play().catch(e => console.error(e));
    } else {
      audio.pause();
    }
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => audio.removeEventListener('ended', () => setPlaying(false));
  }, [audio]);

  return { playing, toggle, setUrl };
};

export default useAudio;
