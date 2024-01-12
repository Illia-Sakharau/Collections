import { Outlet } from 'react-router-dom';
import Header from '@organisms/header/Header';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </>
  );
};

export default RootLayout;
