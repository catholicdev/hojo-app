import React, { useContext } from 'react'
import {
  IonContent,
  IonPage,
  IonButton,
  IonIcon,
  NavContext,
} from '@ionic/react'
import { BaseInput } from '@components/input'

import styles from './Login.module.scss'
import { arrowBackOutline } from 'ionicons/icons'
import { Button } from '@components/button'
import { Body1, PageTitle } from '@components/text'
import { Stack } from '@components/stack'

const ForgotPassword = () => {
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
            <Stack className={styles.titleGroup}>
              <PageTitle>Quên mật khẩu?</PageTitle>
              <Body1 component="div">
                <b>Nhập email của bạn để nhận lại mật khẩu nhé!</b>
              </Body1>
            </Stack>
            <Stack className={styles.form}>
              <BaseInput
                type="email"
                value=""
                name="username"
                label="Email"
                placeholder="Email của bạn"
              />
            </Stack>
          </div>

          <Button
            className={styles.loginButton}
            color="primary"
            expand="full"
            onClick={() => console.log('aaa')}
          >
            <b>Lấy lại mật khẩu</b>
          </Button>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default ForgotPassword
