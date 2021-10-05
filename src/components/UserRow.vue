<template>
  <tr>
    <th> {{ clones.user.id }} </th>
    <td>
      <input v-model="clones.user.name" type="text" class="input input-bordered" @input="() => save('name')">
    </td>
    <td>
      <div class="inline-flex">
        <router-link :to="`/users/${user.id}`" class="btn btn-sm">
          <feather-external-link class="mr-1" /> Edit in separate page
        </router-link>

        <button type="button" class="btn btn-error btn-sm" @click="() => user.remove()">
          Delete
        </button>
      </div>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { handleClones } from 'feathers-pinia'
import { debounce } from 'lodash'

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
})

const { clones, saveHandlers } = handleClones(props)
const { save_user } = saveHandlers
const save = debounce(save_user, 500)
</script>
