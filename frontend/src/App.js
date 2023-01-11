import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import LoginFormPage from './components/SESSIONS/LoginFormPage';
import SignupFormPage from './components/SESSIONS/SignupFormPage';
import CartPage from './components/CART/CartPage';

import ListingFormPage from './components/LISTINGS/ListingFormPage';
import ListingGrid from './components/LISTINGS/ListingGrid';
import ListingIndex from './components/LISTINGS/ListingIndex'
import ListingTile from './components/LISTINGS/ListingTile/ListingTile';
import ListingComponent from './components/LISTINGS/ListingComponent';

import SplashScreen from './components/SPLASH/SplashScreen';
import SplashScreen2 from './components/SPLASH/SplashScreen2';

import ReviewFormTest from './components/REVIEWS/ModelReviewForm';

import Navigation from "./components/MAINNAV/Navigation";
import SecondaryNavigation from './components/MAINNAV/SecondaryNavigation';

import './App.css'
import CategoryListingIndex from './components/LISTINGS/CategoryListingIndex';
import GeneralListingIndex from './components/LISTINGS/GeneralListingIndex';
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
                  <SplashScreen />                
                <h1 className="grid-title">Your Daily Picks</h1>
                <br />
                <ListingGrid />
                <h1 className="grid-title">Don't String Me Along! Guitars On Sale:</h1>
                <br />
                <ListingGrid ListingGrid />
                  <SplashScreen2 />                
                <h1 className="grid-title">You Know I'm All About that Bass:</h1>
                <br />
                <ListingGrid ListingGrid  />
              </div>
            </Route>
            <Route path="/login">
              <LoginFormPage />
            </Route>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route exact path="/my_feed">
              <GeneralListingIndex />
            </Route>
            <Route exact path="/categories/:categoryId">
              <CategoryListingIndex />
            </Route>
            <Route exact path="/listings/:listingId">
              <ListingComponent />
            </Route>
            <Route path="/new_listing">
              <ListingFormPage />
            </Route>
          </Switch>
    </>
  );
}

export default App;