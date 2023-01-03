import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginFormPage from './components/SESSIONS/LoginFormPage';
import SignupFormPage from './components/SESSIONS/SignupFormPage';

import ListingFormPage from './components/LISTINGS/ListingFormPage';
import ListingGrid from './components/LISTINGS/ListingGrid';
import ListingTile from './components/LISTINGS/ListingGrid/ListingTile';
import ListingComponent from './components/LISTINGS/ListingComponent';

import ReviewFormTest from './components/REVIEWS/ReviewForm';

import Navigation from "./components/MAINNAV/Navigation";
import SecondaryNavigation from './components/MAINNAV/SecondaryNavigation';

import './App.css'

function App() {
  return (
    <>
    <div id="nav-container">
      {/* debugger */}
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
          <Route path="/new_listing">
            <ListingFormPage />
          </Route>
          <Route path="/new_review">
            <ReviewFormTest />
          </Route>
        </Switch>
    </>
  );
}

export default App;