<template>
  <Safezone>
    <div class="project">
      <h1>Projet</h1>
      <pre v-if="project">{{ JSON.stringify(project, null, 2) }}</pre>
      <pre v-if="project">{{ JSON.stringify(project, null, 2) }}</pre>
    </div>
  </Safezone>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import useProjectStore from '@/store/project';
import { getProject } from '@/api/projects';
import Safezone from '@/layouts/Safezone.vue';

const props = defineProps<{
  projectId: number;
  envId: number;
}>();

const projectStore = useProjectStore();
const { project } = storeToRefs(projectStore);

async function init() {
  if (projectStore.isCurrentProject(props.projectId) === false) {
    projectStore.setProject(await getProject(props.projectId));
  }
}

init();
</script>

<style lang="scss" scoped>
.project {

}
</style>
