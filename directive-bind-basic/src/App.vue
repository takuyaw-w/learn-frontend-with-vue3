<script setup lang="ts">
import { ref } from "vue";
const url = ref("https://vuejs.org/");
</script>

<template>
  <p><a v-bind:href="url" target="_blank">a</a></p>
  <p><a :href="url" target="_blank">b</a></p>
  <p><a v-bind:href="url + 'guide/introduction.html'" target="_blank">c</a></p>
</template>
