<style>
.no-padding {
  padding-top: 0;
  padding-bottom: 0;
}
</style>

<template>
<div class="section-block feature-2 right no-padding">
  <div class="row flex">
    <div class="column width-6">
      <div class="feature-image tmh-perspective">
        <div class="feature-image-inner center-on-mobile horizon" data-animate-in="preset:slideInLeftShort;duration:1000;" data-threshold="0.6" style="backface-visibility: hidden; transition: -webkit-transform 1000ms cubic-bezier(0.11, 0.69, 0.66, 1.01), opacity; transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); opacity: 1; visibility: visible; transform-origin: 50% 50% 0px;">
          <img src="../assets/images/intro-maintainence.png" alt="">
        </div>
      </div>
    </div>
    <div class="column width-5 offset-1">
      <div class="feature-content tmh-perspective">
        <div class="feature-content-inner left horizon" data-animate-in="preset:slideInUpShort;duration:1000;delay:300ms;" data-threshold="0.6" style="backface-visibility: hidden; transition: -webkit-transform 1000ms cubic-bezier(0.11, 0.69, 0.66, 1.01) 300ms, opacity; transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); opacity: 1; visibility: visible; transform-origin: 50% 50% 0px;">
          <h2 class="mb-30">{{ STRING.title }}</h2>
          <p class="lead">{{ STRING.content }}</p>
          <div class="row">
            <span class="progress-bar-label">{{ STRING.subTitle1 }}<span class="pull-right">60%</span></span>
            <div class="progress-bar small pill bkg-grey-light mb-0 tmh-perspective">
              <div class="bar small bkg-pink color-white horizon percent-60" data-animate-in="transX:-100%;duration:1000ms;easing:swing;" style="backface-visibility: hidden; transition: -webkit-transform 1000ms cubic-bezier(0.42, 0, 0.58, 1), opacity; transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); opacity: 1; visibility: visible; transform-origin: 50% 50% 0px;"></div>
            </div>
            <span class="progress-bar-label">{{ STRING.subTitle2 }}<span class="pull-right">50%</span></span>
            <div class="progress-bar small pill bkg-grey-light mb-0 tmh-perspective">
              <div class="bar small bkg-pink color-white horizon percent-50" data-animate-in="transX:-100%;duration:1000ms;easing:swing;" style="backface-visibility: hidden; transition: -webkit-transform 1000ms cubic-bezier(0.42, 0, 0.58, 1), opacity; transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); opacity: 1; visibility: visible; transform-origin: 50% 50% 0px;"></div>
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
      STRING: window.TEMPLATE_CONTENT.introMaintainence
    }
  }
}
</script>
