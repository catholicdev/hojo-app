import React from 'react'
import { IonContent, IonPage } from '@ionic/react'
import styles from './TabRound.module.scss'

import { Frame, Notification, Round } from './components'
import { Stack } from '@components'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '@providers'

const TabRound = () => {
  const userInfo: any = useSelector(selectCurrentUser)

  return (
    <IonPage>
      <IonContent fullscreen className={styles.page}>
        <div className={styles.content}>
          <Stack
            flexDirection={'row'}
            justifyContent={'space-between'}
            className={styles.roundHeader}
            space={4}
          >
            <Stack
              justifyContent={'center'}
              space={0}
              alignItems={'flex-start'}
              className={styles.headerInfo}
            >
              <p>Chào {userInfo?.lastName} 👋</p>
              <p>Thiên Chúa ở cùng bạn!</p>
            </Stack>
            <Stack
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'flex-end'}
              space={0}
            >
              <Frame />
              <Notification />
            </Stack>
          </Stack>

          <Round />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default TabRound
