import React, { Component } from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react';
import logo from './logo.svg';
import './App.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

class App extends Component {
  render() {
    return (
      // FIXME: iPhone Xのステータスバーに合わせてる。
      <div id='app' style={{ marginTop: 44 }}>
        <IonApp>
          <IonContent>
            <IonHeader>
              <IonToolbar>
                <IonTitle>
                  IonicReactApp
                </IonTitle>
              </IonToolbar>
            </IonHeader>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <IonButton href="https://reactjs.org">Learn React</IonButton>
          </IonContent>
        </IonApp>
      </div>
    );
  }
}

export default App;
