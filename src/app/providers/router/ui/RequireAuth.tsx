import {
  useLocation,
  Navigate,
} from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth = (props: RequireAuthProps) => {
  const { children } = props;
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return (
      <Navigate
        to={RoutePath.main}
        state={{
          from: location,
        }}
        replace
      />
    );
  }

  return children;
};
