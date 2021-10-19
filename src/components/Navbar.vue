<template>
  <div class="navbar">
    <img src="@/assets/golem.png" alt="Golem">
    <ul class="links">
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
  @apply flex justify-between items-center;

  > img {
    @apply h-8;
  }
}
</style>
