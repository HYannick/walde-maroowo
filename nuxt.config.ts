// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';
export default defineNuxtConfig({
  modules: ['@nuxtjs/prismic'],
  prismic: {endpoint: 'walde-maroowo'},
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Waldè Maroowo'
    },
  },
  css: [
    '~/assets/styles/main.scss',
    'splitting/dist/splitting.css',
    'splitting/dist/splitting-cells.css'
  ],
  router: {
    extendRoutes(routes: any) {
      routes.push({
        name: 'actions',
        path: '/actions/:uid',
        component: '@/actions/uid.vue',
      });
    },
  },
  routeRules: {
    '/': {ssr: false},
    '/story': {ssr: false},
    '/actions': {ssr: false},
    '/actions/:uid': {ssr:false},
    '/contact': {ssr: false},
  },
  vite: {
    plugins: [
      svgLoader(), // https://github.com/jpkleemans/vite-svg-loader#readme,
    ],
  },
})
