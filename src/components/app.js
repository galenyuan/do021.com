import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'
import Footer from './footer'
import Home from '../routes/home'

export default class App extends Component {
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render() {
    return (
      <div>
        <Header />
        <div class="main">
          <Router onChange={this.handleRoute}>
            <Home path="/" />
          </Router>
        </div>
        <Footer />
      </div>
    )
  }
}