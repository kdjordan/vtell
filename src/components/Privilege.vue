<template>
  <div>
      <div class="border mb-3">
          <div class="border__container border__container--priv-adjust">
            <img class="border__cube" src="../assets/SVG/cube.svg" alt="">
            <div class="border__title">V-TELL – YOUR GLOBAL PRIVILEGE</div>
          </div>
      </div>  
      <div class="privileges">
          <div class="container">
              <div class="privileges__container">
                <font-awesome-icon icon="angle-left" class="arrow" />
                    <img src="../assets/privilege/hp-top-img.jpg" alt="">
                <font-awesome-icon icon="angle-right" class="arrow" />
              </div>
          </div>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.privileges {
    display: flex;
    justify-content: center;

    &__container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 3rem;

        & img {
            width: 75%;
        }
    }
}



</style>