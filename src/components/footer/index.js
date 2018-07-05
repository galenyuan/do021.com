import { h } from 'preact'
import LayoutGrid from 'preact-material-components/LayoutGrid'
import './footer.scss'

export default () => {
  return (
    <div class="footer">
      <LayoutGrid class="mdc-theme--primary-bg mdc-theme--on-primary">
        <LayoutGrid.Inner>
          <LayoutGrid.Cell cols="4" />
        </LayoutGrid.Inner>
      </LayoutGrid>

      <LayoutGrid class="mdc-theme--primary-bg mdc-theme--on-primary">
        <LayoutGrid.Inner>
          <LayoutGrid.Cell cols="6" class="mdc-layout-grid--align-left">
            <div>
              <p>© 2018 by do021. All Rights Reserved.</p>
            </div>
          </LayoutGrid.Cell>
          <LayoutGrid.Cell cols="6" class="mdc-layout-grid--align-right">
            <div>
              <p>
                Powered By{' '}
                <a href="https://pages.github.com/" target="_blank">
                  <b>Github Pages</b>
                </a>,{' '}
                <a href="https://preactjs.com/" target="_blank">
                  <b>Preact</b>
                </a>
              </p>
            </div>
          </LayoutGrid.Cell>
        </LayoutGrid.Inner>
      </LayoutGrid>
    </div>
  )
}
