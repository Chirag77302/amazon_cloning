import React from 'react';
import './App.css';
import Header from './header';
import Home from './Home';
import SubHeader from './SubHeader';
import { DataProvider } from './contexts/DataContext';
import EndBar from './EndBar';
import FinalBar from './FinalBar';
import { Route,Switch } from 'react-router';
import ProductCard from './ProductCard';

function App() {
  return (
    <div className="App">
        <Switch>
          <DataProvider>
                <Header />
                <SubHeader />
            <Route exact path="/" >
                <Home />
                <EndBar />
                <FinalBar />
            </Route>
            <Route exact path="/product/:id" render={routeProps => (<ProductCard {...routeProps} />)} ></Route>
          </DataProvider>
          <Route  render={routeProps => <div>Not Found</div>} ></Route>
      </Switch>
    </div>
  );
}

export default App;
