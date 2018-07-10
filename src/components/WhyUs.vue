<style>

</style>

<template>
<div id="why-us" class="section-block replicable-content bkg-white">
  <div class="row">
  <h2><b>{{ STRING.title }}</b></h2>
    <div class="column width-12">
      <div class="tabs unstyled vertical rounded left">
        <ul class="tab-nav width-4">
          <li class="">
            <a href="#tabs-1-pane-1">
              <span class="icon-database color-blue"></span>
              <span class="title-small text-uppercase weight-semi-bold mb-10 inline-block">{{ STRING.tab1.subTitle }}</span><br>
              <span class="hide-on-mobile mb-20 inline-block">{{ STRING.tab1.intro }}</span>
            </a>
          </li>
          <li class="">
            <a href="#tabs-1-pane-2">
              <span class="icon-network color-blue"></span>
              <span class="title-small text-uppercase weight-semi-bold mb-10 inline-block">{{ STRING.tab2.subTitle }}</span><br>
              <span class="hide-on-mobile mb-20 inline-block">{{ STRING.tab2.intro }}</span>
            </a>
          </li>
          <li class="active">
            <a href="#tabs-1-pane-3">
              <span class="icon-code color-blue"></span>
              <span class="title-small text-uppercase weight-semi-bold mb-10 inline-block">{{ STRING.tab3.subTitle }}</span><br>
              <span class="hide-on-mobile mb-20 inline-block">{{ STRING.tab3.intro }}</span>
            </a>
          </li>
        </ul>
        <div class="tab-panes width-7 offset-1">
          <div id="tabs-1-pane-1" class="animate">
            <div class="tab-content">
              <div class="row flex">
                <div class="column width-12">
                  <h3 class="weight-semi-bold">{{ STRING.tab1.contentTitle }}</h3>
                  <p class="lead mb-50">{{ STRING.tab1.content }}</p>
                  <div class="row">
                    <div class="column width-6">
                      <span class="title-large font-alt-1 weight-light opacity-04">01</span>
                      <p>{{ STRING.tab1.subContentA }}</p>
                    </div>
                    <div class="column width-6">
                      <span class="title-large font-alt-1 weight-light opacity-04">02</span>
                      <p>{{ STRING.tab1.subContentB }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tabs-1-pane-2" class="">
            <div class="tab-content">
              <div class="row flex">
                <div class="column width-12">
                  <h3 class="weight-semi-bold">{{ STRING.tab2.contentTitle }}</h3>
                  <p class="lead mb-50">{{ STRING.tab2.content }}</p>
                  <div class="row">
                    <div class="column width-6">
                      <span class="title-large font-alt-1 weight-light opacity-04">01</span>
                      <p>{{ STRING.tab2.subContentA }}</p>
                    </div>
                    <div class="column width-6">
                      <span class="title-large font-alt-1 weight-light opacity-04">02</span>
                      <p>{{ STRING.tab2.subContentB }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tabs-1-pane-3" class="active animate-in">
            <div class="tab-content">
              <div class="row flex">
                <div class="column width-12">
                  <h3 class="weight-semi-bold">{{ STRING.tab3.contentTitle }}</h3>
                  <p class="lead mb-50">{{ STRING.tab3.content }}</p>
                  <div class="row">
                    <div class="column width-6">
                      <span class="title-large font-alt-1 weight-light opacity-04">01</span>
                      <p>{{ STRING.tab3.subContentA }}</p>
                    </div>
                    <div class="column width-6">
                      <span class="title-large font-alt-1 weight-light opacity-04">02</span>
                      <p>{{ STRING.tab3.subContentB }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      STRING: window.TEMPLATE_CONTENT.whyUs
    }
  },

  computed: {
    reasons () {
      return this.STRING.content.slice(1, this.STRING.content.length)
    }
  }
}
</script>
