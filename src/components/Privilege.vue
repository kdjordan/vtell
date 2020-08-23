<template>
  <div>
      <div class="divider mb-3">
          <div class="divider__container">
            <img class="divider__cube" src="../assets/SVG/cube.svg" alt="">
            <div class="divider__title">V-TELL – YOUR GLOBAL PRIVILEGE</div>
          </div>
      </div>  
      <div class="privileges">
          <div class="container">
              <div class="privileges__container">
                <font-awesome-icon icon="angle-left" class="arrow" @click.prevent="slideScrollPrev()"/>
                    <img :src="`${this.images[this.slideIndex].path}`">
                <font-awesome-icon icon="angle-right" class="arrow" @click.prevent="slideScrollNext()"/>
              </div>
          </div>
      </div>
        <!-- <p>{{slideIndex}}</p>  -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            slideIndex: 0,
            images: [
                {path: require('../assets/privilege/priv_1.jpg')},
                {path: require('../assets/privilege/priv_2.jpg')},
                {path: require('../assets/privilege/priv_3.jpg')},
                {path: require('../assets/privilege/priv_4.jpg')},
                {path: require('../assets/privilege/priv_5.jpg')},
                {path: require('../assets/privilege/priv_6.jpg')},
                {path: require('../assets/privilege/priv_7.jpg')},
                {path: require('../assets/privilege/priv_8.jpg')},
                {path: require('../assets/privilege/priv_9.jpg')},
            ]
        }
    },
    methods: {
        slideScrollNext() {
            if(this.slideIndex == 8) {
                this.slideIndex = 0
            } else {
                this.slideIndex++
            }
        },
        slideScrollPrev() {
            if(this.slideIndex == 0) {
                this.slideIndex = 8
            } else {
                this.slideIndex--
            }
        }
    }

}
</script>

<style lang="scss">
@import '../scss/_divider.scss';

.arrow {
    cursor: pointer;
    transition: all .4s;
    &:hover {
        filter: opacity(50%);
    }
}

.privileges {
    // position: relative;
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