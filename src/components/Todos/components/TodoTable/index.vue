<template>
  <el-table
      :data="filteredTodoItems"
      style="width: 100%"
      :row-key="row => row.id"
      ref="multipleTable"
      @selection-change="handleSelectionChange"
      :stripe="true"
  >
    <el-table-column label="状态" type="selection" prop="done" :reserve-selection="true"/>
    <el-table-column label="想要做的事情">
      <template #default="scope">
        <el-input v-if="scope.row.editMode" v-model="scope.row.name" @blur="updateTodo($event, scope.row)"
                  v-focus></el-input>
        <el-tag v-if="!scope.row.editMode" size="medium" :class="scope.row.done ? 'line-through': ''">{{
            scope.row.name
          }}
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column>
      <!--      <template #header>-->
      <!--        <el-input v-model="search" size="mini" placeholder="Type to search"/>-->
      <!--      </template>-->
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

import {computed, nextTick, onMounted, ref, toRaw, watch, watchEffect, watchPostEffect} from "vue";
import {Todo} from "@/models/TodoList";

interface Props {
  searchText: string;
  todos?: Todo[]
}

const props = withDefaults(defineProps<Props>(), {
  searchText: '',
  todos: () => []
});

const emit = defineEmits(['updateTodo', 'deleteTodo', 'updateTodoSelection']);

const search = ref('');

const filteredTodoItems = computed(() =>
    props.todos.filter(
        (data) => {
          return !props.searchText || data.name.toLowerCase().includes(props.searchText.toLowerCase());
        }
    ))
console.log(`filteredTodoItems`, filteredTodoItems);
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

const multipleTable = ref('multipleTable')

onMounted(() => {
  let initialSelectionIds = props.todos.filter(td => td.done).map(td => td.id);
  // initialSelectionIds = ['6H7RjqT8GbC98rmouAHeN', 'QMMzrF-WbMBdPC4De6V-R']
  console.log('initialSelectionIds', initialSelectionIds);
  nextTick(() => {
    console.log('nextTick');
    props.todos.forEach(row => {
      if (initialSelectionIds.includes(row.id)) {
        // ToggleRowSelection will trigger the @selection-change handler
        // Above we need to extract initialSelectionIds first, rather than: if (row.done === true)
        // Because the sequence is synchronized like forEach 1st row -> selection-change handler -> back to 2nd row logic (Logic in the selection change handler will have side effect)
        multipleTable.value.toggleRowSelection(row, true);
      }
    });
    console.log('watchEffect');

  })

})

</script>

<style scoped>

</style>
