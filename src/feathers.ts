// src/feathers.ts
import feathers from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import auth from '@feathersjs/authentication-client'

// The variable name of each client becomes the alias for its server.
export const api = feathers()
  .configure(rest('http://localhost:3030').fetch(fetch))
  .configure(auth())
