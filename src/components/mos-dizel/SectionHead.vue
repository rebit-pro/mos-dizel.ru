<template>
  <span class="mark" aria-hidden="true"></span>
  <h2>{{ title }}</h2>
  <p v-if="sub || $slots.default" class="sub">
    <slot>{{ sub }}</slot>
  </p>
</template>

<script setup lang="ts">
defineProps<{ title: string; sub?: string }>();
</script>
