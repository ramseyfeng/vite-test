<template>
  Child:
  <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)"
      class="border border-solid border-green-600"
  >
</template>

<script>
export default {
  name: "MyComponent",

  setup() {

  },

  props: {
    title: String
  },
  emits: ['update:title'],
}
</script>

<style scoped>

</style>