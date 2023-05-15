import React, { useContext } from 'react'
import {
  IonContent,
  IonPage,
  IonButton,
  IonIcon,
  NavContext,
} from '@ionic/react'
import { FORM_ERROR } from 'final-form'
import { withTypes, Field } from 'react-final-form'
import { arrowBackOutline } from 'ionicons/icons'

import { usePostVerifyEmailMutation } from '@api'
import {
  BaseInput,
  Button,
  Body1,
  PageTitle,
  Stack,
  required,
  Body2,
} from '@components'
import { routes } from '@routes'

import styles from './Registration.module.scss'
import { useDispatch, setRegistrationEmail } from '@providers'

interface FormType {
  email: string
}

const Registration = () => {
  const { goBack, navigate } = useContext(NavContext)
  const dispatch = useDispatch()
  const [verifyEmail] = usePostVerifyEmailMutation()
  const handleSubmitForm = async ({ email }: FormType) => {
    try {
      const data = await verifyEmail({ email }).unwrap()
      if (!data.isUsed) {
        dispatch(setRegistrationEmail(email))
        navigate(routes.RegistrationViaEmail)
        return
      } else {
        return { [FORM_ERROR]: 'Email này đã được đăng kí.' }
      }
    } catch (e) {
      return { [FORM_ERROR]: 'Đã có lỗi xảy ra. Vui lòng thử lại sau.' }
    }
  }

  const { Form } = withTypes<FormType>()

  return (
    <IonPage>
      <IonContent fullscreen className={styles.page}>
        <Form onSubmit={handleSubmitForm}>
          {({ handleSubmit, submitting, submitError }) => (
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
                  <PageTitle>Đăng ký tài khoản</PageTitle>
                  <Body1 component="div">
                    <b>
                      Tạo tài khoản để tham gia hành trình nên Thánh cùng nhau
                      nào!
                    </b>
                  </Body1>
                </Stack>
                <Stack className={styles.form}>
                  <Field name="email" validate={required}>
                    {({ input, meta }) => (
                      <BaseInput
                        type="email"
                        name={input.name}
                        value={input.value}
                        onChange={input.onChange}
                        label="Email *"
                        placeholder="Email của bạn"
                        error={meta.touched ? meta.error : undefined}
                      />
                    )}
                  </Field>
                </Stack>
              </div>

              <Stack space={16} alignItems="center">
                <Body2 color="error">
                  <b>{submitError}</b>
                </Body2>
                <Button
                  className={styles.loginButton}
                  color="primary"
                  expand="full"
                  disabled={submitting}
                  onClick={handleSubmit}
                >
                  <b>Tiếp tục</b>
                </Button>
              </Stack>
            </div>
          )}
        </Form>
      </IonContent>
    </IonPage>
  )
}

export default Registration
