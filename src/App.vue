<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Breadcrum from './components/Breadcrum.vue';


</script>

<template>
  <Navbar />
  <Breadcrum  />
  <RouterView @character-name="handleCharacterName"/>
</template>

<style lang="scss">

</style>
