import React, { useContext } from 'react'
import {
  IonContent,
  IonPage,
  IonButton,
  IonIcon,
  NavContext,
} from '@ionic/react'
import { BaseInput, PasswordInput } from '@components/input'

import styles from './Login.module.scss'
import { arrowBackOutline } from 'ionicons/icons'
import { Button } from '@components/button'

const Login = () => {
  const { goBack } = useContext(NavContext)

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={styles.page}>
          <div className={styles.backContainer}>
            <IonButton
              className={styles.backButton}
              fill="clear"
              expand="block"
              onClick={() => goBack()}
            >
              <IonIcon
                slot="icon-only"
                className={styles.iconBackButton}
                icon={arrowBackOutline}
              ></IonIcon>
            </IonButton>
          </div>
          <span className={styles.pageTitle}>Chào mừng trở lại,</span>
          <span className={styles.pageSubtitle}>
            Đăng nhập để tiếp tục hành trình nên Thánh cùng nhau nào!
          </span>
          <BaseInput
            className={styles.username}
            value=""
            name="username"
            label="Email"
            placeholder="Email của bạn"
          />
          <PasswordInput
            className={styles.password}
            value=""
            placeholder="Mật khẩu của bạn"
            name="password"
            label="Mật khẩu"
            helperText="Quên mật khẩu?"
          />

          <Button
            className={styles.loginButton}
            color="light"
            expand="full"
            onClick={() => console.log('aaa')}
          >
            <b>Đăng nhập</b>
          </Button>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Login
