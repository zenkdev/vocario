/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';

import firebase from 'firebase/app';
import { home, person, stats } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { FirebaseContext, PrivateRoute } from './components';
import { Home, Learn, Login, Profile, ResetPassword, Stats } from './pages';
import { firebaseInstance } from './services';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<firebase.UserInfo | null>(null);

  useEffect(() => {
    return firebaseInstance.auth.onAuthStateChanged(user => setCurrentUser(user));
  }, []);

  return (
    <IonApp>
      <FirebaseContext.Provider value={{ currentUser }}>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/home" component={Home} exact={true} />
              <PrivateRoute path="/learn" component={Learn} />
              <Route path="/login" component={Login} exact={true} />
              <PrivateRoute path="/profile" component={Profile} exact={true} />
              <Route path="/reset-password" component={ResetPassword} exact={true} />
              <PrivateRoute path="/stats" component={Stats} exact={true} />
              <Route exact path="/" render={() => <Redirect to="/home" />} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={home} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="stats" href="/stats">
                <IonIcon icon={stats} />
                <IonLabel>Statistics</IonLabel>
              </IonTabButton>
              <IonTabButton tab="profile" href="/profile">
                <IonIcon icon={person} />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </FirebaseContext.Provider>
    </IonApp>
  );
};

export default App;
