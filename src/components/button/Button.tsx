import { IonButton } from '@ionic/react'
import { ComponentProps } from 'react'

type Props = ComponentProps<typeof IonButton>

export const Button = (props: Props) => {
  return <IonButton shape="round" {...props} />
}
