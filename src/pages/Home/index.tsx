import { IonContent, IonPage } from '@ionic/react'

import { Menu } from './components'

import './Home.scss'

const Home = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="home-page">
          <div className="content">
            Hello
            <Menu bgColor="#00C2E4" photo="" />
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Home
