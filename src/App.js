import React, { Component } from 'react';
import Navbar from './components/Main/navbar';
import Home from './components/home'
import Footer from './components/Main/footer';
import Prevention from './components/prevention';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Donation from './components/Donation';


class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Prevention" component={Prevention} />
          <Route path="/Donation" component={Donation} />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
