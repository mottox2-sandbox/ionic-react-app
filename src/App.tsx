import React, { Component } from 'react';
import { IonApp, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import logo from './logo.svg';
import './App.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

class App extends Component {
  render() {
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              IonicReactApp
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </IonApp>
    );
  }
}

export default App;
