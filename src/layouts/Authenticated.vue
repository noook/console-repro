<template>
  <div class="authenticated">
    <Navbar />
    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue';
</script>

<style lang="scss" scoped>
.authenticated {
  @apply h-screen flex flex-col;

  .view {
    @apply flex-grow overflow-y-auto;
  }
}
</style>
