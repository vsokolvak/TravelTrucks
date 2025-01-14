import style from "./Style.module.css";

function IconFilter({text, icon}) {

  return (
    <div className={style.conteiner}>
      <svg width="32" height="32">
        <use href={`../../../../public/images/icon/icon.svg#icon-${icon}`}></use>
      </svg>
      <p className={style.text}>{text}</p>
    </div>
  );
}

export default IconFilter;