import { IonContent, IonSpinner } from '@ionic/react'
import React from 'react'

const LoadingComp = () => {
  return (
    <IonContent>
      <div className="ion-text-center">
        <IonSpinner name="dots" />
        <p>Loading...</p>
      </div>
    </IonContent>
  )
}

export const Loading = React.memo(LoadingComp)
