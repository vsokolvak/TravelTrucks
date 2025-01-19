import style from "./Style.module.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCemper } from "../../redux/catalog/catalogOps";
import { selectCatalogCurrent } from "../../redux/catalog/catalogSelector";
import clsx from "clsx";
import RentForm from "../../components/RentForm/Index";
import Features from "../../components/Features/Index";

function Cemper() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCemper(1));
  }, [dispatch]);

  const cemper = useSelector(selectCatalogCurrent);
  const [activeMenu, setActiveMenu] = useState(true)


  return (
    <div className={style.conteiner}>
      <div className={style.carName}>
        <h2 className={style.name}> {cemper.name} </h2>
        <div className={style.carDetail}>
          <svg className={style.starlIcon} width="16" height="16">
            <use href={`/public/images/icon/icon.svg#icon-star`}></use>
          </svg>
          <p className={style.carDetailText}>
            {cemper.rating} ({cemper.reviews?.length} Reviews)
          </p>
          <img
            className={style.mapIcon}
            src="/public/images/icon/Map.svg"
            alt="map"
          />
          <p> {cemper.location} </p>
        </div>
        <div className={style.priceContainer}>
          <h2 className={style.price}>€{cemper.price + ".00"} </h2>
          <svg className={style.carFavorite} width="26" height="24">
            <use href={`/public/images/icon/icon.svg#icon-heart`}></use>
          </svg>
        </div>
      </div>

      <ul className={style.imageGallery}>
        {cemper.gallery?.map((el, index) => (
          <li key={index}>
            <div
              className={style.galleryImg}
              style={{
                backgroundImage: `url(${el.thumb})`,
              }}
            ></div>
          </li>
        ))}
      </ul>

      <p className={style.carDescription}>{cemper.description}</p>

      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <button
              className={clsx(style.navItemLink, activeMenu && style.active)}
              onClick={() => setActiveMenu(true)}
            >
              Features
            </button>
          </li>
          <li className={style.navItem}>
            <button
              className={clsx(style.navItemLink, activeMenu || style.active)}
              onClick={() => setActiveMenu(false)}
            >
              Reviews
            </button>
          </li>
        </ul>
      </nav>

      <div className={style.inActive}>
        <div>{<Features data={cemper} />}</div>
        <div>
          <RentForm />
        </div>
      </div>
    </div>
  );
}

export default Cemper;
