import { FieldValidator } from 'final-form'

const compose: (...validators: FieldValidator<any>[]) => FieldValidator<any> =
  (...validators) =>
  (value, allValues, meta) => {
    for (const validator of validators) {
      const result = validator(value, allValues, meta)
      if (!!result) {
        return result
      }
    }
    return undefined
  }

const required: FieldValidator<any> = (value) =>
  value ? undefined : 'Vui lòng điền vào đây.'

const email: FieldValidator<any> = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    ? undefined
    : 'Email không hợp lệ.'
}

export const Validator = {
  compose,
  required,
  email,
}
