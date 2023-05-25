import React, { useContext } from 'react'
import { FORM_ERROR } from 'final-form'
import { withTypes } from 'react-final-form'
import {
  IonContent,
  IonPage,
  IonButton,
  IonIcon,
  NavContext,
} from '@ionic/react'
import { arrowBackOutline } from 'ionicons/icons'

import { usePostLoginMutation } from '@api'
import {
  InputField,
  Button,
  Body1,
  PageTitle,
  Body2,
  Stack,
  Validator,
  useInfoDialog,
} from '@components'
import { useDispatch, setToken } from '@providers'
import { routes } from '@routes'

import { ReactComponent as Svg } from '@assets/svg/HeavenGateWithPigeon.svg'
import styles from './Login.module.scss'

interface FormValues {
  email: string
  password: string
}

const Login = () => {
  const { goBack, navigate } = useContext(NavContext)
  const { present, Modal } = useInfoDialog({
    image: Svg,
    message: 'Đăng nhập thành công!',
    okButtonText: 'Đóng',
  })
  const dispatch = useDispatch()
  const { Form } = withTypes<FormValues>()
  const [login] = usePostLoginMutation()
  const handleSubmitForm = async (values: FormValues) => {
    try {
      const { accessToken } = await login({
        email: values.email,
        password: values.password,
      }).unwrap()
      dispatch(setToken(accessToken))
      present()
    } catch (e) {
      return { [FORM_ERROR]: 'Email hoặc mật khẩu không chính xác.' }
    }
  }

  return (
    <IonPage>
      <IonContent fullscreen className={styles.page}>
        <Form onSubmit={handleSubmitForm}>
          {({ handleSubmit, submitting, submitError }) => (
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
                <Stack className={styles.titleGroup} space={16}>
                  <PageTitle>Chào mừng trở lại,</PageTitle>
                  <Body1 component="div">
                    <b>
                      Đăng nhập để tiếp tục hành trình nên Thánh cùng nhau nào!
                    </b>
                  </Body1>
                </Stack>
                <Stack className={styles.form} space={24}>
                  <InputField
                    name="email"
                    type="email"
                    validate={Validator.compose(
                      Validator.required,
                      Validator.email
                    )}
                    label="Email"
                    placeholder="Email của bạn"
                  />
                  <InputField
                    name="password"
                    type="password"
                    validate={Validator.required}
                    label="Mật khẩu"
                    placeholder="Mật khẩu của bạn"
                    helperText={
                      <Body2
                        component="b"
                        color="primary"
                        onClick={() => navigate(routes.ForgotPassword)}
                      >
                        Quên mật khẩu?
                      </Body2>
                    }
                  />
                </Stack>
              </div>

              <Stack space={16} alignItems="center">
                <Body2 color="error" component="b">
                  {submitError}
                </Body2>
                <Button
                  color="primary"
                  onClick={handleSubmit}
                  disabled={submitting}
                >
                  <b>Đăng nhập</b>
                </Button>
              </Stack>
            </div>
          )}
        </Form>
        <Modal />
      </IonContent>
    </IonPage>
  )
}

export default Login
