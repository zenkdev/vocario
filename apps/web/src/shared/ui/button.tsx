import MuiButton from '@mui/material/Button';
import { forwardRef, type ComponentProps } from 'react';
import { useAppSelector } from '@/lib/hooks';

function size(fontSize: number) {
  if (fontSize < 0.9) return 'small';
  if (fontSize > 1.1) return 'large';
  return undefined;
}

export const Button = forwardRef<HTMLButtonElement, ComponentProps<typeof MuiButton>>((props, ref) => {
  const { fontSize } = useAppSelector(state => state.app);

  return <MuiButton ref={ref} size={size(fontSize)} {...props} />;
});
Button.displayName = 'Button';
