import { h, Component } from 'preact'
import { route } from 'preact-router'
import Button from 'preact-material-components/Button'

import './not-found.scss'

export default class NotFound extends Component {
  linkTo = path => () => {
    route(path)
  }

  goHome = this.linkTo('/')

  render() {
    return (
      <div class="not-found">
        <h1>Error 404</h1>
        <br />
        <h1>这个页面不存在</h1>
        <br />
        <br />
        <Button ripple raised onClick={this.goHome}>
          <Button.Icon>home</Button.Icon>返回主页
        </Button>
      </div>
    )
  }
}
