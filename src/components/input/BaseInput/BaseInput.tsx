import React, {
  HTMLInputTypeAttribute,
  useRef,
  useState,
  ReactNode,
  forwardRef,
  useImperativeHandle,
} from 'react'
import classNames from 'classnames'
import { IonIcon } from '@ionic/react'
import { closeOutline } from 'ionicons/icons'

import { Body1, Body2 } from '../../text'

import styles from '../BaseInput.module.scss'

interface EndAdornmentProps {
  children?: ReactNode
  onClick?: (event: any) => void
  visible?: boolean
}

export const EndAdornment = ({
  visible = true,
  onClick = () => {},
  children,
}: EndAdornmentProps) => {
  return visible ? (
    <div className={styles.endAdornment} onClick={onClick}>
      {children}
    </div>
  ) : null
}

export interface InputProps {
  className?: string
  value: any
  type?: HTMLInputTypeAttribute
  placeholder?: string
  onFocus?: (event: any) => void
  onBlur?: (event: any) => void
  onChange?: (event: string | null) => void
  error?: string
  name: string
  label: string
  endAdornment?: ReactNode
  helperText?: ReactNode
}

export interface InputRef {
  focus: () => void
}

const InputComp = forwardRef<InputRef, InputProps>(
  (
    {
      className = '',
      value: initialValue,
      type = 'text',
      placeholder,
      onFocus,
      onBlur,
      onChange,
      error,
      name = 'input',
      label,
      endAdornment,
      helperText,
    }: InputProps,
    ref
  ) => {
    const [value, setValue] = useState(initialValue)
    const [focused, setFocused] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(
      ref,
      () => ({
        focus: () => inputRef?.current?.focus(),
      }),
      []
    )

    const handleLabelClick = () => inputRef?.current?.focus()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
      onChange && onChange(e.target.value)
    }

    const handleClear = () => {
      setValue('')
      onChange && onChange('')
      inputRef.current?.focus()
    }
    const defaultEndAdornment = (
      <EndAdornment visible={!!value} onClick={handleClear}>
        <IonIcon icon={closeOutline} />
      </EndAdornment>
    )

    return (
      <div className={classNames(styles.container, className)}>
        <div className={styles.labelContainer}>
          <Body1 component="label" onClick={handleLabelClick}>
            <b>{label}</b>
          </Body1>
          {helperText ?? <span></span>}
        </div>
        <div
          className={classNames(styles.inputContainer, {
            [styles.focused]: focused,
          })}
        >
          <input
            ref={inputRef}
            type={type}
            onFocus={(e) => {
              setFocused(true)
              onFocus && onFocus(e)
              setTimeout(() => inputRef?.current?.setSelectionRange(-1, -1), 0) // set cursor at the last of the text
            }}
            onBlur={(e) => {
              setFocused(false)
              onBlur && onBlur(e)
            }}
            className={styles.input}
            value={value}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
          />
          {endAdornment ?? defaultEndAdornment}
        </div>
        <Body2 component="div" color="error" className={styles.errorContainer}>
          <b>{error}</b>
        </Body2>
      </div>
    )
  }
)

export const BaseInput = React.memo(InputComp)
