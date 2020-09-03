<template>
<div class="page-crumbs">
    <img class="page-crumbs__img" src="../assets/back-button.png" alt="">
    <div class="page-crumbs__path">/&nbsp;<a href="/">HOME</a>&nbsp;/&nbsp;<span>{{path}}</span></div>
</div>
</template>

<script>
export default {
    props: ['path']
}
</script>

<style lang="scss">
.page-crumbs {
    display: flex;
    align-items: center;
    color: rgb(102, 102, 102);
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    margin-bottom: 1rem;
  
    & a {
      color: rgb(102, 102, 102);
      transition: all .4s;
  
      &:hover {
        color: #ffffff;
        text-decoration: none;
      }
    }
  
    &__img {
      width: 1rem;
    }
  
    &__path {
      margin-left: 1rem;

      & > span {
          text-transform: uppercase;
      }
    }
  }
</style>