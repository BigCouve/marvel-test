<script setup>

defineOptions({
  inheritAttrs: false,
  name: "Navbar",
})

</script>

<template>
    <nav id="navbar">
      <img src="../assets/marvel-logo.svg" alt="marvel-logo">
      <div id="menu">
        <ul>
          <RouterLink to="/">HOME</RouterLink>
          <RouterLink to="/characters">CHARACTERS</RouterLink>
          <RouterLink to="/comics">COMICS</RouterLink>
          <RouterLink to="/events">EVENTS</RouterLink>
          <RouterLink to="/contact">CONTACT</RouterLink>
        </ul>
      </div>
    </nav>
</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

#navbar{
  display: flex;
  justify-content: space-between;
  background-color: #EC1D24;
  width: 100%;
  height: 88px;
  padding: 16px 80px 16px 80px;
  img{
    width: 139px;
    height: 56px;
  }

  #menu{
    width: 554px;
    height: 56px;

    ul{
      display: flex;
      column-gap: 32px;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;
      height: 100%;
      a{
        text-decoration: none; 
        color: #FFFFFF;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
      }
    }
  }
}


</style>