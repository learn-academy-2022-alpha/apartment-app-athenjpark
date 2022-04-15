import React from "react"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Apartments from './pages/Apartments'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
    this.readApartment()
  }

  readApartment = () => {
    fetch("http://localhost:3000/apartments")
    .then(response => response.json())
    .then(payload => this.setState({apartments: payload}))
    .catch(errors => console.log("Apartment read errors:", errors))
  }

  render () {
    return (
      <>
      <Header {...this.props} />
      <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/apartments" render={(props) => <Apartments apartments={this.state.apartments} />} />
          </Switch>
      </Router>
      </>
    );
  }
}

export default App
