import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'
import { book, home, logoFirebase, logoGoogle, people } from 'ionicons/icons'
import React from 'react'

import styles from './Home.module.scss'
import { Redirect, Route } from 'react-router-dom'

import TabUser from '@pages/TabUser'
import TabRound from '@pages/TabRound'
import TabCheckIn from '@pages/TabCheckIn'
import TabRanking from '@pages/TabRanking'
import TabBible from '@pages/TabBible'

export const tabRoutes = {
  Round: '/round',
  User: '/user',
  Bible: '/bible',
  Ranking: '/raking',
  Checkin: '/checkin',
}

const Home = () => {
  return (
    <IonTabs className={styles.ionTabs}>
      <IonRouterOutlet>
        <Redirect exact path="/home" to={tabRoutes.Round} />
        <Route
          exact={true}
          path={tabRoutes.Round}
          render={() => <TabRound />}
        />
        <Route
          exact={true}
          path={tabRoutes.Bible}
          render={() => <TabBible />}
        />
        <Route
          exact={true}
          path={tabRoutes.Checkin}
          render={() => <TabCheckIn />}
        />
        <Route
          exact={true}
          path={tabRoutes.Ranking}
          render={() => <TabRanking />}
        />
        <Route exact={true} path={tabRoutes.User} render={() => <TabUser />} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="round" href={tabRoutes.Round}>
          <IonIcon icon={home}></IonIcon>
          <IonLabel>Trang chủ</IonLabel>
        </IonTabButton>
        <IonTabButton tab="bible" href={tabRoutes.Bible}>
          <IonIcon icon={book} />
          <IonLabel>Lời Chúa</IonLabel>
        </IonTabButton>
        <IonTabButton tab="checkin" href={tabRoutes.Checkin}>
          <IonIcon icon={logoFirebase} />
          <IonLabel>Điểm danh</IonLabel>
        </IonTabButton>
        <IonTabButton tab="ranking" href={tabRoutes.Ranking}>
          <IonIcon icon={logoGoogle} />
          <IonLabel>Xếp hạng</IonLabel>
        </IonTabButton>
        <IonTabButton tab="user" href={tabRoutes.User}>
          <IonIcon icon={people} />
          <IonLabel>Tài khoản</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default Home
