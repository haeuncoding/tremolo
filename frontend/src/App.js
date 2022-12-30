import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import ListingGrid from './components/ListingGrid';
import ListingTile from './components/ListingGrid/ListingTile';
import ListingComponent from './components/ListingComponent';
import Navigation from "./components/Navigation";
import SecondaryNavigation from './components/SecondaryNavigation';
import './App.css'

function App() {
  return (
    <>
    <div id="nav-container">
      <div>
        <Navigation 
          class="nav"
          id="main-nav"
          />
      </div>  
      <div>
      <SecondaryNavigation 
        class="nav"
        id="sec-nav"
        />
      </div>  
    </div>
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/listing">
            <ListingComponent />
          </Route>
          <Route path="/feed">
            <ListingGrid />
          </Route>
          <Route path="/feed_tile">
            <ListingTile />
          </Route>
        </Switch>
    </>
  );
}

export default App;