import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthRoutes } from '../auth/';
import { JournalRoutes } from '../journal/';
import { ChecKingAuth } from '../ui/';
import { authState } from '../store/auth';
import { useCheckAuth } from '../hooks';

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === authState.cheking) {
    return <ChecKingAuth />;
  }
  return (
    <Routes>
      {status === authState.authenticated ? (
        <Route path='/*' element={<JournalRoutes />} />
      ) : (
        <Route path='/auth/*' element={<AuthRoutes />} />
      )}
      <Route path='/*' element={<Navigate to='/auth/login' />} />
      {/* Login y Registro */}
      {/* <Route path='/auth/*' element={<AuthRoutes />} /> */}
      {/* JournalApp */}
      {/*  <Route path='/*' element={<JournalRoutes />} /> */}
    </Routes>
  );
};
