<template>
  <div>
    <div class="flex flex-row items-center justify-center">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Name</span>
        </label>
        <div class="relative">
          <input
            v-model="clones.user.name"
            type="text"
            placeholder="Enter the User's Name"
            class="w-full pr-16 input input-primary input-bordered w-84"
            @keyup.enter="save"
          />
          <button
            class="absolute top-0 right-0 rounded-l-none btn btn-primary"
            @click="save"
          >
            Save
          </button>
        </div>
      </div>
    </div>

    <table class="mx-auto text-left">
      <tr>
        <td>Clone Name:</td>
        <td class="w-48">
          {{ clones.user.name }}
        </td>
      </tr>
      <tr>
        <td>Original Name:</td>
        <td class="w-48">
          {{ user.name }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { handleClones } from 'feathers-pinia'
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()

const props = defineProps({
  user: { type: Object, default: () => ({}) },
})
const emit = defineEmits(['saved'])

const { clones, saveHandlers } = handleClones(props)
const { save_user } = saveHandlers

async function save() {
  const { item } = await save_user('name')
  emit('saved', item)
}
</script>
