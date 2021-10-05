<template>
  <div class="overflow-x-auto">
    <div class="text-left mb-2">
      <router-link to="/users/new" class="btn btn">
        <feather-plus class="mr-1" />
        Create User
      </router-link>
    </div>

    <div v-if="users.length" class="my-3">
      Data in this table will auto-update as you make changes. (Check the console)  See <span class="kbd">UserRow.vue</span> for implementation details.
      <table class="table w-full table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <UserRow v-for="user in users" :key="user.id" :user="user" />
        </tbody>
      </table>

      <UserQuickCreate />
    </div>

    <div v-else class="card bg-base-300">
      <div class="card-body">
        <div class="card-title">
          No Users
        </div>

        <router-link to="/users/new" class="btn w-48 m-auto">
          <feather-plus class="mr-1" />
          Create a User
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { models, useFind } from 'feathers-pinia'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()

// You can find User on the userStore's `Model` property OR...
const User = userStore.Model

// Since we called `useUserStore()` the model is also available on the `models` object.
// const { User } = models.api

const params = computed(() => {
  return { query: {} }
})
const { items: users } = useFind({ model: User, params })

</script>
