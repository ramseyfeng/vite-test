<template>
  <div>comments {{ comment.id }} + {{comment.name}}</div>
</template>

<script>
export default {
  name: "Comment",
  props: ['comment'],
  setup(props, ctx) {
    console.log('v-for 会重新来执行setup');
    const comment = props.comment;
    return {comment};
  }
}
</script>

<style scoped>

</style>