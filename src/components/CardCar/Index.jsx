import { Fragment, useMemo } from "react";
import style from "./Style.module.css";
import IconCard from './../Reused/IconCard/Index';
import { createNormEquipment } from './../../utilits/createNormEquipment';
import { useNavigate } from "react-router-dom";


function CardCar({car}) {

  
  const {
    id,
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    AC,
    transmission,
    engine,
    bathroom,
    kitchen,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = {
    ...car,
  };

  //функція поверне масив об'єктів з описом параметрів авто, назвою, наявністю, та назвою іконки

  const equipment = useMemo(() =>
    createNormEquipment(
      {AC,
      bathroom,
      kitchen,
      radio,
      refrigerator,
      microwave,
      gas,
      water}
    )
  ,[AC,
    bathroom,
    kitchen,
    radio,
    refrigerator,
    microwave,
    gas,
    water,])

    const nav = useNavigate();
    const goToCarInfo = () => {
      nav(`${id}`);
    };

  return (
    <div className={style.conteiner}>
      <div
        className={style.carPhoto}
        style={{
          backgroundImage: `url(${gallery[0].original})`,
        }}
      ></div>
      <div className={style.carInfo}>
        <div className={style.carName}>
          <h2 className={style.name}> {name} </h2>
          <div className={style.priceContainer}>
            <h2 className={style.price}>€{price + ".00"} </h2>
            <svg className={style.carFavorite} width="26" height="24">
              <use href={`/public/images/icon/icon.svg#icon-heart`}></use>
            </svg>
          </div>
        </div>
        <div className={style.carDetail}>
          <svg className={style.starlIcon} width="16" height="16">
            <use href={`/public/images/icon/icon.svg#icon-star`}></use>
          </svg>
          <p>
            {rating}({reviews.length} Reviews)
          </p>
          <img
            className={style.mapIcon}
            src="/public/images/icon/Map.svg"
            alt="map"
          />
          <p> {location} </p>
        </div>
        <div className={style.carDescription}>
          <p> {description} </p>
        </div>
        <div className={style.carEquipment}>
          <ul className={style.carEquipList}>
            <li>
              <IconCard name={"transmission"} text={transmission} />
            </li>
            <li>
              <IconCard name={"engine"} text={engine} />
            </li>
            {equipment?.map((equip) => (
              <li key={equip.name}>
                <IconCard name={equip.name} />
              </li>
            ))}
          </ul>
        </div>
        <button onClick={goToCarInfo} className={style.carShowMore}>
          Show more
        </button>
      </div>
    </div>
  );
}

export default CardCar;
