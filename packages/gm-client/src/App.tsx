import React from 'react';
import {Counter} from './features/counter/Counter';
import {MainNavigation} from './features/main-navigation/MainNavigation';
import './App.css';
import {Button} from '@org-package/design-system';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Game Master Client
        <Button label="ss" />
        <MainNavigation />
        <Counter />
      </header>
    </div>
  );
}

export default App;
