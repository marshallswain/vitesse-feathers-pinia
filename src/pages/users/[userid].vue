<template>
  <div class="m-auto">
    <div class="w-full">
      <router-link class="btn btn-ghost" to="/users/">
        <feather-arrow-left /> Back to Users
      </router-link>
    </div>

    <div v-if="user">
      <UserForm :user="user" />
      <div class="my-14">
        The <span class="kbd">UserForm.vue</span> on this page binds to the clone and uses the <span class="kbd">handleClones</span> utility for saving and committing to the original record.
      </div>
    </div>

    <div v-else>
      User not found
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGet } from 'feathers-pinia'
import { User, useUserStore } from '~/stores/user'

const userStore = useUserStore()

const props = defineProps({ userid: String })

const id = computed(() => props.userid || null)
const { item: user } = useGet({ id, model: User })
</script>
