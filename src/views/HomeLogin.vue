<template>
  <div class="landing-page">
    <div class="home-animation">
      <HomeAnimation/>
    </div>
    <div class="home-login">
      <HomeHandler/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import HomeAnimation from '@/components/HomeLogin/HomeAnimation.vue';
import HomeHandler from "@/components/HomeLogin/HomeHandler.vue";

export default defineComponent({
  name: 'HomeLogin',
  components: {
    HomeHandler,
    HomeAnimation
  }
})
</script>

<style lang="scss" scoped>
.landing-page{
  @apply w-screen h-full flex flex-row bg-white;

  .home-animation, .home-login{
    @apply md:w-1/2 w-screen h-screen;
  }

}

</style>
