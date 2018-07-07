import { h, Component } from 'preact'
import Button from 'preact-material-components/Button'
import { route } from 'preact-router'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import ImageList from 'preact-material-components/ImageList'
import TextField from 'preact-material-components/TextField'

import './home.scss'

import cacheLogo from '../../assets/logos/cache.png'
import elemeLogo from '../../assets/logos/eleme.png'
import hiltonLogo from '../../assets/logos/hilton.png'
import starbucksLogo from '../../assets/logos/starbucks.png'
import walmartLogo from '../../assets/logos/walmart.png'
import alibabaLogo from '../../assets/logos/alibaba.png'
import mobilwnowLogo from '../../assets/logos/mobilenow.png'
import ibmLogo from '../../assets/logos/ibm.png'
import ubisoftLogo from '../../assets/logos/ubisoft.png'

export default class Home extends Component {
  companies = [
    {
      name: 'Alibaba',
      src: alibabaLogo
    },
    {
      name: 'MobileNow',
      src: mobilwnowLogo
    },
    {
      name: 'Ubisoft',
      src: ubisoftLogo
    },
    {
      name: 'IBM',
      src: ibmLogo
    }
  ]
  clients = [
    {
      name: 'Cache Cache',
      src: cacheLogo
    },
    {
      name: 'Ele.me',
      src: elemeLogo
    },
    {
      name: 'Hilton',
      src: hiltonLogo
    },
    {
      name: 'Starbucks',
      src: starbucksLogo
    },
    {
      name: 'Walmart',
      src: walmartLogo
    }
  ]

  linkTo = path => () => {
    route(path)
  }

  // TOFIX: Not working
  goContact = this.linkTo('/#contact')
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
                  <Button
                    ripple
                    raised
                    class="into_button"
                    onClick={this.goContact}
                  >
                    <Button.Icon>star</Button.Icon>联系我们
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
            <ImageList
              masonry
              mdc-image-list--with-text-protection
              style={{
                columnCount: 4,
                columnGap: '30px',
                maxWidth: '1200px'
              }}
            >
              {this.companies.map((client, index) => (
                <ImageList.Item key={index} class="client-logo">
                  <ImageList.Image src={client.src} />
                  <ImageList.Supporting>
                    <ImageList.Label class="client-logo__name">
                      {client.name}
                    </ImageList.Label>
                  </ImageList.Supporting>
                  {/* <ImageList.AspectContainer /> */}
                </ImageList.Item>
              ))}
            </ImageList>
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
            <ImageList
              masonry
              mdc-image-list--with-text-protection
              style={{
                columnCount: 5,
                columnGap: '30px',
                maxWidth: '1200px'
              }}
            >
              {this.clients.map((client, index) => (
                <ImageList.Item key={index} class="client-logo">
                  <ImageList.Image src={client.src} />
                  <ImageList.Supporting>
                    <ImageList.Label class="client-logo__name">
                      {client.name}
                    </ImageList.Label>
                  </ImageList.Supporting>
                  {/* <ImageList.AspectContainer /> */}
                </ImageList.Item>
              ))}
            </ImageList>
            <LayoutGrid.Inner />
          </LayoutGrid.Cell>
          <LayoutGrid.Cell class="mdc-theme--secondary-bg mdc-theme--on-secondary">
            <LayoutGrid.Inner>
              <LayoutGrid.Cell cols="6">
                <div id="map" />
              </LayoutGrid.Cell>
              <LayoutGrid.Cell cols="6">
                <section id="contact" class="block">
                  <h1>联系我们</h1>
                  <TextField box fullwidth label="称呼" />
                  {''}
                  <TextField box fullwidth label="联系方式" />
                  <TextField box fullwidth textarea label="消息" />
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
            </LayoutGrid.Inner>
          </LayoutGrid.Cell>
        </LayoutGrid>
      </div>
    )
  }
}
