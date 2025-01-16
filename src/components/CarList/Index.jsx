import { useDispatch, useSelector } from "react-redux";
import style from "./Style.module.css";
import { useEffect } from "react";
import { getCemperList } from "../../redux/catalog/catalogOps";
import { selectCatalogList, selectCatalogLoading } from "../../redux/catalog/catalogSelector";
import CardCar from "../CardCar/Index";


function CarList() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCemperList());
  }, [dispatch]);

  const load = useSelector(selectCatalogLoading)
  const carList = useSelector(selectCatalogList);

  if (load || !carList.items) return <div className={style.loading}>Loading...</div>
  
  return (
    <div className={style.conteiner}>
      <ul className={style.carList}>
        {carList.items.map((car) => (
          <li key={car.id}>
            <CardCar car={car} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
