import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <NavLink to=".">PAGRINDINIS</NavLink>
      <NavLink to="about">APIE MUS</NavLink>
      <NavLink to="services">PASLAUGOS</NavLink>
      <NavLink to="contacts">KONTAKTAI</NavLink>
      <NavLink to="gallery">GALERIJA</NavLink>
    </nav>
  );
};

export default Menu;
