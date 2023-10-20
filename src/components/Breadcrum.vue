<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

    const route = useRoute();
    const breadcrumbs = computed(() => {
      console.log(route);
      const crumbs = [{ to: checkRouteToCrumbs(route), label: checkLabelToCrumbs(route) }];
      const matchedRoutes = route.matched;

      if (Object.keys(route.params).length === 1 && Object.keys(route.params) === 'id'){
        // crumbs[0].
      }

      if (matchedRoutes.length > 1) {
        matchedRoutes.forEach((route, index) => {
          if (index > 0) {
            crumbs.push({ to: route.path, label: route.name });
          }
        });
      }
      return crumbs;
    });

    function checkRouteToCrumbs(route){
      return route.name === 'characters-details' ? '/characters' : route.path
    }
    function checkLabelToCrumbs(route){
      return route.name === 'characters-details' ? 'characters' : route.name
    }

</script>

<template>
  <nav>
    <ion-icon name="home"></ion-icon>
    <ul>
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <router-link :to="crumb.to">{{ crumb.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>
  


<style lang="scss" scoped>
  nav{
    margin: 32px 0 32px;
    display: flex;
    column-gap: 8px;
    padding: 0 80px 0px;
    align-items: center;
    ion-icon{
      color: #767676;
    }
    ul{
      padding: 0;
      margin: 0;
      list-style: none;
      li{
        a{
          color: #767676;
          text-decoration: none;
          font-size: 14px;
          text-transform: capitalize;
        }
      }
    }
  }
</style>
  