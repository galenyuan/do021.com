<template>
  <div id="app">
    <header-bar />
    <navigation />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
import Navigation from './components/navigation'

export default {
  name: 'App',
  components: {
    HeaderBar: Header,
    Navigation
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }
</style>
