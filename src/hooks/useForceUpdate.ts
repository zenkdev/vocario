import { useState } from 'react';

const useForceUpdate = (): (() => void) => {
  const [counter, setCounter] = useState(0);
  return () => setCounter(counter + 1);
};

export default useForceUpdate;
