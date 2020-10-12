import React from "react";
import { Formik, Field, Form } from "formik";

function FormUser(props) {
  return (
    <div>
      <Formik initialValues={props.initialValues} onSubmit={props.submit}>
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="user" />
            <button type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormUser;
