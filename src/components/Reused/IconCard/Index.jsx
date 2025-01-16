import style from "./Style.module.css";

function IconCard({ name, text }) {

  let equipText = text || name

  return (
    <div className={style.conteiner}>
      <svg width="20" height="20">
        <use href={`/public/images/icon/iconCard.svg#icon-${name}`}></use>
      </svg>
      <p className={style.text}>{equipText}</p>
    </div>
  );
}

export default IconCard;