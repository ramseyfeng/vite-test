<template>
  <el-menu router
           active-text-color="#ffd04b"
           background-color="#545c64"
           class="el-menu-vertical-demo h-full"
           default-active="/home/samples/todos"
           text-color="#fff"
  >
    <el-sub-menu v-for="(menu, index) in menus" :index="'group-'+index">
      <template #title>
        <i class="el-icon-location"></i>
        <span>{{ menu.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="menuItem in menu.children" :index="menuItem.link">{{ menuItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import {routes} from "@/constants/routes";

interface MenuItem {
  link?: string;
  label: string;
  groupTitle?: string;
  children?: MenuItem[]
}

const menus: MenuItem[] = [
  {
    label: 'Knowledge',
    groupTitle: 'Vue basics',
    children: [
      {
        link: routes.knowledge.DATA_BINDING,
        label: 'Data Bindings',
      },
      {
        link: routes.knowledge.V_MODEL,
        label: 'V-model',
      }
    ]
  },
  {
    label: 'Samples',
    groupTitle: 'Simple Samples',
    children: [
      {
        link: routes.samples.TODOS,
        label: 'Todos'
      }
    ]
  }
];
</script>

<style scoped>

</style>