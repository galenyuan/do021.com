import { h, Component } from 'preact'
import { route } from 'preact-router'
import TopAppBar from 'preact-material-components/TopAppBar'

import './header.scss'

export default class Header extends Component {
  linkTo = path => () => {
    route(path)
  }

  goHome = this.linkTo('/')

  render() {
    return (
      <div class="header">
        <TopAppBar fixed>
          <TopAppBar.Row>
            <TopAppBar.Section align-start>
              <TopAppBar.Title onClick={this.goHome}>Do 0 to 1</TopAppBar.Title>
            </TopAppBar.Section>
          </TopAppBar.Row>
        </TopAppBar>
      </div>
    )
  }
}
