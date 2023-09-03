import { IonContent, IonPage } from '@ionic/react'
import styles from './TabBible.module.scss'

import Background from './assets/Background.svg'
import { Stack } from '@components'

const TabBible = () => {
  return (
    <IonPage>
      <IonContent fullscreen className={styles.page} scrollY={false}>
        <Stack>
          <img
            src={Background}
            alt="background"
            className={styles.backgroundImage}
          />
          <Stack
            justifyContent={'center'}
            space={0}
            className={styles.stackContain}
          >
            <p className={styles.title}>Lời Chúa hôm nay</p>
            <p className={styles.subtitle}>
              Hãy nhấp vào màn hình để xem Lời Chúa
              <br />
              dành cho bạn hôm nay nhé!
            </p>
          </Stack>
        </Stack>
      </IonContent>
    </IonPage>
  )
}

export default TabBible
