import * as loginSlice from '@/lib/login-slice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

const useLoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector(state => state.login);

  const loginWithEmailAndPassword = useCallback(
    ({ email, password }: { email: string; password: string }) => dispatch(loginSlice.loginWithEmailAndPassword(email, password, navigate)),
    [dispatch, navigate],
  );
  const loginWithGithub = useCallback(() => dispatch(loginSlice.loginWithGithub(navigate)), [dispatch, navigate]);
  const loginWithGoogle = useCallback(() => dispatch(loginSlice.loginWithGoogle(navigate)), [dispatch, navigate]);
  const loginWithMicrosoft = useCallback(() => dispatch(loginSlice.loginWithMicrosoft(navigate)), [dispatch, navigate]);

  return {
    isLoading,
    loginWithEmailAndPassword,
    loginWithGithub,
    loginWithGoogle,
    loginWithMicrosoft,
    gotoSignup() {
      navigate('/signup');
    },
  };
};

export default useLoginPage;
