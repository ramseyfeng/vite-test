<template>
  <div class="flex py-6">
    <el-button type="danger" size="medium" @click="deleteAllCompleted">删除已经完成</el-button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  setup(props, ctx) {
    function deleteAllCompleted() {
      ctx.emit('deleteDones');
    }
    return {
      deleteAllCompleted
    }
  }
}
</script>

<style scoped>

</style>