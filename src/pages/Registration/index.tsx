import React, { useContext } from 'react'
import {
  IonContent,
  IonPage,
  IonButton,
  IonIcon,
  NavContext,
} from '@ionic/react'
import { FORM_ERROR } from 'final-form'
import { withTypes } from 'react-final-form'
import { arrowBackOutline } from 'ionicons/icons'

import { usePostVerifyEmailMutation } from '@api'
import {
  Button,
  Body1,
  PageTitle,
  Stack,
  Body2,
  Validator,
  BaseInputField,
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
        return { email: 'Email này đã được đăng kí.' }
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
          {({ handleSubmit, submitting, submitError, form }) => (
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
                  <BaseInputField
                    name="email"
                    validate={Validator.compose(
                      Validator.required,
                      Validator.email
                    )}
                    type="email"
                    label="Email"
                    placeholder="Email của bạn"
                  />
                </Stack>
              </div>

              <Stack space={16} alignItems="center">
                <Body2 color="error">
                  <b>{submitError}</b>
                </Body2>
                <Button
                  color="primary"
                  disabled={submitting}
                  onClick={handleSubmit}
                >
                  Tiếp tục
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
