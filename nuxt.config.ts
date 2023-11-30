// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  "app": {
    "head": {
      "viewport": "width=500, initial-scale=1",
      "title": "Nuxt3 House",
      "meta": [
          { "name": "description", "content": "Nuxt3 House" },
          { "property": "og:title", "content": "Nuxt3 House" },
          { "property": "og:url", "content": "http://localhost:3000/" },
          { "property": "og:description", "content": "Nuxt3 House" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css",
        },
      ],
    },
  },
  css: ['~/assets/css/main.css','element-plus/dist/index.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  "imports": {
    "dirs": ['stores']
  },
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    "token": '',
    "public": {
      "apiUrl": '',
    }
  },
  vite: {
    "server": {
      "proxy": {
        // '/VsWeb/api': {
        //   "target": 'https://www.vscinemas.com.tw/',
        //   "changeOrigin": true,
        // },
        '/lapi': {
          "target": 'http://127.0.0.1:8000/api',
          "changeOrigin": true,
          rewrite: (path) => path.replace(/^\/lapi/, ""),
        },
      },
    },
  },
  "nitro": {
    "plugins": ["~/server/dbConnect/index.js"],  //將 db 連線資訊給塞入 nitro 裡面，當 nuxt 啟動時就會先執行連線
  },
})
