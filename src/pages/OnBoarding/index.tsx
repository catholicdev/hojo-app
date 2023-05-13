import { IonContent, IonPage, NavContext } from '@ionic/react'

import { Button } from '@components/button'
import { routes } from '@routes'

import logoImg from './assets/logo.png'
import { ReactComponent as AppTitle } from './assets/AppTitle.svg'

import { BottomArt } from './components'

import styles from './OnBoarding.module.scss'
import { useContext } from 'react'

const OnBoarding = () => {
  const { navigate } = useContext(NavContext)
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={styles.page}>
          <div className={styles.content}>
            <div className={styles.logoGroup}>
              <img className={styles.logo} src={logoImg} alt="Logo" />
              <AppTitle className={styles.title} />
              <br />
              <br />
              <p className={styles.subtitle}>
                Hành trình nên Thánh 4.0 <br /> dành cho người trẻ Việt
              </p>
            </div>
            <div className={styles.actions}>
              <Button
                color="primary"
                expand="full"
                onClick={() => navigate(routes.Login)}
              >
                <b>Đăng nhập</b>
              </Button>
              <div className={styles.secondaryActionContainer}>
                Chưa có tài khoản?{' '}
                <span onClick={() => navigate(routes.Registration)}>
                  Đăng ký ngay
                </span>
              </div>
            </div>
          </div>
          <BottomArt className={styles.bottom} />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default OnBoarding