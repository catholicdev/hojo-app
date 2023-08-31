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
  InputField,
} from '@components'
import { routes } from '@routes'

import styles from './Registration.module.scss'
import { useDispatch, setRegistrationEmail } from '@providers'
import { BottomArt } from '@pages/Registration/components'
import { VerifyEmailResp } from '@models'

interface FormType {
  email: string
}

const Registration = () => {
  const { goBack, navigate } = useContext(NavContext)
  const dispatch = useDispatch()
  const [verifyEmail] = usePostVerifyEmailMutation()
  const handleSubmitForm = async ({ email }: FormType) => {
    try {
      const result = (
        await verifyEmail({
          email,
        }).unwrap()
      ).data as VerifyEmailResp

      if (!result.isUsed) {
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
                  <PageTitle>Đăng ký</PageTitle>
                  <Body1 component="div" color="gray">
                    Tạo tài khoản của bạn để bắt đầu
                    <br />
                    hành trình nên Thánh với HOJO
                  </Body1>
                </Stack>
                <Stack className={styles.form}>
                  <InputField
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
                <Stack space={16} alignItems="center">
                  <Body2 color="error" component="b">
                    {submitError}
                  </Body2>
                  <Button
                    color="secondary"
                    disabled={submitting}
                    onClick={handleSubmit}
                  >
                    Tiếp tục
                  </Button>
                </Stack>
              </div>
            </div>
          )}
        </Form>
      </IonContent>
      <BottomArt className={styles.bottom} />
    </IonPage>
  )
}

export default Registration
