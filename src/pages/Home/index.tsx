import { IonContent, IonPage } from '@ionic/react'

import { Menu } from './components'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={styles.page}>
          <div className={styles.content}>
            Hello
            <Menu bgColor="#00C2E4" photo="" />
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Home
