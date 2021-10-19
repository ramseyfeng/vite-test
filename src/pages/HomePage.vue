<template>
  <div class="h-full flex flex-col">
    <HeaderMenu></HeaderMenu>
    <el-container>
      <el-aside width="200px">
        <el-menu router
                 active-text-color="#ffd04b"
                 background-color="#545c64"
                 class="el-menu-vertical-demo h-full"
                 default-active="2"
                 text-color="#fff"
        >
          <el-sub-menu index="1">
            <template #title>
              <i class="el-icon-location"></i>
              <span>Vue samples</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item :index="'/home/samples/data-bindings'">Data Bindings</el-menu-item>
              <el-menu-item :index="'/home/samples/todos'">Todos</el-menu-item>
              <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HeaderMenu from "../components/HeaderMenu";

export default {
  name: "HomePage",
  components: {HeaderMenu}
}
</script>

<style scoped>

</style>