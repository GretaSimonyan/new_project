import React, {
  Suspense, useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import AppRouter from 'app/providers/router';
import { useTheme } from 'app/providers/ThemeProvider';
import { userActions } from 'entities/User';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  // TODO probably we don't need this here
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);
  // for testing error boundary
  // useEffect(() => {
  //   throw new Error();
  // }, []);
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
