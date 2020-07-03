import * as React from "react"
import { useQuery } from "blitz"
import { Formik, FormikHelpers, Form } from "formik"
import Field from "app/components/Field"
import getLists from "app/lists/queries/getLists"
import { CreateRecipeInput } from "app/recipes/types"

type Values = CreateRecipeInput

type Props = {
  initialValues: Partial<Values>
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>
}

const RecipeForm = ({ initialValues, onSubmit }: Props) => {
  const [lists] = useQuery(getLists, { orderBy: { title: "asc" } })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, formikHelpers) => {
        const fixedValues = {
          title: values.title || "",
          // @ts-ignore
          listIds: values.listIds.map((id) => parseInt(id, 10)),
        }
        return onSubmit(fixedValues, formikHelpers)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field id="title" type="text" name="title" label="Title" />

          <Field id="listIds" name="listIds" label="Lists" multiple as="select">
            {lists.map((list) => (
              <option key={list.id} value={list.id}>
                {list.title}
              </option>
            ))}
          </Field>

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

export default RecipeForm
