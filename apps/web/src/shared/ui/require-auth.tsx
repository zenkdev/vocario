import type { ComponentType, ReactNode } from 'react';
import { useAppSelector } from '@/lib/hooks';

interface Props {
  children: ReactNode;
  LoginComponent: ComponentType;
}

export function RequireAuth({ children, LoginComponent }: Props) {
  const { isLoggedIn } = useAppSelector(state => state.app);
  return isLoggedIn ? children : <LoginComponent />;
}
