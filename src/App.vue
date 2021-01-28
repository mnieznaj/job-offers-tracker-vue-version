<template>
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </div>-->
<!--  <router-view/>-->
  <HomeLogin />
</template>

<script>
import { defineComponent } from 'vue'
import HomeLogin from "@/views/HomeLogin";

export default defineComponent({
  name: 'App',
  components: {HomeLogin},
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@500;600&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>
