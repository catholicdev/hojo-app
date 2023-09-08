import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react'

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

import homeOutline from './assets/homeOutline.svg'
import homeFilled from './assets/homeFilled.svg'
import bibleOutline from './assets/bibleOutline.svg'
import bibleFilled from './assets/bibleFilled.svg'
import frameOutline from './assets/frameOutline.svg'
import frameFilled from './assets/frameFilled.svg'
import chartOutline from './assets/chartOutline.svg'
import chartFilled from './assets/chartFilled.svg'
import userOutline from './assets/userOutline.svg'
import userFilled from './assets/userFilled.svg'

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
          <IonIcon icon={homeOutline} className={styles.unselected}></IonIcon>
          <IonIcon icon={homeFilled} className={styles.selected}></IonIcon>
          <IonLabel>Trang chủ</IonLabel>
        </IonTabButton>
        <IonTabButton tab="bible" href={url + routes.TabBible}>
          <IonIcon icon={bibleOutline} className={styles.unselected} />
          <IonIcon icon={bibleFilled} className={styles.selected} />
          <IonLabel>Lời Chúa</IonLabel>
        </IonTabButton>
        <IonTabButton tab="checkin" href={url + routes.TabCheckIn}>
          <IonIcon icon={frameOutline} className={styles.unselected} />
          <IonIcon icon={frameFilled} className={styles.selected} />
          <IonLabel>Điểm danh</IonLabel>
        </IonTabButton>
        <IonTabButton tab="ranking" href={url + routes.TabRanking}>
          <IonIcon icon={chartOutline} className={styles.unselected} />
          <IonIcon icon={chartFilled} className={styles.selected} />
          <IonLabel>Xếp hạng</IonLabel>
        </IonTabButton>
        <IonTabButton tab="user" href={url + routes.TabUser}>
          <IonIcon icon={userOutline} className={styles.unselected} />
          <IonIcon icon={userFilled} className={styles.selected} />
          <IonLabel>Tài khoản</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

export default Home
