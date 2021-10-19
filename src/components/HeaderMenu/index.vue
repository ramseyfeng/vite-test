<template>
  <el-header class="bg-green-300 flex items-center">
    <nav aria-label="Global" class="max-w-container mx-auto w-full">
      <div class="flex items-center  flex-wrap sm:flex-nowrap">
        <a href="/components" class="flex-none text-gray-900">
          <span class="text-2xl">Learn vue</span>
        </a>
        <div class="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center">
          <a href="/documentation" class="hover:text-gray-900">
            <abbr class="sm:hidden" title="Documentation">Docs</abbr>
            <span class="hidden sm:inline">Documentation</span>
          </a>
          <a href="/pricing" class="mx-6 hover:text-gray-900">Pricing &amp; <abbr
              title="frequently asked questions">FAQ</abbr></a>
          <div class="group border-l pl-6 border-gray-200 hover:text-teal-600 flex items-center">
            <div class="mr-1 inline-block">admin</div>
            <el-button @click="clickButton" type="primary" icon="el-icon-user" circle></el-button>
            <ul class="absolute bg-yellow-100 rounded top-12 hidden">
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
export default {
  data(){
    return{
      locations:[
        {
          address:'Mall of lahore',
          disabled: true
        },
        {
          address: 'The Post Office',
          disabled: true
        },
        {
          address: 'Mall of Dubai',
          disabled: true
        }
      ],
      address: '',
      editedAddress: null
    }
  },
  methods:{
    btnEdit(index){
      this.locations[index].disabled = !this.locations[index].disabled
      this.editedAddress = this.locations[index].address
    },
    btnUpdate(index){
      this.locations[index].address = this.editedAddress;
      this.locations[index].disabled = !this.locations[index].disabled
    },
    btnDelete(index){
      this.locations.splice(index , 1)
    },
    addBtn(){
      let newAddress = {
        address: this.address,
        disabled: true
      }
      this.locations.push(newAddress)
      this.address = '';
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
