import React from 'react'
import { Field } from 'react-final-form'
import { PasswordInputProps, PasswordInput } from './PasswordInput'

export type InputFieldProps = React.ComponentProps<typeof Field> &
  Omit<
    PasswordInputProps,
    'error' | 'value' | 'onBlur' | 'onChange' | 'onFocus'
  >

export const PasswordInputField = ({
  name,
  validate,
  label,
  placeholder,
}: InputFieldProps) => {
  return (
    <Field<any> name={name} validate={validate}>
      {({ input, meta }) => (
        <PasswordInput
          name={input.name}
          value={input.value}
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
