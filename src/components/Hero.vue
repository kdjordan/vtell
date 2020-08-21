<template>
<div>
    <section class="hero">
      <div v-if="!checkWindowWidth">
        <img class="hero__img" :src="`${this.images[this.slideIndex].path}`" alt="V-Tell Telecom US">
      </div>
      <div v-else >
        <img class="hero__img" :src="`${this.images[this.slideIndex].pathSm}`" alt="V-Tell Telecom US">
      </div>
      <div class="hero__container">
        <div class="dots-container" :style="{top: getContainerOffset + '%'}">
          <span :class="{active : slideIndex == 0  }" class="dots-container--circle"></span>
          <span :class="{active : slideIndex == 1  }" class="dots-container--circle"></span>
          <span :class="{active : slideIndex == 2  }" class="dots-container--circle"></span>
          <span :class="{active : slideIndex == 3  }" class="dots-container--circle"></span>
          <span :class="{active : slideIndex == 4  }" class="dots-container--circle"></span>
          <span :class="{active : slideIndex == 5  }" class="dots-container--circle"></span>
          <span :class="{active : slideIndex == 6  }" class="dots-container--circle"></span>
        </div>
        <div class="hero__mssg">{{`${this.images[this.slideIndex].mssg}`}}</div>
    </div>
    </section>  
    <!-- <p>{{windowHeight}}</p>
    <p>{{windowWidth}}</p> -->
</div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          path: require('../assets/hero/hero_1.jpg'), 
          pathSm: require('../assets/hero/hero_1-sm.jpg'), 
          mssg: 'If You Often\nTravel Abroad',
          xPosition : 0,
          yPosition: 0,
          color: '$grey'
        },
        {
          path: require('../assets/hero/hero_2.jpg'), 
          mssg: 'If You Travel\nAround the World',
          xPosition : 0,
          yPosition: 0,
          color: '$grey'
        },
        {
          path: require('../assets/hero/hero_3.jpg'), 
          mssg: 'If You\nStudy Abroad',
          xPosition : 0,
          yPosition: 0,
          color: '$white'
        },
        {
          path: require('../assets/hero/hero_4.jpg'), 
          mssg: 'If You Live Outside\nof your Home Country',
          xPosition : 0,
          yPosition: 0,
          color: '$grey'
        },
        {
          path: require('../assets/hero/hero_5.jpg'), 
          mssg: 'V-Tell is for You !',
          xPosition : 0,
          yPosition: 0,
          color: '$grey'
        },
        {
          path: require('../assets/hero/hero_6.jpg'), 
          mssg: 'NO MATTER WHICH COUNTRY\nYOU ARE IN, THAT  COUNTRY\'S LOCAL\nPHONE  NUMBER IS ON YOUR SIM CARD',
          xPosition : 0,
          yPosition: 0,
          color: '$grey'
        },
        {
          path: require('../assets/hero/hero_7.jpg'), 
          mssg: 'It\'s Just Comfort !',
          xPosition : 0,
          yPosition: 0,
          color: '$grey'
        },
      ],
      slideIndex: 0,
      timer: null,
      windowWidth: 0,
      windowHeight:0
    }
  },
  methods: {
    handleResize() {
        this.windowWidth = window.innerWidth
        this.windowHeight = window.innerHeight
    }
  },
  computed: {
    getSlide() {
      return this.images[0].path
    },
    getContainerOffset() {
      if (this.windowHeight > 593 || this.windowHeight < 593) {
        return 90
      } 
      if (this.windowWidth < 1920) {
        return this.windowWidth * .7
      }
     
    },
    checkWindowWidth() {
      if(this.windowWidth <= 760) {
        return true
      } else {
        return false
      }
    }
    },
    created() {
      console.log('creating')
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    }

  
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.hero {
  margin: 0 auto;
  margin-bottom: -6px;
  margin-top: 56px;
  width: 100vw;
  height: 100%;
  max-width: 1920px;
  max-height: 593px;

  &__container {
    display: block;
    border: 5px solid red;
    position: absolute;
    top: 56px;
    left: 0;
    width: 680px;
    height: 400px;
    max-height: 650px;
  }

  &__img {
    width: 100%;
    height: auto;
    // min-height: 30vh;750
  }

  &__mssg {
    position: relative;
    z-index: 0;
    white-space: pre;
    // font-size: clamp(4rem, 10vw, 2rem);
    font-size: 4vw;
    line-height: 4vw;
    color: grey;
    text-transform: uppercase;
    top: 40%;
    left: 0%;
  }
}

.dots-container {
  // border: 1px solid red;
  position: relative;
  top: 90%;
  left: 8%;
  display: flex;


  &--circle {
    margin: 0 .1rem;
    height: 15px;
    width: 15px;
    display: block;
    border-radius: 50%;
    border: 2px solid $red;
  }

}

.active {
  background: $red;
}

</style>