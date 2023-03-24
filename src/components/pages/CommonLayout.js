import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link } from './CommonLayout.styled';

export const CommonLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
