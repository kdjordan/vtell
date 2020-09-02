<template>
<div class="divider mb-3">
    <div class="divider__container">
        <img class="divider__cube" src="../assets/SVG/cube.svg" alt="">
        <div class="divider__title">{{title}}</div>
    </div>
</div> 
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss">
.divider {
    width: 100%;
    background-image: url('../assets/img/border.png');
    background-position: center;
    margin-bottom: 3rem;
    
    &__container {
        padding: 10px 0;
        max-width: 950px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        @media(max-width: 958px) {
            margin: 0 1rem;
        }
    }

    &__cube {
        height: 50px;
    }

    &__title {
        text-transform: uppercase;
        font-size: 2rem;
        margin-left: 5%;
        text-align: left;
        color: white;
        width: 100%;

        & > a {
            text-transform: uppercase;
            font-size: 2rem;
            margin-left: 5%;
            color: white;
        }

        @media(max-width: 622px) {
            font-size: 1.5rem;
        }
        @media(max-width: 475px) {
            font-size: 1rem;
        }
    }
}

</style>