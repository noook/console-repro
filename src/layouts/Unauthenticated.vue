<template>
  <div class="unauthenticated">
    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.unauthenticated {
  @apply h-screen flex flex-col;

  .view {
    @apply flex-grow overflow-y-auto;
  }
}
</style>
