import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import {
  IonContent,
  IonPage,
  IonButton,
  IonIcon,
  NavContext,
} from '@ionic/react'
import { arrowBackOutline } from 'ionicons/icons'

import {
  BaseInput,
  PasswordInput,
  Button,
  Body1,
  PageTitle,
  Stack,
  useInfoDialog,
} from '@components'
import { selectRegistrationEmail } from '@providers'

import { ReactComponent as HeavenGate } from './assets/HeavenGate.svg'
import styles from './Registration.module.scss'

const RegistrationViaEmail = () => {
  const { goBack } = useContext(NavContext)
  const { present, Modal } = useInfoDialog({
    image: HeavenGate,
    message: 'Đăng ký thành công!',
    okButtonText: 'Tiếp tục đăng nhập',
  })
  const email = useSelector(selectRegistrationEmail)

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
            <Stack className={styles.titleGroup} space={16}>
              <PageTitle>Đăng ký với email</PageTitle>
              <Body1 component="div">
                <b>{email}</b>
              </Body1>
            </Stack>
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
