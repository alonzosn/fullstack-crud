<template>
  <HeaderNav title="Laravel/Vue"/>
  <router-view></router-view>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
export default {
  name: 'App',
  components: {
    HeaderNav
  }
}
</script>
<style>
</style>
