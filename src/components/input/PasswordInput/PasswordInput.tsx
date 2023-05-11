import { IonIcon } from '@ionic/react'
import classNames from 'classnames'
import { eyeOutline, eyeOffOutline } from 'ionicons/icons'
import React, { useRef, useState } from 'react'
import styles from '../BaseInput.module.scss'
import { Body1, Body2 } from '@components/text'

interface CustomTextInputProps {
  className?: string
  value: string
  placeholder?: string
  onChange?: (event: string | null) => void
  name: string
  label: string
  error?: string
  helperText?: string
  onHelperTextClick?: () => void
}

const PasswordInputComp = ({
  className = '',
  value: initialValue,
  placeholder,
  onChange,
  name = 'input',
  label,
  error,
  helperText,
}: CustomTextInputProps) => {
  const [value, setValue] = useState(initialValue)
  const [focused, setFocused] = useState(false)
  const [type, setType] = useState<'password' | 'text'>('password')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleLabelClick = () => inputRef?.current?.focus()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onChange && onChange(e.target.value)
  }
  const toggleVisibility = () => {
    setType((prev) => (prev === 'text' ? 'password' : 'text'))
  }

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.labelContainer}>
        <Body1 component="label" onClick={handleLabelClick}>
          <b>{label}</b>
        </Body1>
        {helperText ? (
          <Body2 className={styles.helper}>
            <b>{helperText}</b>
          </Body2>
        ) : (
          <span></span>
        )}
      </div>
      <div
        className={classNames(styles.inputContainer, {
          [styles.focused]: focused,
        })}
      >
        <input
          ref={inputRef}
          type={type}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={styles.input}
          value={value}
          name={name}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <div className={styles.iconButton} onClick={toggleVisibility}>
          <IonIcon icon={type === 'text' ? eyeOutline : eyeOffOutline} />
        </div>
      </div>
      <Body2 component="div" className={styles.errorContainer}>
        <b>{error}</b>
      </Body2>
    </div>
  )
}

export const PasswordInput = React.memo(PasswordInputComp)
