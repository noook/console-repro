<template>
  <router-link :to="route" class="project-list-item">
    <div class="head">
      <span class="font-medium">{{ project.projectType.name }}</span>
      <VDropdown>
        <button @click.prevent tabindex="-1">
          <i class="icon-more-hor" />
        </button>
        <template #popper>
          supprimer
        </template>
      </VDropdown>
    </div>
    <img :src="projectIcons[project.projectType.icon]" alt="">
    <h4 class="font-semibold">
      {{ project.name }}
    </h4>
    <small>{{ project.environments.length }} environments</small>
  </router-link>
</template>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';
import type { ProjectConstructorParams } from '@/models/Project';
import Project from '@/models/Project';
import nluIcon from '@/assets/icons/nlu.svg';
import mailIcon from '@/assets/icons/mail.svg';
import docucheckerIcon from '@/assets/icons/docuchecker.svg';

const props = defineProps<{
  project: Project;
}>();

const projectIcons: Record<ProjectConstructorParams['projectType']['icon'], string> = {
  nlu: nluIcon,
  mail: mailIcon,
  docuchecker: docucheckerIcon,
};

const route: RouteLocationRaw = {
  name: 'project',
  params: {
    projectId: props.project.id,
    envId: props.project.lastEnv ?? props.project.environments[0].id,
  },
};

</script>

<style lang="scss" scoped>
.project-list-item {
  @apply rounded border-t-4 border-brand-orange;
  @apply shadow-E100 py-2 px-6;
  @apply flex flex-col items-center;

  .head {
    @apply flex items-center justify-between self-stretch;
  }

  > img {
    @apply h-20 my-4;
  }

  h4, small {
    @apply text-center;
  }
}
</style>
