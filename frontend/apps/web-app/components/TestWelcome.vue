<template>
<div style="background: blue;">
  <h2 style="font-size: 38px; padding-block 32px: ">hello from nuxt <span style="color: red;">{{ nuxtVer }}</span>!</h2>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const nuxtVer = ref('3');
</script>

<style scoped>

</style>