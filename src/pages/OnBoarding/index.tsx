import { IonContent, IonPage } from '@ionic/react'
import { useHistory } from 'react-router'

import { Button } from '../../components/button'
import { routes } from '../../routes'

import logoImg from './assets/logo.png'
import titleImg from './assets/title.png'

import { BottomArt } from './components'

import './OnBoarding.scss'

const OnBoarding = () => {
  const history = useHistory()
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="onboard-page">
          <div className="content">
            <div className="logo-group">
              <img className="logo" src={logoImg} alt="Logo" />
              <img className="title" src={titleImg} alt="Logo" />
              <br />
              <br />
              <p className="subtitle">
                Hành trình nên Thánh 4.0 <br /> dành cho người trẻ Việt
              </p>
            </div>
            <Button
              color="light"
              expand="block"
              onClick={() => history.push(routes.Home)}
            >
              <b>Tiếp tục</b>
            </Button>
          </div>
          <BottomArt className="bottom" />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default OnBoarding
