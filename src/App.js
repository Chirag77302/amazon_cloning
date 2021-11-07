import React from 'react';
import './App.css';
// import Search from './search';
import Header from './header';
import Home from './Home';
import SubHeader from './SubHeader';
import { DataProvider } from './contexts/DataContext';
import EndBar from './EndBar';
import FinalBar from './FinalBar';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <SubHeader />
        <Home />
      </DataProvider>
      <EndBar />
      <FinalBar />
      {/* <Search /> */}
    </div>
  );
}

export default App;
