import { Link, NavLink } from 'react-router-dom';
import style from './Style.module.css'
import clsx from 'clsx';

function Header () {

  const buildLinkClass = ({ isActive }) => {
    return clsx(style.navItemLink, isActive && style.active);
  };

  return (
    <div className={style.container}>
      <Link to={"/"} className={style.logo}>
        <img
          src="../../../../public/images/logo/TravelTrucks.svg"
          alt="TravelTrucks"
        />
      </Link>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <NavLink className={buildLinkClass} to={"/"}>
              Home
            </NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink className={buildLinkClass} to={"/catalog"}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;