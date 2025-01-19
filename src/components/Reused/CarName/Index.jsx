import style from "./Style.module.css";

function CarName({ name, price }) {
  return (
    <div className={style.carName}>
      <h2 className={style.name}> {name} </h2>
      <div className={style.priceContainer}>
        <h2 className={style.price}>€{price + ".00"} </h2>
        <svg className={style.carFavorite} width="26" height="24">
          <use href={`/public/images/icon/icon.svg#icon-heart`}></use>
        </svg>
      </div>
    </div>
  );
}

export default CarName;
