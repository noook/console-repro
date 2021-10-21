<template>
  <div class="navbar">
    <router-link :to="{ name: 'projects' }">
      <img class="logo" src="@/assets/golem-logo.svg" alt="Golem">
    </router-link>
    <ul class="links">
      <li>
        <router-link :to="{ name: 'projects' }">
          Projets
        </router-link>
      </li>
      <li class="flex items-center">
        <VDropdown>
          <button>
            <span class="mr-2">{{ authStore.user?.username }}</span>
            <i class="icon-chevron-down" />
          </button>
          <template #popper>
            <ul>
              <li>
                <button @click="logout">
                  Se déconnecter
                </button>
              </li>
            </ul>
          </template>
        </VDropdown>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import useAuthStore from '@/store/auth';

const authStore = useAuthStore();
const router = useRouter();

function logout() {
  authStore.logout();
  router.push({ name: 'login' });
}
</script>

<style lang="scss" scoped>
.navbar {
  @apply h-12 px-6 bg-primary text-white;
  @apply flex justify-between items-center flex-shrink-0;

  .logo {
    @apply h-6;
  }

  ul.links {
    @apply flex items-center;

    li {
      @apply ml-8;
    }
  }
}
</style>
