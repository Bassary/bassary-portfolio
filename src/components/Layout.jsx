import { Outlet } from 'react-router-dom';
import useScrollToTop from './useScrollToTop';

export default function Layout() {
  useScrollToTop();

  return (
      <Outlet />
    
  );
}
