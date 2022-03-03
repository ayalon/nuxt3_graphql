<template>
  <div>
    <Title>List of Films</Title>
    <h1 class="title">List of Films</h1>
    <ul>
      <li v-for="film in films" :key="film.id">
        <nuxt-link :to="'/film/' + film.id">{{ film.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {useQuery} from 'villus';
import { AllFilmsDocument } from "@/graphql/operations";

const {data } = await useAsyncData('films', async () => {
  const { data } = await useQuery({
    query: AllFilmsDocument,
  });
  return data.value;
})

const films = data.value.allFilms.films

</script>
