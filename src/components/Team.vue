<style>

</style>

<template>
<div id="team" class="section-block replicable-content bkg-grey-ultralight">
  <div class="row">
    <div class="column width-8 offset-2 center">
      <h2 class="mb-20">{{ STRING.title }}</h2>
      <p class="lead mb-80">{{ STRING.description }}</p>
    </div>
  </div>
  <div class="row flex">
    <div v-for="(item, index) in STRING.content" :key="index" class="column width-4">
      <div class="feature-column">
        <span class="title-large weight-light font-alt-1 color-gradient-royal-garden">{{ item.number }}</span>
        <h4 class="mb-30">{{ item.description }}</h4>
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      STRING: window.TEMPLATE_CONTENT.ourTeam
    }
  }
}
</script>
