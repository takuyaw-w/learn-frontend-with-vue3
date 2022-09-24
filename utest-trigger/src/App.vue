<script setup lang="ts">
import { ref } from "vue";
const isVisible = ref(false);
const onShowButtonClick = () => {
  isVisible.value = true;
};
</script>

<template>
  <p>
    <button data-testid="showButton" @click="onShowButtonClick">表示</button>
  </p>
  <p v-if="isVisible" data-testid="invisible">表示されました</p>
</template>
