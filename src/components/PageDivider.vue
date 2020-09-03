<template>
<div class="page-divider">  
    <img class="page-divider__cube" src="../assets/SVG/cube.svg" alt="">
    <div class="page-divider__title">{{title}}</div>
</div> 
  
</template>

<script>
export default {
    props: ['title']
}
</script>

<style lang="scss">
.page-divider {
    background: linear-gradient(90deg, rgba(25,25,23,0.2) 0%, rgba(51,51,49,0.2) 12%, rgba(72,72,70,0.2) 25%, rgba(90,90,90,0.2) 37%, rgba(108,108,108,0.2) 50%, rgba(92,92,92,0.2) 62%, rgba(72,72,70,0.2) 75%, rgba(52,52,50,0.2) 87%, rgba(27,27,25,0.2) 100%);
    min-height: 62px;
    height: auto;
    padding-top: 20px;
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 3rem;

    &__cube {
      height: 50px;
    }

    &__title {
      text-transform: uppercase;
      font-size: 25px;
      margin-left: 5%;
      color: white;
    }
}
</style>