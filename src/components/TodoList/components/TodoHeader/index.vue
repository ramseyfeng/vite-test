<template>
  <div class="flex">
    <div class="w-1/3">
      <el-input v-model="newTodo.name"></el-input>
    </div>
    <el-button type="primary" @click="$emit('addTodo', newTodo.name)">添加</el-button>
  </div>
</template>

<script setup lang="ts">
  import {reactive} from "vue";

  defineEmits(['addTodo'])

  let newTodo = reactive({
    name: null
  });
</script>

<style scoped>

</style>