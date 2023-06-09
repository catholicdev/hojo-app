import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { FieldValidator } from 'final-form'
import { withTypes } from 'react-final-form'
import {
  IonContent,
  IonPage,
  IonButton,
  IonIcon,
  NavContext,
} from '@ionic/react'
import { arrowBackOutline } from 'ionicons/icons'

import { usePostRegisterMutation } from '@api'
import {
  Button,
  Body1,
  PageTitle,
  Stack,
  useInfoDialog,
  InputField,
  Validator,
} from '@components'
import { selectRegistrationEmail, useDispatch, setToken } from '@providers'
import { splitFullName } from '@utils'

import { ReactComponent as HeavenGate } from '@assets/svg/HeavenGate.svg'
import styles from './Registration.module.scss'

interface FormValues {
  email: string
  password: string
  confirmPassword: string
  fullName: string
}

const matchPassword: FieldValidator<any> = (value, allValues) =>
  value === (allValues as FormValues)['password']
    ? undefined
    : 'Nhập lại mật khẩu không khớp.'

const RegistrationViaEmail = () => {
  const { goBack } = useContext(NavContext)
  const { present, Modal } = useInfoDialog({
    image: HeavenGate,
    message: 'Đăng ký thành công!',
    okButtonText: 'Tiếp tục đăng nhập',
  })
  const dispatch = useDispatch()
  const email = useSelector(selectRegistrationEmail)
  const [register] = usePostRegisterMutation()
  const { Form } = withTypes<FormValues>()

  const handleSubmitForm = async (values: FormValues) => {
    const { firstName, lastName } = splitFullName(values.fullName)

    try {
      const { accessToken } = await register({
        email: values.email,
        lastName,
        firstName,
        password: values.password,
      }).unwrap()
      dispatch(setToken(accessToken))
      present()
    } catch (e) {}
  }

  return (
    <IonPage>
      <IonContent fullscreen className={styles.page}>
        <Form onSubmit={handleSubmitForm} initialValues={{ email }}>
          {({ handleSubmit, submitting }) => (
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
                  <InputField
                    name="fullName"
                    validate={Validator.required}
                    label="Họ và tên"
                    placeholder="Họ và tên của bạn"
                  />
                  <InputField
                    name="password"
                    type="password"
                    validate={Validator.required}
                    label="Mật khẩu"
                    placeholder="Mật khẩu của bạn"
                  />
                  <InputField
                    name="confirmPassword"
                    type="password"
                    validate={matchPassword}
                    label="Nhập lại mật khẩu"
                    placeholder="Nhập lại mật khẩu của bạn"
                  />
                </Stack>
              </div>

              <Button
                color="primary"
                onClick={handleSubmit}
                disabled={submitting}
              >
                Đăng ký
              </Button>
            </div>
          )}
        </Form>
        <Modal />
      </IonContent>
    </IonPage>
  )
}

export default RegistrationViaEmail
