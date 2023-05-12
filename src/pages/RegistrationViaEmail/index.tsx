import React, { useContext } from 'react'
import {
  IonContent,
  IonPage,
  IonButton,
  IonIcon,
  NavContext,
} from '@ionic/react'
import { arrowBackOutline } from 'ionicons/icons'

import { BaseInput, PasswordInput } from '@components/input'
import { Button } from '@components/button'
import { Body1 } from '@components/text'
import { Stack } from '@components/stack'
import { useInfoDialog } from '@components/dialog'
import { ReactComponent as HeavenGate } from './assets/HeavenGate.svg'

import styles from './Registration.module.scss'

const RegistrationViaEmail = () => {
  const { goBack } = useContext(NavContext)
  const { present, Modal } = useInfoDialog({
    image: HeavenGate,
    message: 'Đăng ký thành công!',
    okButtonText: 'Tiếp tục đăng nhập',
  })

  return (
    <IonPage>
      <IonContent fullscreen className={styles.page}>
        <div className={styles.justifiedFlex}>
          <div>
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
            <span className={styles.pageTitle}>Đăng ký với email</span>
            <Body1 className={styles.pageSubtitle} component="div">
              <b>johnpaul@gmail.com</b>
            </Body1>
            <Stack className={styles.form} space={24}>
              <BaseInput
                value=""
                name="fullname"
                label="Họ và tên"
                placeholder="Họ và tên của bạn"
              />
              <PasswordInput
                value=""
                name="password"
                label="Mật khẩu"
                placeholder="Mật khẩu của bạn"
              />
              <PasswordInput
                value=""
                name="confirmPassword"
                label="Nhập lại mật khẩu"
                placeholder="Nhập lại mật khẩu của bạn"
              />
            </Stack>
          </div>

          <Button
            className={styles.loginButton}
            color="primary"
            expand="full"
            onClick={() => present()}
          >
            <b>Đăng ký</b>
          </Button>
        </div>
        <Modal />
      </IonContent>
    </IonPage>
  )
}

export default RegistrationViaEmail
