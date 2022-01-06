<template>
  <div v-for="comment in comments" :key="comment.id">Child {{ comment.id }}</div>
</template>

<script>
export default {
  name: "Child",
  props: ['comments'],
  setup(props, ctx) {
    console.log('普通子组件 Child setup只会执行一次');
    const comments = props.comments;
    return {
      comments
    }
  }
}

</script>

<style scoped>

</style>