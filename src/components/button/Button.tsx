import { ComponentProps } from 'react'
import { IonButton } from '@ionic/react'

type Props = ComponentProps<typeof IonButton>

export const Button = (props: Props) => {
  return <IonButton shape="round" {...props} />
}
