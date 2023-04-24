import { IonIcon } from '@ionic/react'
import classNames from 'classnames'
import { close } from 'ionicons/icons'
import React, {
  HTMLInputTypeAttribute,
  useEffect,
  useRef,
  useState,
} from 'react'
import styles from './BaseInput.module.scss'

interface CustomTextInputProps {
  className?: string
  value: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
  onChange?: (event: string | null) => void
  name: string
  label: string
  onCancel?: () => void
}

const CustomTextInputComp = ({
  className = '',
  value: initialValue,
  type = 'text',
  placeholder,
  onChange,
  name,
  label,
  onCancel = () => {},
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

  useEffect(() => {
    console.log(
      classNames(styles.inputContainer, { [styles.focused]: focused })
    )
  }, [focused])

  return (
    <div className={classNames(styles.container, className)}>
      <div className={styles.label} onClick={handleLabelClick}>
        {label}
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
          onChange={handleChange}
          placeholder={placeholder}
        />
        {value ? (
          <div className={styles.iconButton} onClick={handleClear}>
            <IonIcon icon={close} />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export const BaseInput = React.memo(CustomTextInputComp)
