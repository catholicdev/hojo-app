import React from 'react'
import { Field } from 'react-final-form'
import { InputProps, BaseInput } from '../../input/BaseInput/BaseInput'
import { PasswordInput } from '@components/input'

export type InputFieldProps = React.ComponentProps<typeof Field> &
  Omit<InputProps, 'error' | 'value' | 'onBlur' | 'onChange' | 'onFocus'>

export const InputField = ({
  name,
  validate,
  type,
  ...props
}: InputFieldProps) => {
  const InputComponent = type === 'password' ? PasswordInput : BaseInput

  return (
    <Field<any> name={name} validate={validate}>
      {({ input, meta }) => (
        <InputComponent
          {...props}
          type={type}
          name={input.name}
          value={input.value}
          onFocus={input.onFocus}
          onBlur={input.onBlur}
          onChange={input.onChange}
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
