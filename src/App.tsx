import React, { Component } from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonPage } from '@ionic/react';
import logo from './logo.svg';
import './App.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

class App extends Component {
  render() {
    return (
      <IonApp>
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonTitle>
                IonicReactApp
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <IonButton href="https://reactjs.org">Learn React</IonButton>
          </IonContent>
        </IonPage>
      </IonApp>
    );
  }
}

export default App;
