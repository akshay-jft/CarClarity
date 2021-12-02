<template>
  <div class="home-body">
    <Header /> 
    <Grid class="mt-5" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Grid from '@/components/Grid.vue'
  export default {
    components: {
      Header,
      Grid
    },
  }
</script>

<style scoped>
.home-body{
  width: 800px;
  padding: 50px;
  margin: auto;
  padding-top: 50px;
}
</style>