<template>
  <default-layout>
    <nuxt />
  </default-layout>
</template>

<script lang="ts">
import DefaultLayout from 'n3-layouts/default.vue'
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    DefaultLayout
  }
})
</script>
