<template>
  <div class="authenticated">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue';
</script>

<style lang="scss" scoped>
.authenticated {

}
</style>
