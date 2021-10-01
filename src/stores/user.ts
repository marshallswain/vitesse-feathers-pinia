import { acceptHMRUpdate } from 'pinia'
import { api } from '../feathers'
import { defineStore, BaseModel } from './pinia.store'

export class User extends BaseModel {}

const servicePath = 'users'
export const useUserStore = defineStore({ servicePath, Model: User })

api.service(servicePath).hooks({})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))
