<template>
  <Safezone>
    <div class="projects-list-view">
      <h1>Mes projets</h1>
      <div class="projects-list">
        <ProjectListItem
          v-for="project in projects"
          :key="project.id"
          :project="project" />
      </div>
    </div>
  </Safezone>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getProjects } from '@/api/projects';
import Safezone from '@/layouts/Safezone.vue';
import Project from '@/models/Project';
import ProjectListItem from '@/components/Projects/ProjectListItem.vue';

const projects = ref<Project[]>([]);

async function init() {
  projects.value = await getProjects();
}

init();
</script>

<style lang="scss" scoped>
.projects-list-view {
  .projects-list {
    @apply grid grid-cols-2 xl:grid-cols-3 gap-6;
    @apply my-8;
  }
}
</style>
