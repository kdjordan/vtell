<template>
<div>
    <HPageDivider title="V-Tell Your Global Privelege" />
    <div class="privileges">
        <div class="container">
            <div class="privileges__container">
            <img src="../assets/SVG/left-arrow.svg" class="arrow" alt="" @click.prevent="moveSlide(1)">
                <img :src="`${this.images[this.slideIndex].path}`" :class="{noShow: !show}">
            <img src="../assets/SVG/right-arrow.svg" class="arrow" alt="" @click.prevent="moveSlide(0)">
            </div>
        </div>
    </div>
    <!-- <p>{{slideIndex}}</p>  -->
</div>
</template>

<script>
import HPageDivider from '@/components/HPageDivider';
export default {
    components: {HPageDivider},
    data() {
        return {
            slideIndex: 0,
            show: true,
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
        moveSlide(direction){
            this.show = false;
            setTimeout(()=> {
                if(direction == 1) {
                    if(this.slideIndex == 8) {
                        this.slideIndex = 0;
                        this.show = true;
                    } else {
                        this.slideIndex++;
                        this.show = true;
                    }
                } else {
                    if(this.slideIndex == 0) {
                        this.slideIndex = 8;
                        this.show = true;
                    } else {
                        this.slideIndex--;
                        this.show = true;
                    }
                }
            }, 400);
        },
    }

}
</script>

<style lang="scss">
.arrow {
    height: 4rem;
    cursor: pointer;
    transition: all .4s;
    
    &:hover {
        filter: opacity(50%);
    }
}


.privileges {
    display: flex;
    justify-content: center;

    &__container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 3rem;

        & img {
            opacity: 1;
            width: 75%;
            transition:  all .4s ease-in;
        }
    }
}

.noShow {
  opacity: 0 !important;
  transition:  all .4s ease-in;
}



</style>