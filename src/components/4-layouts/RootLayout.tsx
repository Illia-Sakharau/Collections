import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <>
      <header>HEADER</header>
      <main>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </>
  );
};

export default RootLayout;
