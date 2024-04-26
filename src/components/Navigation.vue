<template>
  <nav class="flex items-center justify-between flex-wrap p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <SkanetrafikenLogo />
    </div>
    <div class="block lg:hidden">
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <RouterLink class="block mt-4 lg:inline-block lg:mt-0 mr-4" to="/">Home</RouterLink>
        <RouterLink class="block mt-4 lg:inline-block lg:mt-0 mr-4" to="/table">Table</RouterLink>
      </div>
      <div>
        <a href="https://github.com/LiteralGoat/skanetrafiken-kodtest" target="_blank" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Github</a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
  import SkanetrafikenLogo from '../components/SkanetrafikenLogo.vue'
  export default {
    name: 'Navigation'
  }
</script>