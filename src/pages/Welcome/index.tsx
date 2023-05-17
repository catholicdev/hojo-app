import { IonContent, IonPage, NavContext } from '@ionic/react'

import { Button } from '@components/button'
import { routes } from '@routes'

import logoImg from './assets/logo.png'
import { ReactComponent as AppTitle } from './assets/AppTitle.svg'

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
            <img className={styles.logo} src={logoImg} alt="Logo" />
            <Stack justifyContent="center" space={0}>
              <AppTitle className={styles.title} />
              <p className={styles.subtitle}>
                Hành trình nên Thánh 4.0 <br /> dành cho người trẻ Việt
              </p>
            </Stack>
          </Stack>
          <Stack justifyContent="center">
            <Button color="primary" onClick={() => navigate(routes.Login)}>
              Đăng nhập
            </Button>
            <div className={styles.secondaryActionContainer}>
              Chưa có tài khoản?{' '}
              <span onClick={() => navigate(routes.Registration)}>
                Đăng ký ngay
              </span>
            </div>
          </Stack>
        </Stack>
        <BottomArt className={styles.bottom} />
      </IonContent>
    </IonPage>
  )
}

export default Welcome
