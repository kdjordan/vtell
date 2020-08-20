<template>
    <div class="hero">
      <img class="hero__img" :src="`${this.images[this.slideIndex].path}`" alt="V-Tell Telecom US">
      <div class="hero__mssg">{{`${this.images[this.slideIndex].mssg}`}}</div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          path: require('../assets/hero/hero_1.jpg'), 
          mssg: 'If You Often\nTravel Abroad',
          xPosition : 0,
          yPosition: 0
        },
        {
          path: require('../assets/hero/hero_2.jpg'), 
          mssg: 'If You Travel\nAround the World',
          xPosition : 0,
          yPosition: 0
        },
        {
          path: require('../assets/hero/hero_3.jpg'), 
          mssg: 'If You\nStudy Abroad',
          xPosition : 0,
          yPosition: 0
        },
        {
          path: require('../assets/hero/hero_4.jpg'), 
          mssg: 'If You Live Outside\nof your Home Country',
          xPosition : 0,
          yPosition: 0
        },
        {
          path: require('../assets/hero/hero_5.jpg'), 
          mssg: 'V-Tell is for You !',
          xPosition : 0,
          yPosition: 0
        },
        {
          path: require('../assets/hero/hero_6.jpg'), 
          mssg: 'NO MATTER WHICH COUNTRY\nYOU ARE IN, THAT  COUNTRY\'S LOCAL\nPHONE  NUMBER IS ON YOUR SIM CARD',
          xPosition : 0,
          yPosition: 0
        },
        {
          path: require('../assets/hero/hero_7.jpg'), 
          mssg: 'It\'s Just Comfort !',
          xPosition : 0,
          yPosition: 0
        },
      ],
      slideIndex: 0,
      timer: null,
      computed: {
        getSlide() {
          return this.images[0].path
        }
      }

    }
  }
}
</script>

<style lang="scss">

.hero {
  // display: block;
  margin-top: 3.5rem;
  margin-bottom: -7px;

  &__img {
    width: 100%;
    max-width: 1920px;
    height: auto;
    max-height: 593px;
  }

  &__mssg {
    z-index: 0;
    white-space: pre;
    font-size: 4.5rem;
    line-height: 4.5rem;
    color: grey;
    text-transform: uppercase;
    position: relative;
    bottom: 20rem;
    left: 0%;
    // transform: translateY(-200%);

  }
}

</style>