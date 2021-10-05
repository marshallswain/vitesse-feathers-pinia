<template>
  <div class="m-auto">
    <div class="w-full">
      <router-link class="btn btn-ghost" to="/users/">
        <feather-arrow-left /> Back to Users
      </router-link>
    </div>

    Create User
    <UserForm :user="user" @saved="handleSaved" />

    <div class="my-14">
      After creating a user on this page, the <span class="kbd">UserForm.vue</span> sends the <span class="kbd">saved</span> event with the user.
      <br />We then redirect to the <span class="kbd">/users/[userid]</span> page
    </div>
  </div>
</template>

<script setup lang="ts">
import { models, useGet } from 'feathers-pinia'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'

const router = useRouter()
const userStore = useUserStore()

// You can find User on the userStore's `Model` property OR...
const User = userStore.Model

// Since we called `useUserStore()` the model is also available on the `models` object.
// const { User } = models.api

const user = new User()

function handleSaved(user: typeof User) {
  router.push(`/users/${user.id}`)
}
</script>
