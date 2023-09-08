import styles from '@pages/TabBible/TabBible.module.scss'
import { Stack } from '@components'
import Background from '@pages/TabBible/assets/Background.svg'
import { IonContent } from '@ionic/react'

interface StartPageInterface {
  onClick: () => void
}

const StartPage = ({ onClick }: StartPageInterface) => {
  return (
    <IonContent fullscreen className={styles.page} scrollY={false}>
      <Stack>
        <img
          src={Background}
          alt="background"
          className={styles.backgroundImage}
          onClick={onClick}
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
  )
}

export default StartPage
