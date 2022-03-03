import {createClient} from 'villus';

const client = createClient({
    url: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
});

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(client)
})
