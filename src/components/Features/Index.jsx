
import { useMemo } from "react";
import style from "./Style.module.css";
import { createNormEquipment } from "../../utilits/createNormEquipment";
import IconCard from "../Reused/IconCard/Index";

function Features({data}) {

  const { AC, bathroom, kitchen, radio, refrigerator, microwave, gas, water } =
    {...data};

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
  
  return (
    <div className={style.conteiner}>
      <ul className={style.carEquipList}>
        {equipment?.map((equip) => (
          <li key={equip.name}>
            <IconCard name={equip.name} />
          </li>
        ))}
      </ul>

      <div className={style.vehicleDetails}>
        <h2>Vehicle details</h2>
        <hr />
        <ul>
          <li>
            <p></p>
            <p></p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Features;
