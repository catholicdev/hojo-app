import React, { useRef } from 'react'
import { IonModal } from '@ionic/react'

import styles from './Modal.module.scss'
import { Button } from '@components/button'

interface Props {
  image: React.FC<any>
  message: string
  okButtonText: string
  okButtonTextCallback?: Function
}

export const useInfoDialog = ({
  image: Image,
  message,
  okButtonText,
  okButtonTextCallback = () => {},
}: Props) => {
  const modal = useRef<HTMLIonModalElement>(null)

  const present = () => {
    modal.current?.present()
  }

  const dismiss = () => {
    modal.current?.dismiss()
  }

  const Modal = () => (
    <IonModal className={styles.ionModal} ref={modal}>
      <div className={styles.wrapper}>
        <div>
          <Image className={styles.image} />
        </div>
        <div className={styles.content}>
          <div className={styles.message}>{message}</div>
          <Button
            color="primary"
            expand="full"
            onClick={() => {
              okButtonTextCallback()
              dismiss()
            }}
          >
            {okButtonText}
          </Button>
        </div>
      </div>
    </IonModal>
  )

  return { present, dismiss, Modal }
}
