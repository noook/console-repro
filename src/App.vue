<template>
  <router-view id="app" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'v-tooltip/dist/v-tooltip.css';

export default defineComponent({
  name: 'App',
});
</script>

<style src="@/assets/styles.scss" lang="scss"></style>
