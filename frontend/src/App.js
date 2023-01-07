import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginFormPage from './components/SESSIONS/LoginFormPage';
import SignupFormPage from './components/SESSIONS/SignupFormPage';

import ListingFormPage from './components/LISTINGS/ListingFormPage';
import ListingGrid from './components/LISTINGS/ListingGrid';
import ListingIndex from './components/LISTINGS/ListingIndex'
import ListingTile from './components/LISTINGS/ListingTile/ListingTile';
import ListingComponent from './components/LISTINGS/ListingComponent';

import SplashScreen from './components/SPLASH/SplashScreen';

import ReviewFormTest from './components/REVIEWS/ReviewForm';

import Navigation from "./components/MAINNAV/Navigation";
import SecondaryNavigation from './components/MAINNAV/SecondaryNavigation';
// import Cart from './components/MAINNAV/Navigation/Cart/Cart'
import * as filters from './util/filters'

import './App.css'

function App() {
  return (
    <>
        <div id="nav-container">
          <div>
            <Navigation 
              className="nav"
              id="main-nav"
              />
          </div>  
          <div>
          <SecondaryNavigation 
            className="nav"
            id="sec-nav"
            />
          </div>  
        </div>
          <Switch>
            <Route exact path="/">
              <div id="home-feed-grid">
                  <SplashScreen/>                
                <h1 className="grid-title">Your Daily Picks</h1>
                <br />
                <ListingGrid filter={filters.defaultFilter}/>
                <h1 className="grid-title">Don't String Me Along! Guitars On Sale:</h1>
                <br />
                <ListingGrid ListingGrid filter={filters.defaultFilter} />
                <h1 className="grid-title">You Know I'm All About that Bass.</h1>
                <br />
                <ListingGrid ListingGrid filter={filters.defaultFilter} />
              </div>
            </Route>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route exact path="/listings">
              <ListingIndex />
            </Route>
            <Route path="/listings/:listingId">
              <ListingComponent />
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