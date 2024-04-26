<template>
  <td class="whitespace-nowrap px-6 py-4">
    <input 
    class="w-full"
    type="text"
    :value="value"
    @input="event => $emit('valueChange', (event.target as HTMLInputElement).value)">
  </td>
</template>

<script lang="ts">
  export default {
    name: 'TableColumnInput',
    props: {
      value: String
    }
  }
</script>

<style scoped>
  input {
    outline: none;
    border: none;
  }
</style>