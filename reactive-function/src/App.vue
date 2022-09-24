<script setup lang="ts">
import { reactive, computed } from "vue";

const data = reactive({
  PI: 3.14,
  radius: Math.round(Math.random() * 10),
});
const area = computed((): number => {
  return data.radius * data.radius * data.PI;
});
setInterval(() => {
  data.radius = Math.round(Math.random() * 10);
}, 1000);
</script>

<template>
  <p>{{ data.radius }} * {{ data.radius }} * {{ data.PI }} = {{ area }}</p>
</template>
