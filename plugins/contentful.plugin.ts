import * as contentful from 'contentful'
export default defineNuxtPlugin(() => {
  return {
    provide: {
      createClient: () => contentful.createClient({
        space: 'gdv0unwpb4je',
        environment: 'master', // defaults to 'master' if not set
        accessToken: 'k_sjXhHxsVKCnP3rZJaQcpTE4gK9oa4TuAyysvOxyMk'
      })
    }
  }
})