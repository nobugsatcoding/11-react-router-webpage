import { Outlet } from 'react-router-dom';
import Navbar from '../navigation/Navbar';
import StyledNavbar from '../navigation/StyledNavbar';

const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Navbar />
      <section className='page'>
        <Outlet />
      </section>
    </>
  );
};

export default SharedLayout;