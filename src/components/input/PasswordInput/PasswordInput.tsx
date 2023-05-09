import { IonIcon } from '@ionic/react'
import classNames from 'classnames'
import { eyeOutline, eyeOffOutline } from 'ionicons/icons'
import React, { useRef, useState } from 'react'
import styles from '../BaseInput.module.scss'

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
        <span className={styles.label} onClick={handleLabelClick}>
          {label}
        </span>
        {helperText ? (
          <span className={styles.helper}>{helperText}</span>
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
          <IonIcon icon={type === 'password' ? eyeOutline : eyeOffOutline} />
        </div>
      </div>
      <div className={styles.errorContainer}>{error}</div>
    </div>
  )
}

export const PasswordInput = React.memo(PasswordInputComp)
