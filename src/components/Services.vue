<style>

</style>

<template>
  <div  id="services" class="section-block replicable-content bkg-grey-ultralight">
    <div class="row flex">
      <div class="column width-3 tmh-perspective">
        <div class="feature-column medium left horizon" data-animate-in="preset:slideInRightShort;duration:1000ms;" data-threshold="1" style="backface-visibility: hidden; transition-property: -moz-transform, opacity; transition-duration: 1000ms; transition-timing-function: cubic-bezier(0.11, 0.69, 0.66, 1.01); transition-delay: 0s; transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); opacity: 1; visibility: visible; transform-origin: 50% 50% 0px;">
          <span class="feature-icon icon-pin color-green"></span>
          <div class="feature-text">
            <h4>{{ STRING.title1 }}</h4>
            <p>{{ STRING.content1 }}</p>
          </div>
        </div>
      </div>
      <div class="column width-3 tmh-perspective">
        <div class="feature-column medium left horizon" data-animate-in="preset:slideInRightShort;duration:1000ms;delay:200ms;" data-threshold="1" style="backface-visibility: hidden; transition-property: -moz-transform, opacity; transition-duration: 1000ms; transition-timing-function: cubic-bezier(0.11, 0.69, 0.66, 1.01); transition-delay: 200ms; transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); opacity: 1; visibility: visible; transform-origin: 50% 50% 0px;">
          <span class="feature-icon icon-round-brush color-green"></span>
          <div class="feature-text">
            <h4>{{ STRING.title2 }}</h4>
            <p>{{ STRING.content2 }}</p>
          </div>
        </div>
      </div>
      <div class="column width-3 tmh-perspective">
        <div class="feature-column medium left horizon" data-animate-in="preset:slideInRightShort;duration:1000ms;delay:400ms;" data-threshold="1" style="backface-visibility: hidden; transition-property: -moz-transform, opacity; transition-duration: 1000ms; transition-timing-function: cubic-bezier(0.11, 0.69, 0.66, 1.01); transition-delay: 400ms; transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); opacity: 1; visibility: visible; transform-origin: 50% 50% 0px;">
          <span class="feature-icon icon-browser color-green"></span>
          <div class="feature-text">
            <h4>{{ STRING.title3 }}</h4>
            <p>{{ STRING.content3 }}</p>
          </div>
        </div>
      </div>
      <div class="column width-3 tmh-perspective">
        <div class="feature-column medium left horizon" data-animate-in="preset:slideInRightShort;duration:1000ms;delay:700ms;" data-threshold="1" style="backface-visibility: hidden; transition-property: -moz-transform, opacity; transition-duration: 1000ms; transition-timing-function: cubic-bezier(0.11, 0.69, 0.66, 1.01); transition-delay: 700ms; transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale3d(1, 1, 1); opacity: 1; visibility: visible; transform-origin: 50% 50% 0px;">
          <span class="feature-icon icon-mobile color-green"></span>
          <div class="feature-text">
            <h4>{{ STRING.title4 }}</h4>
            <p>{{ STRING.content4 }}</p>
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
      STRING: window.TEMPLATE_CONTENT.services
    }
  }
}
</script>
