import { IonRouterOutlet } from '@ionic/react'
import { Redirect, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Welcome from '../pages/Welcome'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import RegistrationViaEmail from '../pages/RegistrationViaEmail'
import ForgotPassword from '../pages/ForgotPassword'
import TabRound from '@pages/TabRound'
import TabBible from '@pages/TabBible'
import TabCheckIn from '@pages/TabCheckIn'
import TabRanking from '@pages/TabRanking'
import TabUser from '@pages/TabUser'
import React from 'react'

export const routes = {
  OnBoarding: '/onboard',
  Home: '/home',
  Login: '/login',
  ForgotPassword: '/forgot-password',
  Registration: '/registration',
  RegistrationViaEmail: '/registration-via-email',
  TabRound: '/round',
  TabBible: '/bible',
  TabCheckIn: '/check-in',
  TabRanking: '/ranking',
  TabUser: '/user',
}

export const Routes = () => (
  <IonRouterOutlet id="main">
    <Route path="/" exact={true}>
      <Redirect to={routes.OnBoarding} />
    </Route>

    <Route path={routes.OnBoarding} exact={true} component={Welcome} />
    <Route path={routes.Home} exact={true} component={Home} />
    <Route path={routes.Login} exact={true} component={Login} />

    <Route
      path={routes.ForgotPassword}
      exact={true}
      component={ForgotPassword}
    />
    <Route path={routes.Registration} exact={true} component={Registration} />
    <Route
      path={routes.RegistrationViaEmail}
      exact={true}
      component={RegistrationViaEmail}
    />

    <Route render={() => <Redirect to="/" />} />
  </IonRouterOutlet>
)
