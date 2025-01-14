import { Link } from 'react-router-dom';
import style from './Style.module.css'

function Header () {
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
              {" "}
              <Link to={"/"}>Home</Link>{" "}
            </li>
            <li className={style.navItem}>
              <Link to={"/catalog"}>Catalog</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Header;