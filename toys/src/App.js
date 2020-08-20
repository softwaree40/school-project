import React from 'react';
import './App.css';
import Navigation from "./components/Navigation"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./components/Home"
import ToysComponent  from "./containers/ToysComponent"
import { About } from "./components/About"
import Footer from './components/Footer';
import ToyFormComponent from "./containers/ToyFormComponent"
// import ReviewForm from "./containers/ReviewForm"
// import {Review} from "./components/Review"
import ReviewForm from './containers/ReviewForm';
import ReviewsComponent from './containers/ReviewsComponent';


function App() {
  return (
    <Router>

      <Navigation />
      <div className="App" >
        {/* <ReviewComponent /> */}
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/toys" component={ToysComponent} />
          <Route exact path="/toyfrom" component={ToyFormComponent} />
          <Route path="/toys/:id" component={ReviewsComponent} />
          <Route exact  path="/reviews/new" component={ReviewForm} />
          <Route exact path="/about" component={About} />
        </Switch>

        <Footer />
      </div>

    </Router>
  );
}

export default App;
