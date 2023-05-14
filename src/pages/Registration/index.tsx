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
import { useDispatch, useSelector } from 'react-redux'

import { isUsedSelector, verifyEmail } from 'store/verify-email'
import { AppDispatch } from 'store'

const Registration = () => {
  const dispatch = useDispatch<AppDispatch>()
  const isUsed = useSelector(isUsedSelector)

  const { goBack } = useContext(NavContext)

  const handleVerifyEmail = (email: string) => {
    dispatch(verifyEmail({ email }))
  }

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
          <span className={styles.pageTitle}>Đăng ký tài khoản</span>
          <Body1 className={styles.pageSubtitle} component="div">
            <b>Tạo tài khoản để tham gia hành trình nên Thánh cùng nhau nào!</b>
          </Body1>
          <BaseInput
            className={styles.username}
            value=""
            name="username"
            label="Email"
            placeholder="Email của bạn"
          />

          <Button
            className={styles.loginButton}
            color="primary"
            expand="full"
            onClick={() => handleVerifyEmail('dung@gmail.com')}
            disabled={isUsed}
          >
            <b>Tiếp tục</b>
          </Button>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Registration
