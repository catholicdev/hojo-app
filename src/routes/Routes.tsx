import { IonRouterOutlet } from '@ionic/react'
import { Redirect, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Welcome from '../pages/Welcome'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import RegistrationViaEmail from '../pages/RegistrationViaEmail'
import ForgotPassword from '../pages/ForgotPassword'

export const routes = {
  OnBoarding: '/onboard',
  Home: '/home',
  Login: '/login',
  ForgotPassword: '/forgot-password',
  Registration: '/registration',
  RegistrationViaEmail: '/registration-via-email',
}

export const Routes = () => (
  <IonRouterOutlet id="main">
    <Route path="/" exact={true}>
      <Redirect to={routes.OnBoarding} />
    </Route>
    <Route path={routes.OnBoarding} exact={true}>
      <Welcome />
    </Route>
    <Route path={routes.Home} exact={true}>
      <Home />
    </Route>
    <Route path={routes.Login} exact={true}>
      <Login />
    </Route>
    <Route path={routes.ForgotPassword} exact={true}>
      <ForgotPassword />
    </Route>
    <Route path={routes.Registration} exact={true}>
      <Registration />
    </Route>
    <Route path={routes.RegistrationViaEmail} exact={true}>
      <RegistrationViaEmail />
    </Route>
    <Route render={() => <Redirect to="/" />} />
  </IonRouterOutlet>
)
