import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { bookSharp, home, logoFirebase, person, podium } from 'ionicons/icons'
import React from 'react'

import styles from './Home.module.scss'
import { routes } from '@routes'
import { Redirect, Route } from 'react-router-dom'
import TabRound from '@pages/TabRound'
import TabBible from '@pages/TabBible'
import TabCheckIn from '@pages/TabCheckIn'
import TabRanking from '@pages/TabRanking'
import TabUser from '@pages/TabUser'

const Home = () => {
  return (
    <IonTabs className={styles.ionTabs}>
      <IonRouterOutlet id="tabs">
        {/*<Route path="/home" exact={true}>*/}
        {/*  <Redirect to={routes.TabRound} />*/}
        {/*</Route>*/}
        <Route
          path={routes.TabRound}
          exact={true}
          render={() => <TabRound />}
        />
        <Route
          path={routes.TabBible}
          exact={true}
          render={() => <TabBible />}
        />
        <Route
          path={routes.TabCheckIn}
          exact={true}
          render={() => <TabCheckIn />}
        />
        <Route
          path={routes.TabRanking}
          exact={true}
          render={() => <TabRanking />}
        />
        <Route path={routes.TabUser} exact={true} render={() => <TabUser />} />
        {/*<Route render={() => <Redirect to="/home" />} />*/}
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="round" href={routes.TabRound}>
          <IonIcon icon={home}></IonIcon>
          <IonLabel>Trang chủ</IonLabel>
        </IonTabButton>
        <IonTabButton tab="bible" href={routes.TabBible}>
          <IonIcon icon={bookSharp} />
          <IonLabel>Lời Chúa</IonLabel>
        </IonTabButton>
        <IonTabButton tab="checkin" href={routes.TabCheckIn}>
          <IonIcon icon={logoFirebase} />
          <IonLabel>Điểm danh</IonLabel>
        </IonTabButton>
        <IonTabButton tab="ranking" href={routes.TabRanking}>
          <IonIcon icon={podium} />
          <IonLabel>Xếp hạng</IonLabel>
        </IonTabButton>
        <IonTabButton tab="user" href={routes.TabUser}>
          <IonIcon icon={person} />
          <IonLabel>Tài khoản</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default Home
