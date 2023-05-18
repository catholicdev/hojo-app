import React from 'react'
import { Field } from 'react-final-form'
import { TextInputProps, BaseInput } from './BaseInput'

export type InputFieldProps = React.ComponentProps<typeof Field> &
  Omit<TextInputProps, 'error' | 'value' | 'onBlur' | 'onChange' | 'onFocus'>

export const BaseInputField = ({
  name,
  validate,
  type,
  label,
  placeholder,
}: InputFieldProps) => {
  return (
    <Field<any> name={name} validate={validate}>
      {({ input, meta }) => (
        <BaseInput
          type={type}
          name={input.name}
          value={input.value}
          onFocus={input.onFocus}
          onChange={input.onChange}
          label={label}
          placeholder={placeholder}
          error={
            meta.touched && !meta.dirtySinceLastSubmit
              ? meta.error || meta.submitError
              : undefined
          }
        />
      )}
    </Field>
  )
}
