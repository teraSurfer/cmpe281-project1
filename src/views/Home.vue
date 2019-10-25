<template>
  <section class="home">
    <banner />
  </section>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Banner from '@/components/home/Banner.vue';

@Component({
  components: {
    Banner
  }
})
export default class Home extends Vue {
}
</script>