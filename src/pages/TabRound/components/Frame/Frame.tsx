import React, { useEffect } from 'react'
import styles from './Frame.module.scss'
import { IonButton, IonIcon } from '@ionic/react'
import frameIcon from '@pages/TabRound/assets/frame-icon.svg'
import { useLazyGetUserScoreQuery } from '@api'

export const Frame = () => {
  const [getUserScore, { data }] = useLazyGetUserScoreQuery()
  const res = data?.data

  useEffect(() => {
    getUserScore()
  }, [getUserScore])

  return (
    <IonButton
      shape="round"
      color="light"
      className={styles.customButtonNative}
    >
      <IonIcon slot="icon-only" icon={frameIcon} />
      <span className={styles.headerTotalFrame}>{res?.total ?? 0}</span>
    </IonButton>
  )
}
