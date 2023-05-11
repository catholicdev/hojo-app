import { IonRouterOutlet } from '@ionic/react'
import { Redirect, Route } from 'react-router-dom'
import Home from '../pages/Home'
import OnBoarding from '../pages/OnBoarding'
import Login from '../pages/Login'
import Registration from '../pages/Registration'

export const routes = {
  OnBoarding: '/onboard',
  Home: '/home',
  Login: '/login',
  Registration: '/registration',
}

export const Routes = () => (
  <IonRouterOutlet id="main">
    <Route path="/" exact={true}>
      <Redirect to="/onboard" />
    </Route>
    <Route path={routes.OnBoarding} exact={true}>
      <OnBoarding />
    </Route>
    <Route path={routes.Home} exact={true}>
      <Home />
    </Route>
    <Route path={routes.Login} exact={true}>
      <Login />
    </Route>
    <Route path={routes.Registration} exact={true}>
      <Registration />
    </Route>
    <Route render={() => <Redirect to="/" />} />
  </IonRouterOutlet>
)
