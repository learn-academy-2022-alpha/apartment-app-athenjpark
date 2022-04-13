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
import mockApartments from './mockApartments.js'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: mockApartments
    }
  }

  render () {
    return (
      <>
      <Header {...this.props} />
      <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/listings" render={(props) => <Listings apartments={this.state.apartments} />} />
          </Switch>
      </Router>
      </>
    );
  }
}

export default App
