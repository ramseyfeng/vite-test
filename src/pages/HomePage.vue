<template>
  <div class="h-full flex flex-col">
    <HeaderMenu></HeaderMenu>
    <el-container>
      <el-aside width="200px">
        <SideBar></SideBar>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
  import SideBar from '@/components/SideBar/index.vue'
</script>
<style scoped>

</style>