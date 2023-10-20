<script setup>
import { ref, onMounted } from 'vue'
import { accessToMarvelAPI } from '@/helpers.js';
import axios from 'axios';
import { useRoute } from 'vue-router';


const access = accessToMarvelAPI();
const isLoading = ref(true);
const route = useRoute();


let character = ref(null);

const emit = defineEmits(['characterName'])

const emitCustomEvent = () => {
  emit('characterName', 'abc123');
};

onMounted(() => {
    emitCustomEvent();
    getSpecificCharacter();
})

async function getSpecificCharacter(){
    const parameters = `?apikey=${access.public_key}&ts=${access.timestamp}&hash=${access.hash}`;
    const endpoint = 'https://gateway.marvel.com/v1/public/characters/' + route.params.id;
    try {
        const response = await axios.get(endpoint + parameters);
        console.log(response);
        character.value = response.data.data.results[0];
        isLoading.value = false;
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <h3 v-if="isLoading">Carregando...</h3>
    <div v-else id="background-articles">
        <article>
            <img :src="character.thumbnail.path + '.' + character.thumbnail.extension" alt="Image-thumbnail">
        </article>
        <article>
            <div id="first-area">
                <h2>{{ character.name }}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At quisquam aliquid dicta commodi, fugit laudantium, rerum doloremque, necessitatibus cupiditate non molestiae vel voluptate sapiente velit in animi aperiam? Dicta, blanditiis? Architecto ipsam, enim nemo officiis atque eum fuga delectus distinctio harum accusamus velit sint provident doloremque sunt debitis deserunt at.
                </p>
            </div>
            <div id="second-area">
                <h2>COMICS</h2>
                <span>comics component here</span>
            </div>
        </article>
    </div>
</template>

<style lang="scss" scoped>
    :is(#background-articles, h3){
        padding: 0 80px 0;
        column-gap: 50px;
        display: flex;
        article{
            &:nth-child(2){
                row-gap: 50px;
            }
            display: flex;
            flex-direction: column;
            width: fit-content;
            img{
                max-width: 330px;
                max-height: 324px;
                border-radius: 4px;
            }
            #first-area{
                max-width: 900px;
                min-height: 207px;
                display: flex;
                flex-direction: column;
                row-gap: 24px;
                p{
                    margin: 0;
                    max-width: 900px;
                    min-height: 145px;
                    color: black;
                    font-weight: 400;
                    font-family: 'Roboto', 'sans-serif';
                    text-transform: uppercase;
                    line-height: 28.8px;
                    font-size: 16px;
                }
            }
            h2{
                margin: 0;
                color: black;
                font-weight: 700;
                font-family: 'Roboto', 'sans-serif';
                text-transform: uppercase;
                width: 100%;
            }
        }
    }
</style>