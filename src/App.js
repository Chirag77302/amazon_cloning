import React from 'react';
import './App.css';
import { DataProvider } from './contexts/DataContext';
import { Switch } from 'react-router';
import MainComp from './Maincomp';

function App() {
  return (
      <div className="App">
          <Switch>
            <DataProvider>
              <MainComp />
            </DataProvider>
        </Switch>
      </div>
  );
}

export default App;
