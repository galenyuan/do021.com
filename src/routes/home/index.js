import { h, Component } from 'preact'
import Button from 'preact-material-components/Button'
import FormField from 'preact-material-components/FormField'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import TextField from 'preact-material-components/TextField'

import './home.scss'

export default class Home extends Component {
  render() {
    return (
      <div class="home">
        <LayoutGrid>
          <LayoutGrid.Cell class="mdc-theme--secondary-bg mdc-theme--on-secondary">
            <LayoutGrid.Inner>
              <LayoutGrid.Cell cols="6">
                <section class="block">
                  <h1>从0到1的实现落地</h1>
                  <h3>
                    从众多项目和经验中使用最有效的最可靠的帮助客户从0到1的实现自己到项目。
                  </h3>
                  <Button ripple raised class="into_button">
                    <Button.Icon>star</Button.Icon>了解一下
                  </Button>
                </section>
              </LayoutGrid.Cell>

              <LayoutGrid.Cell cols="6" class="intro_bg" />
            </LayoutGrid.Inner>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell class="mdc-theme--primary-bg mdc-theme--on-primary">
            <LayoutGrid.Cell cols="12" class="us_title">
              <h1>我们来自</h1>
            </LayoutGrid.Cell>
            <LayoutGrid.Inner>
              <LayoutGrid.Cell cols="3">
                {/* TODO: 调整图片大小，从assets中加载 */}
                <section class="logo">
                  <img
                    src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1524898740,1582822059&fm=27&gp=0.jpg"
                    height="200"
                    width="200"
                  />
                  <h1>Alibaba</h1>
                </section>
              </LayoutGrid.Cell>
              <LayoutGrid.Cell cols="3">
                <section class="logo">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUzMwDeQX2zqaW81cwuNMZ_yxiBq1CNQZ8EK-wnPIOtN2yPTNeUg"
                    height="200"
                    width="200"
                  />
                  <h1>MobileNow</h1>
                </section>
              </LayoutGrid.Cell>
              <LayoutGrid.Cell cols="3">
                <section class="logo">
                  <img
                    src="https://img.news.goo.ne.jp/picture/gamespark/m_gamespark-79870.jpg"
                    height="200"
                    width="200"
                  />
                  <h1>Ubisoft</h1>
                </section>
              </LayoutGrid.Cell>
              <LayoutGrid.Cell cols="3">
                <section class="logo">
                  <img
                    src="https://www.capgemini.com/wp-content/uploads/2017/08/ibm.png"
                    height="200"
                    width="200"
                  />
                  <h1>IBM</h1>
                </section>
              </LayoutGrid.Cell>
            </LayoutGrid.Inner>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell class="mdc-theme--secondary-bg mdc-theme--on-secondary">
            <LayoutGrid.Inner>
              <LayoutGrid.Cell cols="6">
                <section class="block">
                  <h1>易于维护&拓展&集成</h1>
                  <h3>
                    服务端中我们遵循Nginx的为服务体系，设计开发部署我们的服务，无论是现有系统还是全新系统都能做到快速开发部署，同时也具有很好的稳定性。
                  </h3>
                </section>
              </LayoutGrid.Cell>

              <LayoutGrid.Cell cols="6" class="backend_bg" />
            </LayoutGrid.Inner>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell>
            <LayoutGrid.Inner>
              <LayoutGrid.Cell cols="6" class="frontend_bg" />
              <LayoutGrid.Cell cols="6">
                <section class="block">
                  <h1>现代&易用&流畅</h1>
                  <h3>
                    客户端中我们采用最新的设计理念和设计语言，基于多年的经验，提供高可用且易用的客户端，让用户再简单的操作中完成想到的事情。
                  </h3>
                </section>
              </LayoutGrid.Cell>
            </LayoutGrid.Inner>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell>
            <LayoutGrid.Cell cols="12" class="us_title">
              <h1>我们帮助过的客户</h1>
            </LayoutGrid.Cell>
            <LayoutGrid.Inner>
              <LayoutGrid.Cell cols="3">
                {/* TODO: 调整图片大小，从assets中加载 */}
                <section class="logo">
                  <img
                    src="https://yt3.ggpht.com/a-/ACSszfEV4zZl_BCIsBOfx74ZuaI0fJHdhVL9FVx6hg=s900-mo-c-c0xffffffff-rj-k-no"
                    height="200"
                    width="200"
                  />
                  <h1>CACHE CACHE</h1>
                </section>
              </LayoutGrid.Cell>
              <LayoutGrid.Cell cols="3">
                {/* TODO: 调整图片大小，从assets中加载 */}
                <section class="logo">
                  <img
                    src="https://appstoreisvpic.alipayobjects.com/prod/130acd80-2546-4011-ba80-8ed74dce79d1.png"
                    height="200"
                    width="200"
                  />
                  <h1>Ele.me</h1>
                </section>
              </LayoutGrid.Cell>
              <LayoutGrid.Cell cols="3">
                <section class="logo">
                  <img
                    src="http://news.hiltonworldwide.com/assets/HILT/images/newsroom/HiltonBlueLogo_HR1.jpg"
                    height="200"
                    width="200"
                  />
                  <h1>Hilton</h1>
                </section>
              </LayoutGrid.Cell>
              <LayoutGrid.Cell cols="3">
                <section class="logo">
                  <img
                    src="http://www.stickpng.com/assets/images/58428cc1a6515b1e0ad75ab1.png"
                    height="200"
                    width="200"
                  />
                  <h1>Starbucks</h1>
                </section>
              </LayoutGrid.Cell>
              <LayoutGrid.Cell cols="3">
                <section class="logo">
                  <img
                    src="https://www.visitsouthwalton.com/sites/default/master/files/profiles/photos/profile_logo/walmart-logo0_f5d28ae6-5056-a36a-0769d79aad09c04b.jpg"
                    height="200"
                    width="200"
                  />
                  <h1>Walmart</h1>
                </section>
              </LayoutGrid.Cell>
            </LayoutGrid.Inner>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell class="mdc-theme--secondary-bg mdc-theme--on-secondary">
            <section class="block">
              <h1>联系我们</h1>
              <FormField>
                <TextField label="称呼" />
              </FormField>
              <FormField>
                <TextField label="联系方式" helperText="手机/邮箱" />
              </FormField>
              <FormField>
                <TextField label="消息" textarea={true} />
              </FormField>
              <Button
                type="submit"
                raised
                ripple
                className="mdc-theme--primary-bg mdc-theme--on-primary"
              >
                提交
              </Button>
            </section>
          </LayoutGrid.Cell>
        </LayoutGrid>
      </div>
    )
  }
}
