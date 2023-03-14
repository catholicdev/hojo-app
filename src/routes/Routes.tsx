import { IonRouterOutlet } from '@ionic/react'
import { Redirect, Route } from 'react-router-dom'
import Home from '../pages/Home'
import OnBoarding from '../pages/OnBoarding'

export const routes = {
  OnBoarding: '/onboard',
  Home: '/home',
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
    <Route render={() => <Redirect to="/" />} />
  </IonRouterOutlet>
)
