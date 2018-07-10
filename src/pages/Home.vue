<style>

</style>

<template>
  <section>
    <header-bar />
    <navigation />
    <div class="wrapper">
      <div class="wrapper-inner">
        <div class="content clearfix reveal-footer">
          <slider />
          <we-are-from />
          <services />
          <intro-requirement />
          <intro-architecture />
          <intro-development />
          <intro-maintainence />
          <why-us />
          <contact />
        </div>
        <!-- Content End -->

        <!-- Footer -->
        <footer class="footer footer-fixed with-border">
          <div class="footer-bottom">
            <div class="row">
              <div class="column width-12">
                <div class="footer-bottom-inner">
                  <p class="copyright pull-left clear-float-on-mobile">&copy; Do021.com. All Rights Reserved.</p> <a href="#" class="scroll-to-top pull-right clear-on-mobile" data-no-hide>Back Top</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <!-- Footer End -->

      </div>
    </div>
  </section>
</template>

<script>
import WeAreFrom from '@/components/WeAreFrom'
import WhyUs from '@/components/WhyUs'
import Slider from '@/components/Slider'
import Contact from '@/components/Contact'
import Services from '@/components/Services'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import IntroRequirement from '@/components/IntroRequirement'
import introArchitecture from '@/components/introArchitecture'
import introDevelopment from '@/components/introDevelopment'
import introMaintainence from '@/components/introMaintainence'

const SCRIPT_URL = '//do021-site.oss-cn-hangzhou.aliyuncs.com/timber.master.min.js'

export default {
  data () {
    return {
      STRING: window.TEMPLATE_CONTENT
    }
  },

  components: {
    WeAreFrom,
    WhyUs,
    Slider,
    Contact,
    Services,
    HeaderBar: Header,
    Navigation,
    IntroRequirement,
    introArchitecture,
    introDevelopment,
    introMaintainence
  },

  mounted () {
    const script = document.createElement('script')
    script.src = SCRIPT_URL
    document.body.appendChild(script)
  }
}
</script>
