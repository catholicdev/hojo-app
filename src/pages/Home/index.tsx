import { BaseInput } from '@components/input'
import { IonButton, IonContent, IonIcon, IonPage } from '@ionic/react'
import { settingsOutline } from 'ionicons/icons'
import React from 'react'

import appLinkPhoto from './assets/appLink.png'

import biblePhoto from './assets/bible.png'
import charityPhoto from './assets/charity.png'
import gamePhoto from './assets/game.png'

import { Menu } from './components'

import styles from './Home.module.scss'

const Home = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className={styles.page}>
          <div className={styles.content}>
            <IonButton
              shape="round"
              color="light"
              className={styles.settingButton}
            >
              <IonIcon slot="icon-only" icon={settingsOutline}></IonIcon>
            </IonButton>
            <br />
            <BaseInput
              value="a"
              name="a"
              label="Email"
              placeholder="Email của bạn"
            />
            <br />
            <Menu
              bgColor="#00C2E4"
              photo={gamePhoto}
              photoStyle={{ paddingRight: '40px' }}
            >
              Game <br />
              Hành Trình Kinh Thánh
            </Menu>
            <Menu
              bgColor="#0762C8"
              photo={biblePhoto}
              photoStyle={{ paddingRight: '20px' }}
            >
              Sống <br />
              Lời Chúa mỗi ngày
            </Menu>
            <Menu bgColor="#FFC107" photo={charityPhoto}>
              Thực hành
              <br />
              bác ái
            </Menu>
            <Menu bgColor="#FF7B02" photo={appLinkPhoto}>
              App
              <br />
              Công Giáo cho bạn
            </Menu>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Home
