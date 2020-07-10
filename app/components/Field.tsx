import * as React from "react"
import cn from "classnames"
import { Field as FieldBase, FieldAttributes, ErrorMessage, useField } from "formik"

type Props = FieldAttributes<{
  label: React.ReactNode
}>

export default function Field({ id, type, name, label, ...props }: Props) {
  const [field, meta, helpers] = useField({ type, name, ...props })

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor="name" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">
        Name
      </label>

      <FieldBase
        className={cn(
          "text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none p-2",
          {
            "border-red-500": meta.touched && meta.error,
          }
        )}
        type={type}
        name={name}
        {...props}
      />

      <ErrorMessage
        component="div"
        className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1"
        name={name}
      />
    </div>
  )
}
