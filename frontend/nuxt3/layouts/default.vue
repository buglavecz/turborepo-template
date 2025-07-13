<template>
  <div>
    nuxt 3 layout: {{ myRef }}
    <test-welcome></test-welcome>
    <slot />
  </div>
</template>

<script lang="ts">
import TestWelcome from 'n3-components/TestWelcome.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    TestWelcome
  },
  setup() {
    const myRef = ref('123')
    return { myRef }
  }
})
</script>

<style scoped>

</style>