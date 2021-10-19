<template>
  <Safezone>
    <div class="projects-list">
      <h1>Mes projets</h1>
    </div>
  </Safezone>
</template>

<script lang="ts" setup>
import { getProjects } from '@/api/projects';
import Safezone from '@/layouts/Safezone.vue';

getProjects();
</script>

<style lang="scss" scoped>
.projects-list {

}
</style>
