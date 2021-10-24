<template>
  <div class="flex py-6">
    <el-button type="danger" size="medium" @click="deleteAllCompleted">删除已经完成 {{todosLength}}</el-button>
  </div>
</template>

<script lang="ts">
import {inject} from "vue";

export default {
  name: "TodoFooter",
  setup(props, ctx) {
    /**
     * points: defineEmits那些方法只在setup syntax里才能使用
     */
   function deleteAllCompleted() {
      ctx.emit('deleteDones');
    }

    const todosLength = inject<{
      todosLength: number;
    }>('todosState')!.todosLength

    return {
      deleteAllCompleted,
      todosLength
    }
  }
}
</script>

<style scoped>

</style>