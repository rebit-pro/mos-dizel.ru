<template>
  <svg class="i" viewBox="0 0 24 24" :style="{ width: `${size}px`, height: `${size}px` }" aria-hidden="true">
    <path :d="paths[name]" />
  </svg>
</template>

<script setup lang="ts">
/** Линейные иконки в стиле Tabler (stroke 1.6, сетка 24) — единый набор лендинга. */
export type GlyphName =
  | 'truck'
  | 'boiler'
  | 'bolt'
  | 'crane'
  | 'home'
  | 'tractor'
  | 'anchor'
  | 'service'
  | 'passport'
  | 'flask'
  | 'seal'
  | 'meter'
  | 'gps'
  | 'storage'
  | 'phone'
  | 'burger'
  | 'check'
  | 'warn';

withDefaults(defineProps<{ name: GlyphName; size?: number }>(), { size: 22 });

const paths: Record<GlyphName, string> = {
  truck: 'M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0M15 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0M5 17H3V6h10v11M13 9h4l3 3v5h-2',
  boiler: 'M12 3c1.5 3 4.5 5 4.5 9a4.5 4.5 0 0 1-9 0c0-1.5.6-2.7 1.5-3.6.3 1.3 1 2.1 2 2.1 0-3 .5-5.5 1-7.5z',
  bolt: 'M13 2L4 14h6l-1 8 9-12h-6l1-8z',
  crane: 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6M9 10h.01M15 10h.01',
  home: 'M3 11l9-8 9 8v10a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z',
  tractor: 'M4 17a3 3 0 1 0 6 0a3 3 0 1 0-6 0M16 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 14V8h6l2 6M13 8l1-4h3v10M10 14h6',
  anchor: 'M12 3a2 2 0 1 0 0 4a2 2 0 0 0 0-4M12 7v14M5 13H3a9 9 0 0 0 18 0h-2M9 21h6',
  service: 'M5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0M15 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0M5 17H3v-6l2-5h11l3 5h2v6h-2M3 11h18',
  passport: 'M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3zM9 12l2 2 4-4',
  flask: 'M9 3h6M10 3v6L4.5 19a1.5 1.5 0 0 0 1.3 2h12.4a1.5 1.5 0 0 0 1.3-2L14 9V3M7 15h10',
  seal: 'M6 11V8a6 6 0 0 1 12 0v3M5 11h14v10H5zM12 15v2',
  meter: 'M4 14a8 8 0 1 1 16 0M12 14l4-4M12 14h.01M6 20h12',
  gps: 'M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11zM12 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0',
  storage: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2',
  burger: 'M4 7h16M4 12h16M4 17h16',
  check: 'M5 12l5 5L20 7',
  warn: 'M12 8v5M12 16h.01M12 3l9 16H3z'
};
</script>
