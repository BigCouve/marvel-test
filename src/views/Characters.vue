<script setup>
import axios from 'axios'

const public_key = import.meta.env.VITE_PUBLIC_API_KEY;
const private_key = import.meta.env.VITE_PRIVATE_API_KEY;


const str = 'revenue'
console.log(str, str.hashCode())
generateHash(1+private_key+public_key)
.then(md5Hash => {
    console.log(md5Hash); // Saída: '3e25960a79dbc69b674cd4ec67a72c62'
  })
  .catch(error => {
    console.error(error);
  });

async function getUser() {
  try {
    const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?limit=30&apikey=${public_key}&ts=1&`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
// getUser();

async function generateHash(inputString){
    const encoder = new TextEncoder();
  const data = encoder.encode(inputString);

  const buffer = await crypto.subtle.digest('MD5', data);
  const hashArray = Array.from(new Uint8Array(buffer));

  // Converte o array de bytes para uma string hexadecimal
  const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

  return hashHex;
}
</script>

<template>
    <article>
        <p>charac</p>
    </article>
</template>

<style scoped>
    article{
        padding: 0 80px 0;
    }
</style>