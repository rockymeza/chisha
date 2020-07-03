import * as React from "react"
import { Formik, FormikHelpers, Form } from "formik"
import Field from "app/components/Field"
import { ListCreateArgs } from "db"

type Values = ListCreateArgs["data"]

type Props = {
  initialValues: Partial<Values>
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>
}

const ListForm = ({ initialValues, onSubmit }: Props) => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Field id="title" type="text" name="title" label="Title" />

          <div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ListForm
