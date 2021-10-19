<template>
  <el-table
      :data="filteredTodoItems"
      style="width: 100%"
      :row-key="row => row.id"
      ref="multipleTable"
      @selection-change="handleSelectionChange"
      :stripe="true"
  >
    <el-table-column label="状态" type="selection" :reserve-selection="true"/>
    <el-table-column label="想要做的事情">
      <template #default="scope">
        <el-input v-if="scope.row.editMode" v-model="scope.row.name" @blur="updateTodo($event, scope.row)"
                  v-focus></el-input>
        <el-tag v-if="!scope.row.editMode" size="medium" :class="scope.row.done ? 'line-through': ''">{{ scope.row.name }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column>
      <template #header>
        <el-input v-model="search" size="mini" placeholder="Type to search"/>
      </template>
      <template #default="scope">
        <div class="flex justify-end">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >Edit
          </el-button
          >
          <el-button
              size="mini"
              type="danger"
              @click="$emit('deleteTodo', scope.row.id)"
          >Delete
          </el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>
<script setup lang="ts">

import {computed, onMounted, ref, toRaw} from "vue";
import {Todo} from "@/models/TodoList";

interface Props {
  todos?: Todo[]
}

const props = withDefaults(defineProps<Props>(), {
  todos: () => []
});

const emit = defineEmits(['updateTodo', 'deleteTodo', 'updateTodoSelection']);

const search = ref('');

const filteredTodoItems = computed(() =>
    props.todos.filter(
        (data) =>
            !search.value || data.name.toLowerCase().includes(search.value.toLowerCase())
    ))

let multipleSelection = [];

function handleEdit(index, row) {
  row.editMode = true;
}

function updateTodo(event, row) {
  emit('updateTodo', row.id, event.target.value);
}

function handleSelectionChange(selection) {
  const rawSelection = toRaw(selection)
  console.log('handleSelectionChange');
  multipleSelection = rawSelection;
  emit('updateTodoSelection', rawSelection)
}

</script>

<style scoped>

</style>
