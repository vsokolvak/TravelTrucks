import { Field, Form, Formik } from "formik";
import style from "./Style.module.css";

function RentForm() {

  const initialValues = {
    name: "",
    email: '',
    date: "",
    comment: ''
  };

  const handleSubmit = (values, actions) => {
    alert('done');
    actions.resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={style.conteiner}>
          <div className={style.formTitle}>
            <h3 className={style.formTitleH}>Book your campervan now</h3>
            <p className={style.formTitleText}>
              Stay connected! We are always ready to help you.
            </p>
          </div>

          <div className={style.fieldBlock}>
            <Field
              type="text"
              name="name"
              placeholder={"Name*"}
              className={style.inputField}
            />

            <Field
              type="email"
              name="email"
              placeholder={"Email*"}
              className={style.inputField}
            />

            <Field
              type="text"
              name="date"
              placeholder={"Booking date*"}
              className={style.inputField}
            />

            <Field
              as="textarea"
              rows="4"
              name="comment"
              placeholder={"Comment"}
              className={style.inputField}
            />
          </div>

          <button type="submit" className={style.submitButton}>
            Send
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default RentForm;
