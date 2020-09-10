<template>
<div class="hero">
      <img v-if="windowWidth > 760" class="hero__img" 
        :src="`${this.images[this.slideIndex].path}`" 
        alt="V-Tell Telecom US"
        :class="{noShow: !show}"
        >
      <img v-else class="hero__img" 
        :src="`${this.images[this.slideIndex].pathSm}`" 
        alt="V-Tell Telecom US"
        :class="{noShow: !show}"
      >
      <div class="hero__controls" >
          <span :class="{active : slideIndex == 0  }" class="hero__controls--circle" @click.prevent="selectSlide(0)"></span>
          <span :class="{active : slideIndex == 1  }" class="hero__controls--circle" @click.prevent="selectSlide(1)"></span>
          <span :class="{active : slideIndex == 2  }" class="hero__controls--circle" @click.prevent="selectSlide(2)"></span>
          <span :class="{active : slideIndex == 3  }" class="hero__controls--circle" @click.prevent="selectSlide(3)"></span>
          <span :class="{active : slideIndex == 4  }" class="hero__controls--circle" @click.prevent="selectSlide(4)"></span>
          <span :class="{active : slideIndex == 5  }" class="hero__controls--circle" @click.prevent="selectSlide(5)"></span>
          <span :class="{active : slideIndex == 6  }" class="hero__controls--circle" @click.prevent="selectSlide(6)"></span>
      </div>
      <div class="hero__mssg" 
      :class="{noShow: !show}" 
      :style="{
        left: getLeftOffset + '%', 
        bottom: getBottomOffset + '%',
        color: `${this.images[this.slideIndex].color}`,
        fontSize: `${this.images[this.slideIndex].size}` + 'vw'
        }"
      >
        {{`${this.images[this.slideIndex].mssg}`}}
      </div>  
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
          mssg: `If You Often
          Travel Abroad`,
          xOffset: 0,
          yOffset: 0,
          color: '#727577',
          size: 4
        },
        {
          path: require('../assets/hero/hero_2.jpg'), 
          pathSm: require('../assets/hero/hero_2-sm.jpg'), 
          mssg: `If You Travel
          Around the World`,
          xOffset: 300,
          yOffset: 0,
          color: '#cbbcb8',
          size: 4
        },
        {
          path: require('../assets/hero/hero_3.jpg'),
          pathSm: require('../assets/hero/hero_3-sm.jpg'),  
          mssg: `If You
          Study Abroad`,
          xOffset: 300,
          yOffset: 0,
          color: '#664e42',
          size: 4
        },
        {
          path: require('../assets/hero/hero_4.jpg'),
          pathSm: require('../assets/hero/hero_4-sm.jpg'),  
          mssg: `If You Live Outside
          of your Home Country`,
          xOffset: 300,
          yOffset: 0,
          color: '#f0f1f2',
          size: 3
        },
        {
          path: require('../assets/hero/hero_5.jpg'),
          pathSm: require('../assets/hero/hero_5-sm.jpg'),  
          mssg: `V-Tell is for You !`,
          xOffset: 300,
          yOffset: 0,
          color: '#727577',
          size: 4
        },
        {
          path: require('../assets/hero/hero_6.jpg'),
          pathSm: require('../assets/hero/hero_6-sm.jpg'),  
          mssg: `NO MATTER WHICH COUNTRY
          YOU ARE IN, THAT  COUNTRY\'S LOCAL
          PHONE  NUMBER IS ON YOUR SIM CARD`,
          xOffset: 100,
          yOffset: 0,
          color: '$#727577',
          size: 3
        },
        {
          path: require('../assets/hero/hero_7.jpg'),
          pathSm: require('../assets/hero/hero_7-sm.jpg'),  
          mssg: `It\'s Just Comfort !`,
          xOffset: -200,
          yOffset: 0,
          color: '#a69891',
          size: 4
        },
      ],
      slideIndex: 0,
      timer: null,
      windowWidth: 0,
      windowHeight:0,
      show: true,
      sliderTimer: null,
      fadeTimer: null
    }
  },
  methods: {
    selectSlide(slideNum) {
      this.sliderTimer = null;
      this.slideIndex = slideNum;
    },
    startSlider() {
      this.sliderTimer = setInterval(()=> {
        this.doFade();
      }, 3000);
    },
    doFade(){
      this.show = false;
      setTimeout(()=> {
        if(this.slideIndex == 6) {
          this.slideIndex = 0;
          this.show = true;
        } else {
          this.slideIndex++;
          this.show = true;
        }
      }, 400);
    },
    handleResize() {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
    }
  },
  computed: {
    getLeftOffset() {
      if(this.slideIndex == 0 || this.slideIndex == 6) {
        return 0;
      } if (this.slideIndex == 5) {
        return 30;
      } else {
        return 40;
      }
    },
    getBottomOffset() {

    }
  },
    created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
      this.startSlider();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
      this.sliderTimer = null;
    }
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.hero {
  margin-top: 56px;
  position: relative;
  margin-bottom: -7px;

  &__img {
    width: 100%;
    height: 100%;
    max-width: 1920px;
    max-height: 593px;
    margin: 0 auto;
    transition:  all .4s ease-in;
    opacity: 1;
  }

  &__controls {
    position: absolute;
    bottom: calc(100% / 8);
    left: calc(100% / 8);
    display: flex;

    @media(min-width: 2400px) {
      left: calc(100% / 5);
    }

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
    position: absolute;
    white-space: pre;
    text-align: center;
    line-height: 4vw;
    text-transform: uppercase;
    bottom: calc(100% / 3);
    transition:  opacity left .7s ease-in;
    opacity: 1;
  }
}

.active {
  background: $red;
}

.noShow {
  opacity: 0;
  transition:  all .4s ease-in;
}

</style>