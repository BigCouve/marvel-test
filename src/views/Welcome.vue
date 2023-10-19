<script setup>

</script>

<template>
    <div id="background-welcome">
        <article>
            <img src="../assets/marvel-logo-gray.svg" alt="Marvel Logo Gray">
            <span>WELCOME TO MARVEL'S DIRECTORY</span>
        </article>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

    #background-welcome{
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        margin: 0;
        padding: 0 80px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        article{
            display: flex;
            justify-content: center;
            flex-direction: column;
            row-gap: 24px;
            width: 538px;
            height: 193px;
            img{
                margin: 0 auto;
                width: 325px;
                height: 131px;
            }
            span{
                text-align: center;
                font-size: 32px;
                font-family: 'Roboto', 'sans-serif';
                font-weight: 700;
            }
        }
    }
    
</style>