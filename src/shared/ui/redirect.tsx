import { Navigate, generatePath, useParams } from 'react-router';

export interface RedirectProps {
  to: string;
  replace?: boolean;
}

export function Redirect({ to, replace = true }: RedirectProps) {
  const params = useParams();
  const redirectWithParams = generatePath(to, params);

  return <Navigate to={redirectWithParams} replace={replace} />;
}
