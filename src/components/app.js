import { h, Component } from 'preact'
import { Router } from 'preact-router'

import Header from './header'
import Footer from './footer'
import Home from '../routes/home'
import NotFound from '../routes/not-found'

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
            <NotFound default />
          </Router>
        </div>
        <Footer />
      </div>
    )
  }
}
