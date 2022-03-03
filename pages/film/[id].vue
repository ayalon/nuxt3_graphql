<template>
    <div>
      <Title>{{ film.title }}</Title>
      <h1 class="title">{{ film.title }}</h1>
      <p>Director: {{ film.director }}</p>
      <nuxt-link class="button is-text mt-6" to="/">To the list</nuxt-link>
    </div>
</template>

<script setup lang="ts">
import {useQuery} from 'villus';
import { FilmByIdDocument } from "@/graphql/operations";

const route = useRoute();

const {data } = await useAsyncData('films', async () => {
  const { data } = await useQuery({
    query: FilmByIdDocument,
    variables: {
      filmId: route.params.id.toString()
    }
  });
  return data.value;
})

const film = data.value.film

</script>
