import { IonContent, IonPage } from '@ionic/react'
import { useHistory } from 'react-router'

import { Button } from '@components/button'
import { routes } from '@routes'

import logoImg from './assets/logo.png'
import titleImg from './assets/title.png'

import { BottomArt } from './components'

import styles from './OnBoarding.module.scss'

const OnBoarding = () => {
  const history = useHistory()
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={styles.page}>
          <div className={styles.content}>
            <div className={styles.logoGroup}>
              <img className={styles.logo} src={logoImg} alt="Logo" />
              <img className={styles.title} src={titleImg} alt="Logo" />
              <br />
              <br />
              <p className={styles.subtitle}>
                Hành trình nên Thánh 4.0 <br /> dành cho người trẻ Việt
              </p>
            </div>
            <Button
              color="light"
              expand="full"
              onClick={() => history.push(routes.Login)}
            >
              <b>Tiếp tục</b>
            </Button>
          </div>
          <BottomArt className={styles.bottom} />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default OnBoarding
