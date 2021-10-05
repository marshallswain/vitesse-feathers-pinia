import { acceptHMRUpdate } from 'pinia'
import memory from 'feathers-memory'
// import { syncWithStorage } from 'feathers-pinia'
import { api } from '../feathers'
import { defineStore, BaseModel } from './pinia.store'

export class User extends BaseModel {}

const servicePath = 'users'

// Remove feathers-memory when the app is ready to connect to a real server.
api.use(servicePath, memory({
  paginate: { default: 10, max: 200 },
}))

export const useUserStore = defineStore({ servicePath, Model: User })

function log(ctx: any) {
  // eslint-disable-next-line no-console
  console.log('saved', ctx.data)
}

api.service(servicePath).hooks({
  before: {
    create: [log],
    patch: [log],
  },
})

// const userStore = useUserStore(pinia)

// syncWithStorage(userStore, ['itemsById', 'tempsById'])

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))
