<template>
<div class="page">
    <div class="container">
        <PageCrumbs path="Customer Service" />
        <PageDivider title="Customer Service" />
        <div class="customer">
            <div class="customer__title">V-Tell subscribers can reach us free of charge in any part of the world by dialling 9090</div>
            <div class="customer__numbers">
                <div class="customer__numbers--col">
                    <div class="customer__numbers--row">
                        <div>
                            <div class="customer__numbers--country">USA</div>
                            <div class="customer__numbers--number">+1&nbsp;(866)&nbsp;503-0729</div>
                        </div>
                        <div>
                            <div class="customer__numbers--country">UAE</div>
                            <div class="customer__numbers--number">+971&nbsp;(50)&nbsp;601-6016</div>
                        </div>
                    </div>
                </div>
                <div class="customer__numbers--col">
                    <div class="customer__numbers--row">
                        <div>
                            <div class="customer__numbers--country">Hong Kong</div>
                            <div class="customer__numbers--number">+852&nbsp;57044299</div>
                        </div>
                        <div>
                            <div class="customer__numbers--country">Switzerland</div>
                            <div class="customer__numbers--number">+414&nbsp;35507169</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="customer__email">   
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" class="customer__email--icon">
                    <path d="M26.6,16.6c-2.2,2.2-4.3,4.3-6.5,6.5c-1.8,1.8-4.7,1.8-6.5,0c-2.1-2.1-4.3-4.3-6.5-6.5c0.8-1.2,2.2-2,3.8-2c3.9,0,7.9,0,11.8,0C24.4,14.6,25.8,15.4,26.6,16.6z M11.8,24.9c2.8,2.8,7.3,2.8,10.1,0c2.5-2.5,5.2-5.2,7.7-7.7c-0.8-2.7-3.1-4.7-6-5c-0.1,0-0.2,0-0.4,0c-4.1,0-8.2,0-12.4,0c-3.2,0-6,2.2-6.9,5.1C6.6,19.8,9.2,22.3,11.8,24.9L11.8,24.9z M27.4,22.9v3.9c0,2.5-2.1,4.6-4.6,4.6c-3.9,0-7.9,0-11.8,0c-2.5,0-4.6-2.1-4.6-4.6v-3.9l-2.5-2.5v6.5c0,3.6,2.7,6.6,6.3,7.1c0.1,0,0.2,0,0.4,0c4.1,0,8.2,0,12.4,0c3.9,0,7.1-3.2,7.1-7.1v-6.5L27.4,22.9L27.4,22.9z"></path>
                </svg>
                <a class="customer__email--addr" href="mailto:service@v-tell.com">service@v-tell.com</a>
            </div>
        </div>
    </div>
</div>

</template>
<script>
import PageDivider from '@/components/PageDivider';
import PageCrumbs from '@/components/PageCrumbs';
export default {
    components: {PageDivider, PageCrumbs},
    mounted () {
        window.scrollTo(0, 0);
    }
}
</script>
<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';
@import '../scss/_utilities.scss';
@import '../scss/_page.scss';

.customer {
    background: rgba(252, 252, 252, 0.25);
    box-shadow: 0 0 6em rgba(31, 31, 31, 0.25) inset;
    padding: 56px;
    margin: 28px 0;
    text-align: left;
    color: white;

    & > div {
        margin: 1.5rem 0;
    }

    &__title {
        text-align: center;
        font-size: 20px;
        margin-bottom: .6rem
    }

    &__numbers {
        font-size: 20px;
       
        &--country {
            font-style: italic;
            margin-right: 1rem;
        }

        &--col {
            display: flex;
            flex-direction: column;
        }

        &--row {
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin: .5rem 0;

            @media(max-width: 705px) {
                flex-direction: column;
                margin: 0 0;
            }

            & > div {
                display: flex;
                align-items: center;

                @media(max-width: 705px) {
                    margin: .5rem 0;
                }
            }
        }
    }

    &__email {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;

        &--icon {
            fill: $red;
            width: 6%;
            margin-right: 1rem;
        }

        &--addr {
            color: white;
            margin-top: .8rem;
            text-decoration: none;
            transition: all .4s;

            &:hover {
                filter: opacity(50%);
                text-decoration: underline;
            }
        }
    }

    &__addr {
        line-height: 25px;
    }
}
</style>
