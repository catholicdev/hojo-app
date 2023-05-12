import React, { useContext } from 'react'
import {
  IonContent,
  IonPage,
  IonButton,
  IonIcon,
  NavContext,
} from '@ionic/react'
import { BaseInput } from '@components/input'

import styles from './Registration.module.scss'
import { arrowBackOutline } from 'ionicons/icons'
import { Button } from '@components/button'
import { Body1 } from '@components/text'
import { routes } from '@routes'
import { Stack } from '@components/stack'

const Registration = () => {
  const { goBack, navigate } = useContext(NavContext)

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
            <span className={styles.pageTitle}>Đăng ký tài khoản</span>
            <Body1 className={styles.pageSubtitle} component="div">
              <b>
                Tạo tài khoản để tham gia hành trình nên Thánh cùng nhau nào!
              </b>
            </Body1>
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
            onClick={() => navigate(routes.RegistrationViaEmail)}
          >
            <b>Tiếp tục</b>
          </Button>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Registration
