<template>
  <div id="app">
    <navbar />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/common/Navbar.vue';
import {Vue, Component} from 'vue-property-decorator';

@Component({
  components: {
    Navbar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
  @import '@/scss/app.scss';
  #app{
    height:100%;
  }
</style>
