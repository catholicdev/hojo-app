import { IonContent, IonSpinner } from '@ionic/react'
import React from 'react'

interface Props {
  loading?: boolean
  children: JSX.Element
}
const LoadingComp = ({ loading, children }: Props) => {
  if (loading) {
    return (
      <IonContent>
        <div className="ion-text-center">
          <IonSpinner name="dots" />
          <p>Loading...</p>
        </div>
      </IonContent>
    )
  } else return children
}

export const Loading = React.memo(LoadingComp)
