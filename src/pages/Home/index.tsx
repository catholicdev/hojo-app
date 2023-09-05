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
import { useRouteMatch, Route } from 'react-router'
import { Redirect } from 'react-router-dom'
import TabRound from '@pages/TabRound'
import TabBible from '@pages/TabBible'
import TabCheckIn from '@pages/TabCheckIn'
import TabRanking from '@pages/TabRanking'
import TabUser from '@pages/TabUser'

const Home = () => {
  const { path, url } = useRouteMatch()

  return (
    <IonTabs className={styles.ionTabs}>
      <IonRouterOutlet id="tabs">
        {/*<Route path="/home" exact={true}>*/}
        {/*  <Redirect to={routes.TabRound} />*/}
        {/*</Route>*/}
        <Route
          path={path + routes.TabRound}
          exact={true}
          render={() => <TabRound />}
        />
        <Route
          path={path + routes.TabBible}
          exact={true}
          render={() => <TabBible />}
        />
        <Route
          path={path + routes.TabCheckIn}
          exact={true}
          render={() => <TabCheckIn />}
        />
        <Route
          path={path + routes.TabRanking}
          exact={true}
          render={() => <TabRanking />}
        />
        <Route
          path={path + routes.TabUser}
          exact={true}
          render={() => <TabUser />}
        />
        <Route render={() => <Redirect to={path + routes.TabRound} />} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="round" href={url + routes.TabRound}>
          <IonIcon icon={home}></IonIcon>
          <IonLabel>Trang chủ</IonLabel>
        </IonTabButton>
        <IonTabButton tab="bible" href={url + routes.TabBible}>
          <IonIcon icon={bookSharp} />
          <IonLabel>Lời Chúa</IonLabel>
        </IonTabButton>
        <IonTabButton tab="checkin" href={url + routes.TabCheckIn}>
          <IonIcon icon={logoFirebase} />
          <IonLabel>Điểm danh</IonLabel>
        </IonTabButton>
        <IonTabButton tab="ranking" href={url + routes.TabRanking}>
          <IonIcon icon={podium} />
          <IonLabel>Xếp hạng</IonLabel>
        </IonTabButton>
        <IonTabButton tab="user" href={url + routes.TabUser}>
          <IonIcon icon={person} />
          <IonLabel>Tài khoản</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default Home
