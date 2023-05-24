import React, { useRef, useState } from 'react'
import { IonIcon } from '@ionic/react'
import { eyeOutline, eyeOffOutline } from 'ionicons/icons'
import { InputProps, BaseInput, EndAdornment } from '../BaseInput/BaseInput'

type PasswordInputProps = Omit<InputProps, 'type'>

const PasswordInputComp = (props: PasswordInputProps) => {
  const [type, setType] = useState<'password' | 'text'>('password')
  const inputRef = useRef<HTMLInputElement>(null)

  const toggleVisibility = () => {
    setType((prev) => (prev === 'text' ? 'password' : 'text'))
    inputRef.current?.focus()
  }

  return (
    <BaseInput
      {...props}
      ref={inputRef}
      type={type}
      endAdornment={
        <EndAdornment onClick={toggleVisibility}>
          <IonIcon icon={type === 'text' ? eyeOutline : eyeOffOutline} />
        </EndAdornment>
      }
    />
  )
}

export const PasswordInput = React.memo(PasswordInputComp)
