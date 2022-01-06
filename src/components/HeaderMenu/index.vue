<template>
  <el-header class="bg-green-300 flex items-center text-white">
    <nav aria-label="Global" class="max-w-container mx-auto w-full">
      <div class="flex items-center  flex-wrap sm:flex-nowrap">
        <a href="/components" class="flex-none">
          <span class="text-2xl">Learn vue</span>
        </a>
        <div class="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center">
          <span class="hover:text-gray-900">
            <el-input v-model="globalVar" placeholder="placeholder"></el-input>
          </span>
          <a href="/pricing" class="mx-6 hover:text-gray-900">Pricing &amp; <abbr
              title="frequently asked questions">FAQ</abbr></a>
          <div class="group border-l pl-6 border-gray-200 hover:text-teal-600 flex items-center">
            <div class="mr-1 inline-block">admin</div>
            <el-button type="primary" icon="el-icon-user" circle></el-button>
            <ul class="absolute bg-yellow-100 rounded top-12 hidden z-10">
              <li class="px-6 py-1 border-dashed hover:bg-yellow-300">Profile</li>
              <li class="px-6 py-1 border-dashed hover:bg-yellow-300" @click="logout">Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </el-header>
</template>

<script>
import router from "@/router";
import {inject} from "vue";

export default {
  name: "HeaderMenu",
  setup() {

    const globalVar = inject('myGlobalVariable');

    function logout() {
      localStorage.clear();
      router.replace('/login');
    }

    return {
      globalVar,
      logout
    }
  }
}
</script>


<style scoped lang="scss">

.group:hover {
  ul {
    display: block;
  }
}
</style>
