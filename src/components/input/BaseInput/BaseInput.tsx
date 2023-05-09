import { IonIcon } from '@ionic/react'
import classNames from 'classnames'
import { closeOutline } from 'ionicons/icons'
import React, { HTMLInputTypeAttribute, useRef, useState } from 'react'
import styles from '../BaseInput.module.scss'

interface CustomTextInputProps {
  className?: string
  value: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
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
  onChange,
  error,
  name = 'input',
  label,
}: CustomTextInputProps) => {
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
  }

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.labelContainer}>
        <span className={styles.label} onClick={handleLabelClick}>
          {label}
        </span>
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
        {value ? (
          <div className={styles.iconButton} onClick={handleClear}>
            <IonIcon icon={closeOutline} />
          </div>
        ) : null}
      </div>
      <div className={styles.errorContainer}>{error}</div>
    </div>
  )
}

export const BaseInput = React.memo(CustomTextInputComp)
