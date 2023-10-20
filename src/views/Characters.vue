<script setup>
import axios from 'axios'
import { ref } from 'vue';
import { accessToMarvelAPI } from '@/helpers.js';

const access = accessToMarvelAPI();
let data = ref(null);
let isLoading = ref(true);


getCharacters();

async function getCharacters() {
  try {
    const parameters = `?limit=30&apikey=${access.public_key}&ts=${access.timestamp}&hash=${access.hash}`;
    const response = await axios.get(`https://gateway.marvel.com/v1/public/characters${parameters}`)
    isLoading.value = false;
        
    data.value = response.data.data.results;
    
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

</script>

<template>
    <h3 v-if="isLoading">Carregando...</h3>
    <article v-else class="row">
        <div id="background-character-post" class="col" v-for="character in data" :key="character.id">
          <img :src="character.thumbnail.path + '.' + character.thumbnail.extension" :alt="character.name + 'thumbnail'">
          <RouterLink :to="'/characters/' + character.id">{{ character.name }}</RouterLink>
        </div>
    </article>
</template>

<style lang="scss" scoped>
    :is(article, h3){
        margin: 0;
        padding: 0 80px 0;
        width: 100%;
        overflow: hidden;
        gap: 32px;
        #background-character-post{
          padding: 0;
          display: flex;
          flex-direction: column;
          row-gap: 16px;
          max-width:  186.67px;
          max-height: 218px;
          img{
            border-radius: 4px;
            max-height: 183px;
            object-fit: cover;
          }
          a{
            color: black;
            text-transform: uppercase;
            font-size: 16px;
            font-family: 'Roboto', 'sans serif';
            font-weight: 700;
            height: 19px;
          }
        }
    }
</style>