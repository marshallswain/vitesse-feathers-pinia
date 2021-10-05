<template>
  <div class="flex flex-row items-center justify-center">
    <div class="form-control">
      <label class="label">
        <span class="label-text">Quick Create User</span>
      </label>
      <div class="relative">
        <input
          v-model="name"
          type="text"
          placeholder="Enter the User's Name"
          class="w-full pr-16 input input-primary input-bordered w-84"
          @keyup.enter="createUser"
        />
        <button
          class="absolute top-0 right-0 rounded-l-none btn btn-primary"
          @click="createUser"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()
const name = ref('')

function createUser() {
  new userStore.Model({ name: name.value }).save()
  name.value = ''
}
</script>
