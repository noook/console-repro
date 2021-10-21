<template>
  <div class="login">
    <h1>Se connecter</h1>
    <form id="form-login" @submit.prevent="onSubmit">
      <section id="sso">
        SSO
      </section>
      <section id="login">
        <p>Connectez-vous avec votre adresse email ou votre nom d'utilisateur</p>
        <label for="username">Nom:</label>
        <input v-model="credentials.username" type="text" id="username">
        <label for="password">Mot de passe:</label>
        <input v-model="credentials.password" type="password" id="password">
      </section>
    </form>
    <GButton
      class="ml-auto"
      primary
      form="form-login"
      type="submit">
      Se connecter
    </GButton>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import useAuthStore from '@/store/auth';
import { login } from '@/api/auth';

const router = useRouter();

const credentials = reactive({
  username: '',
  password: '',
});

const authStore = useAuthStore();

async function onSubmit() {
  const { token } = await login(credentials);
  authStore.login(token);
  router.replace({ name: 'projects' });
}
</script>

<style lang="scss" scoped>
.login {
  @apply min-w-300px max-w-65/100;
  @apply shadow-E200 my-16 mx-auto;
  @apply p-8;

  form {
    @apply grid grid-cols-2 mb-4;
  }

  p {
    @apply mb-2;
  }

  label {
    @apply mb-1;
  }

  input {
    @apply mb-4;
  }

  section {
    &#login {
      @apply pl-8;
      @apply border-l border-[#e1e9ed];
      @apply flex flex-col;
    }
  }
}
</style>
