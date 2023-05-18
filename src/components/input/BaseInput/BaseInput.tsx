import { IonIcon } from '@ionic/react'
import classNames from 'classnames'
import { closeOutline } from 'ionicons/icons'
import React, { HTMLInputTypeAttribute, useRef, useState } from 'react'
import styles from '../BaseInput.module.scss'
import { Body1, Body2 } from '@components/text'

export interface TextInputProps {
  className?: string
  value: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
  onFocus?: (event: any) => void
  onChange?: (event: string | null) => void
  error?: string
  name: string
  label: string
}

const CustomTextInputComp = ({
  className = '',
  value: initialValue,
  type = 'text',
  placeholder,
  onFocus,
  onChange,
  error,
  name = 'input',
  label,
}: TextInputProps) => {
  const [value, setValue] = useState(initialValue)
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

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

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.labelContainer}>
        <Body1 component="label" onClick={handleLabelClick}>
          <b>{label}</b>
        </Body1>
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
          }}
          onBlur={() => setFocused(false)}
          className={styles.input}
          value={value}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {value ? (
          <div className={styles.iconButton} onClick={handleClear}>
            <IonIcon icon={closeOutline} />
          </div>
        ) : null}
      </div>
      <Body2 component="div" color="error" className={styles.errorContainer}>
        <b>{error}</b>
      </Body2>
    </div>
  )
}

export const BaseInput = React.memo(CustomTextInputComp)
