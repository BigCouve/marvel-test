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
  
  <script>
  export default {
    computed: {
      breadcrumbs() {
        const crumbs = [{ to: this.$route.path, label: this.$route.name }];
        console.log(this.$route);
        const matchedRoutes = this.$route.matched;
  
        if (matchedRoutes.length > 1) {
          matchedRoutes.forEach((route, index) => {
            if (index > 0) {
              crumbs.push({ to: route.path, label: route.name });
            }
          });
        }
  
        return crumbs;
      },
    },
  };
  </script>

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
  