<template>
<div>
    <section class="hero" :style="{marginBottom: getBottomMargin + 'px'}">
      <div class="hero__img">
        <!-- <img class="hero__img" :src="`${this.images[this.slideIndex].path}`" alt="V-Tell Telecom US"> -->
      </div>
      <!-- <div v-else >
        <img class="hero__img" :src="`${this.images[this.slideIndex].pathSm}`" alt="V-Tell Telecom US">
      </div> -->
      <!-- <div class="hero__controls">
          <span :class="{active : slideIndex == 0  }" class="hero__controls--circle"></span>
          <span :class="{active : slideIndex == 1  }" class="hero__controls--circle"></span>
          <span :class="{active : slideIndex == 2  }" class="hero__controls--circle"></span>
          <span :class="{active : slideIndex == 3  }" class="hero__controls--circle"></span>
          <span :class="{active : slideIndex == 4  }" class="hero__controls--circle"></span>
          <span :class="{active : slideIndex == 5  }" class="hero__controls--circle"></span>
          <span :class="{active : slideIndex == 6  }" class="hero__controls--circle"></span>
      </div>
        <div class="hero__mssg">
          {{`${this.images[this.slideIndex].mssg}`}}
        </div> -->
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
    getBottomMargin() {
      if(this.windowWidth >= 1920) {
        return -6
      } else {
        return -10
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
  position:relative;
  margin: 0 auto;
  // margin-bottom: -6px;
  margin-top: 56px;
  width:100%;
  max-width: 1920px;
  
  height: auto;
  height: 593px;
  min-height: auto;
  border: 1px solid red;
  margin-bottom: -8rem;


  &__img {
    display: block;
    position:relative;
    top:0;
    left:0;
    background:url('../assets/hero/hero_1.jpg');
    background-repeat:no-repeat;
    background-size: 100% auto;
    // background-size: contain;
    // padding-bottom: 60%;
    width: 100%;
    height: 100%;
        overflow: hidden;
    // height:0;
    // height: auto;
    max-height:100%;
  }

  &__controls {
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

  &__mssg {
    position: relative;
    white-space: pre;
    text-align: center;
    font-size: 4vw;
    line-height: 4vw;
    color: grey;
    text-transform: uppercase;
    top: 40%;
    left: 0%;
  }
}

.active {
  background: $red;
}

</style>