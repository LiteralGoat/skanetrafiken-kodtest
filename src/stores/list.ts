import { defineStore } from 'pinia'
import { ref } from 'vue'

import { faker } from '@faker-js/faker';

type ListItem = {
  name: string,
  city: string,
  line: string,
}

export const useListStore = defineStore('list', () => {
  const seedObject = () => ({
    name: faker.person.fullName(),
    city: faker.location.city(),
    line: faker.number.bigInt({min: 1, max: 30}).toString()
  })
  const seedData = new Array(30).fill(undefined).map(seedObject)
  const list = ref(seedData)

  function changeListItem (key: keyof ListItem, index: number, value: string) {
    console.log('I am fired')
    list.value[index][key] = value
  }
  function addObject(object: ListItem) {
    list.value.push(object)
  }

  async function fetchList () {

  }

  return { list, changeListItem, addObject }
})
