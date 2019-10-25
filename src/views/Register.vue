<template>
    <b-container class="d-flex mt-1 justify-content-center align-items-center">
        <transition name="slide" mode="out-in">
            <router-view />
        </transition>
    </b-container>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
export default class register extends Vue {
   
}
</script>

<style lang="scss" scoped>

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

</style>