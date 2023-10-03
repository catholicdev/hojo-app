import React from 'react'
import styles from './Notification.module.scss'
import { IonButton, IonIcon } from '@ionic/react'
import notificationIcon from '@pages/TabRound/assets/notification-icon.svg'

export const Notification = () => {
  return (
    <IonButton
      shape="round"
      color="light"
      className={styles.customButtonNative}
    >
      <IonIcon slot="icon-only" icon={notificationIcon}></IonIcon>
    </IonButton>
  )
}
