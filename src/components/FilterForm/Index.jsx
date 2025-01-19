import { Field, Form, Formik } from "formik";
import style from "./Style.module.css";
import IconFilter from "../Reused/IconFilter/Index";
import { useDispatch } from "react-redux";
import { filtersChange } from "../../redux/filters/filtersSlice";

import locationIcon from '../../../public/images/icon/map.svg'

function FilterForm() {
  
  const initialValues = {
    location: "",
    equipment: [],
    type: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(filtersChange(values));
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={style.conteiner}>
          <h3 className={style.h3}>Location</h3>
          <div className={style.locationConteiner}>
            <Field
              className={style.fieldLocation}
              type="text"
              name="location"
              placeholder="Kyiv, Ukraine"
            />
            <img src={locationIcon} alt="map" className={style.locationIcon} />
          </div>

          <h3 className={style.h3}>Filters</h3>

          <h2 className={style.h2}>Vehicle equipment</h2>
          <hr className={style.hr} />
          <div className={style.equipmentConteiner}>
            <label>
              <Field type="checkbox" name="equipment" value="ac" />
              <IconFilter text={"AC"} icon={"wind"} />
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="automatic" />
              <IconFilter text={"Automatic"} icon={"selector"} />
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="kitchen" />
              <IconFilter text={"Kitchen"} icon={"cup"} />
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="tv" />
              <IconFilter text={"TV"} icon={"tv"} />
            </label>
            <label>
              <Field type="checkbox" name="equipment" value="bathroom" />
              <IconFilter text={"Bathroom"} icon={"shower"} />
            </label>
          </div>

          <h2 className={style.h2}>Vehicle type</h2>
          <hr className={style.hr} />
          <div className={style.typeConteiner}>
            <label>
              <Field type="radio" name="type" value="van" />
              <IconFilter text={"Van"} icon={"grid-1x2"} />
            </label>
            <label>
              <Field type="radio" name="type" value="fully integrated" />
              <IconFilter text={"Fully Integrated"} icon={"grid"} />
            </label>
            <label>
              <Field type="radio" name="type" value="Alcove" />
              <IconFilter text={"Alcove"} icon={"grid-3x3"} />
            </label>
          </div>

          <button className={style.formButton} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default FilterForm;
