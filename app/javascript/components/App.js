import React from "react"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Listings from './pages/Listings'

class App extends React.Component {
  render () {
    return (
      <>
      <Header {...this.props} />
      <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/listings" component={Listings} />
          </Switch>
      </Router>
      </>
    );
  }
}

export default App
