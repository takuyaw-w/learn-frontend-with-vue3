<script setup lang="ts">
import { ref } from "vue";

const now = new Date();
const nowStr = now.toLocaleTimeString();
let timeStr = nowStr;
const timeStrRef = ref(nowStr);
const changeTime = (): void => {
  const newTime = new Date();
  const newTimeStr = newTime.toLocaleTimeString();
  timeStr = newTimeStr;
  timeStrRef.value = newTimeStr;
};

setInterval(changeTime, 1000);
</script>

<template>
  <p>現在時刻： {{ timeStr }}</p>
  <p>現在時刻(ref): {{ timeStrRef }}</p>
</template>
