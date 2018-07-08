<style>

</style>

<template>
  <div class="wrapper">
    <div class="wrapper-inner">
      <div class="content clearfix reveal-footer">
        <slider />
        <about-us />
        <team />
        <why-us />
        <contact />
      </div>
      <!-- Content End -->

      <!-- Footer -->
      <footer class="footer footer-fixed footer-light with-border">
        <div class="footer-top">
          <div class="row flex">
            <div class="column width-9">
              <div class="row two-columns-on-tablet">
                <div class="column width-3">
                  <div class="widget">
                    <h3 class="widget-title mb-30">Product</h3>
                    <ul>
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Careers</a></li>
                      <li><a href="#">Press</a></li>
                    </ul>
                  </div>
                </div>
                <div class="column width-3">
                  <div class="widget">
                    <h3 class="widget-title mb-30">Company</h3>
                    <ul>
                      <li><a href="#">Overview</a></li>
                      <li><a href="#">Features</a></li>
                      <li><a href="#">Pricing</a></li>
                    </ul>
                  </div>
                </div>
                <div class="column width-3">
                  <div class="widget">
                    <h3 class="widget-title mb-30">Resources</h3>
                    <ul>
                      <li><a href="#">News</a></li>
                      <li><a href="#">Documentation</a></li>
                      <li><a href="#">Faq</a></li>
                    </ul>
                  </div>
                </div>
                <div class="column width-3">
                  <div class="widget">
                    <h3 class="widget-title mb-30">Contact</h3>
                    <ul>
                      <li><a href="#">Email us</a></li>
                      <li><a href="#">Tweet Faulkner</a></li>
                      <li><a href="#">Visit the office</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="column width-3">
              <div class="widget right left-on-mobile">
                <div class="footer-logo">
                  <a href="index.html"><img src="//do021-site.oss-cn-hangzhou.aliyuncs.com/images/logo-dark.png" alt="Faulkner Logo" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="row">
            <div class="column width-12">
              <div class="footer-bottom-inner">
                <p class="copyright pull-left clear-float-on-mobile">&copy; ThemeMountain. All Rights Reserved.</p> <a href="#" class="scroll-to-top pull-right clear-on-mobile" data-no-hide>Back Top</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <!-- Footer End -->

    </div>
  </div>
</template>

<script>
import AboutUs from '@/components/AboutUs'
import WhyUs from '@/components/WhyUs'
import Team from '@/components/Team'
import Slider from '@/components/Slider'
import Contact from '@/components/Contact'

const SCRIPT_URL = '//do021-site.oss-cn-hangzhou.aliyuncs.com/timber.master.min.js'

export default {
  components: {
    AboutUs,
    WhyUs,
    Team,
    Slider,
    Contact
  },

  mounted () {
    const script = document.createElement('script')
    script.src = SCRIPT_URL
    document.body.appendChild(script)
  }
}
</script>
