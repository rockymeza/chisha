import * as React from "react"
import { Field as FieldBase, FieldAttributes, ErrorMessage } from "formik"

type Props = FieldAttributes<{
  label: React.ReactNode
}>

export default function Field({ id, type, name, label, ...props }: Props) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <FieldBase type={type} name={name} {...props} />
      <ErrorMessage name={name} component="div" />
    </div>
  )
}
