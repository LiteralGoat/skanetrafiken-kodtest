<template>
  <table
    class="min-w-full text-left text-sm font-light text-surface dark:text-white">
    <TableHead />
    <tbody>
      <tr
        class="border-b border-neutral-200 dark:border-white/10"
        v-for="(item, index) in list.list"
        :key="index"
      >
        <td class="whitespace-nowrap px-6 py-4 font-medium">{{ index + 1 }}</td>
        <TableColumnInput :value="item.name" @valueChange="payload => list.changeListItem('name', index, payload)" />
        <TableColumnInput :value="item.city" @valueChange="payload => list.changeListItem('city', index, payload)" />
        <TableColumnInput :value="item.line" @valueChange="payload => list.changeListItem('line', index, payload)" />
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
  import { useListStore } from '../stores/list'
  import TableHead from '../components/TableHead.vue';
  import TableColumnInput from '../components/TableColumnInput.vue'
  const list = useListStore()
</script>