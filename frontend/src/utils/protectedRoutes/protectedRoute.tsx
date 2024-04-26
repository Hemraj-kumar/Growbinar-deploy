import {  Suspense } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useGlobalContext } from '../cookies/useCookie';

const ProtectedRoute = () => {
  const { Token } = useGlobalContext();
  return Token ? (
    <>
      <div >
        <Suspense
          fallback={
            <div >
              <div >
                Please Login
              </div>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </>
  ) : (
    <Navigate to={'/login'} replace />
  );
};

export default ProtectedRoute;
