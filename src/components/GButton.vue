<template>
  <button
    class="g-ui"
    type="button"
    @click="$emit('click', $event)">
    <span v-if="$slots.before" class="before-slot">
      <slot name="before" />
    </span>
    <span v-if="$slots.after" class="after-slot">
      <slot name="after" />
    </span>
    <span
      v-if="$slots.default"
      class="default-slot">
      <slot name="default" />
    </span>
  </button>
</template>

<script lang="ts" setup>
defineEmits<{(e: 'click', event: MouseEvent): void}>();
</script>

<style lang="scss" scoped>
button.g-ui {
  @apply flex items-center;
  @apply rounded border border-solid border-transparent outline-none;
  @apply duration-150;

  @apply h-10 font-normal;

  &[sm] {
    @apply h-8 text-xs font-normal;
  }
  &[lg] {
    @apply h-12 text-base font-semibold;
  }

  .default-slot {
    @apply mx-6 order-2;
  }

  .default-slot, .before-slot, .after-slot {
    @apply flex items-center;
  }

  .before-slot {
    @apply ml-3 order-1;

    ~ .default-slot {
      @apply ml-2;
    }
  }

  .after-slot {
    @apply mr-3 order-3;

    ~ .default-slot {
      @apply mr-2;
    }
  }
}

button.g-ui {
  &[primary] {
    @apply bg-primary text-white;

    &:hover {
      @apply bg-primary;
    }
  }
}
</style>
