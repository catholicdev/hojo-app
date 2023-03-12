import { IonContent, IonPage } from '@ionic/react'

import logoImg from './assets/logo.png'
import titleImg from './assets/title.png'

import './OnBoarding.css'
import { BottomArt } from './components'

const OnBoarding = () => {
  return (
    <IonPage className="page">
      <IonContent fullscreen>
        <div className="page">
          <div className="logo-group">
            <img className="logo" src={logoImg} alt="Logo" />
            <img className="title" src={titleImg} alt="Logo" />
            <br />
            <br />
            <p className="subtitle">
              Hành trình nên Thánh 4.0 <br /> dành cho người trẻ Việt
            </p>
          </div>
          <BottomArt className="bottom" />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default OnBoarding
