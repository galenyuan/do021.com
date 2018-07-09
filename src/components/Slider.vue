<style>
  .home-bg {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-image: url(//do021-site.oss-cn-hangzhou.aliyuncs.com/images/slider/slide-7-fs@2x.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .home-bg__discover {
    position: absolute;
    width: 100%;
    padding-left: 2rem;
    left: 0;
    top: 11rem;
  }
</style>

<template>
  <div class="section-block feature-1 pt-15 bkg-green tmh-perspective">
    <div class="media-overlay background-cover fullscreen-pattern-1 horizon" data-animate-in="preset:slideInRightShort;duration:1000ms;"
      data-threshold="0.1" style="backface-visibility: hidden; transition-property: -moz-transform, opacity; transition-duration: 1000ms; transition-timing-function: cubic-bezier(0.11, 0.69, 0.66, 1.01); transition-delay: 0s; transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); opacity: 1; visibility: visible; transform-origin: 50% 50% 0px;"></div>
    <div class="row flex two-columns-on-tablet">
      <div class="column width-7 v-align-middle left center-on-mobile">
        <div>
          <div class="thumbnail mb-20">
            <img src="images/logos/accepted-credit-cards.png" alt="" style="transition-duration: 400ms; transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);"
              width="200">
          </div>
          <h1 class="mb-20">
            <span class="color-white mb-5">
              我们是一个专注于研发卓越互联网产品的团队。
            </span>
          </h1>
          <p class="lead weight-light color-white mb-30 hide-on-mobile">
            我们擅长从0到1创造品质极佳的产品，用我们的技术和经验让客户取得成功的同时也让用户获得更好的体验。我们用专业知识力求产品的每一处细节都完美。如果您在寻找一个帮您实现互联网产品创意的团队，我们将是不二之选。
          </p>
          <div class="mb-mobile-30">
            <a href="#about-us" data-animate-in="preset:slideInUpShort;duration:800ms;delay:1000ms;" data-no-scale="" class="scroll-link button rounded medium text-small border-white color-white bkg-hover-theme color-hover-white no-scale"
              style="transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); opacity: 1; transform-origin: 50% 50% 0px; visibility: visible;">
              了解更多
            </a>
          </div>
        </div>
      </div>
      <div class="column width-5 right center-on-mobile">
        <div class="feature-image">
          <div class="thumbnail mb-0">
            <img src="images/generic/iphone-7.png" alt="" style="transition-duration: 400ms; transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);"
              width="350">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>