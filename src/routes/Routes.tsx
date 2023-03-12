import { IonRouterOutlet } from '@ionic/react'
import { Route, Redirect } from 'react-router-dom'
import OnBoarding from '../pages/OnBoarding'

export const Routes = () => (
  <IonRouterOutlet id="main">
    <Route path="/" exact={true}>
      <Redirect to="/onboard" />
    </Route>
    <Route path="/onboard" exact={true}>
      <OnBoarding />
    </Route>
    <Route render={() => <Redirect to="/" />} />
  </IonRouterOutlet>
)
