import { BaseInput, PasswordInput } from '@components/input'
import {
  IonButton,
  IonContent,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { ellipse, settingsOutline, square, triangle } from 'ionicons/icons'
import React from 'react'

import appLinkPhoto from './assets/appLink.png'

import biblePhoto from './assets/bible.png'
import charityPhoto from './assets/charity.png'
import gamePhoto from './assets/game.png'

import { Menu } from './components'

import styles from './Home.module.scss'
import { Redirect, Route } from 'react-router-dom'
import Registration from '@pages/Registration'
import TabUser from '@pages/TabUser'
import TabRound from '@pages/TabRound'

export const tabRoutes = {
  Round: '/tabs/round',
  User: '/tabs/user',
}

const Home = () => {
  return (
    // <IonPage>
    //   <IonContent fullscreen>
    //     <div className={styles.page}>
    //       <div className={styles.content}>
    //         <IonButton
    //           shape="round"
    //           color="light"
    //           className={styles.settingButton}
    //         >
    //           <IonIcon slot="icon-only" icon={settingsOutline}></IonIcon>
    //         </IonButton>
    //
    //         <br />
    //         <Menu
    //           bgColor="#00C2E4"
    //           photo={gamePhoto}
    //           photoStyle={{ paddingRight: '40px' }}
    //         >
    //           Game <br />
    //           Hành Trình Kinh Thánh
    //         </Menu>
    //         <Menu
    //           bgColor="#0762C8"
    //           photo={biblePhoto}
    //           photoStyle={{ paddingRight: '20px' }}
    //         >
    //           Sống <br />
    //           Lời Chúa mỗi ngày
    //         </Menu>
    //         <Menu bgColor="#FFC107" photo={charityPhoto}>
    //           Thực hành
    //           <br />
    //           bác ái
    //         </Menu>
    //         <Menu bgColor="#FF7B02" photo={appLinkPhoto}>
    //           App
    //           <br />
    //           Công Giáo cho bạn
    //         </Menu>
    //       </div>
    //     </div>
    //   </IonContent>
    // </IonPage>
    <IonTabs>
      <IonRouterOutlet>
        <Redirect exact path="/tabs" to="/tabs/round" />
        <Route exact path="/tabs/round">
          <TabRound />
        </Route>
        <Route exact path="/tabs/user">
          <TabUser />
        </Route>
        <Route exact path="/tabs">
          <Redirect to="/tabs/round" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="round" href="/tabs/round">
          <IonIcon icon={triangle} />
          <IonLabel>Trang chủ</IonLabel>
        </IonTabButton>
        <IonTabButton tab="user" href="/tabs/">
          <IonIcon icon={ellipse} />
          <IonLabel>Lời Chúa</IonLabel>
        </IonTabButton>
        <IonTabButton tab="user" href="/tabs/user">
          <IonIcon icon={ellipse} />
          <IonLabel>Điểm danh</IonLabel>
        </IonTabButton>
        <IonTabButton tab="user" href="/tabs/user">
          <IonIcon icon={ellipse} />
          <IonLabel>Xếp hạng</IonLabel>
        </IonTabButton>
        <IonTabButton tab="user" href="/tabs/user">
          <IonIcon icon={ellipse} />
          <IonLabel>Tài khoản</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default Home
