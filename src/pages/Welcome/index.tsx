import { IonContent, IonPage, NavContext } from '@ionic/react'

import { Button } from '@components/button'
import { routes } from '@routes'

import logoImg from './assets/logo.png'

import { BottomArt } from './components'

import styles from './Welcome.module.scss'
import { useContext } from 'react'
import { Stack } from '@components'

const Welcome = () => {
  const { navigate } = useContext(NavContext)
  return (
    <IonPage>
      <IonContent fullscreen className={styles.page} scrollY={false}>
        <Stack className={styles.content} justifyContent="space-between">
          <Stack justifyContent="center">
            <Stack justifyContent="center" space={0}>
              <p className={styles.title}>HOLY JOURNEY</p>
              <p className={styles.subtitle}>
                Hành trình nên Thánh dành cho <br /> thanh thiếu niên và thiếu
                nhi
              </p>
            </Stack>
            <img className={styles.logo} src={logoImg} alt="Logo" />
          </Stack>
          <Stack justifyContent="center">
            <Button color="primary" onClick={() => navigate(routes.Login)}>
              Đăng nhập
            </Button>
            <div className={styles.secondaryActionContainer}>
              Chưa có tài khoản?{' '}
              <span onClick={() => navigate(routes.Registration)}>Đăng ký</span>
            </div>
          </Stack>
        </Stack>
        <BottomArt className={styles.bottom} />
      </IonContent>
    </IonPage>
  )
}

export default Welcome
