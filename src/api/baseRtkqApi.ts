import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Storage } from '@capacitor/storage'

// todo: add upload endpoints here
const UPLOAD_ENDPOINTS = ['uploadFiles']

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://hojoapidev.catholicdesign.org',
    prepareHeaders: async (headers, { getState, endpoint }) => {
      // We don't set Content-Type with upload requests. Let the client decides the headers properly. (https://stackoverflow.com/a/39281156/11869677)
      if (UPLOAD_ENDPOINTS.includes(endpoint)) {
        return headers
      }
      const { value } = await Storage.get({ key: 'hojoToken' })
      if (value) {
        headers.set('authorization', `Bearer ${value}`)
      }

      headers.set('Content-Type', 'application/json')
      return headers
    },
  }),
  endpoints: () => ({}),
})
