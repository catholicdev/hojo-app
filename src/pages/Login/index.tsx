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
import { Body1 } from '@components/text'
import { Stack } from '@components/stack'

const Login = () => {
  const { goBack } = useContext(NavContext)

  return (
    <IonPage>
      <IonContent fullscreen className={styles.page}>
        <div className={styles.justifiedFlex}>
          <div className={styles.naturalContent}>
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
            <Body1 component="div" className={styles.pageSubtitle}>
              <b>Đăng nhập để tiếp tục hành trình nên Thánh cùng nhau nào!</b>
            </Body1>
            <Stack className={styles.form} space={24} flexDirection="column">
              <BaseInput
                type="email"
                value=""
                name="username"
                label="Email"
                placeholder="Email của bạn"
              />
              <PasswordInput
                value=""
                placeholder="Mật khẩu của bạn"
                name="password"
                label="Mật khẩu"
                helperText="Quên mật khẩu?"
              />
            </Stack>
          </div>

          <Button
            className={styles.loginButton}
            color="primary"
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
