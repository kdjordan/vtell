<template>
<div class="page">
    <div class="container">
        <PageCrumbs path="My V-Tell" />
        <PageDivider title="My V-Tell" />
        <div class="myvtell">
            <div class="myvtell__title">Enter</div>
            <div class="myvtell__desc">Please authorize to access V-Tell subscriber's self care capabilities</div>
        </div>
        <div class="myvtell__form-container">
            <div class="myvtell__form-container--upper">
                <div class="myvtell__form-container--upper--flex">
                    <label for="phone">Phone Number</label>
                    <input type="text" name="phone" id="phone">
                </div>
                <div class="myvtell__form-container--upper--flex">
                    <label for="pass">Password</label>
                    <input type="password" name="pass" id="pass">
                </div>
                <button class="myvtell__btn">ENTER</button>
            </div>
            <div class="myvtell__form-container--lower">
                <div class="myvtell__form-container--lower--col">
                    <div class="myvtell__form-container--lower--row">
                        <img class="myvtell__img" src="../assets/myvtell/sign-up-badge.png" alt="">
                        <div class="title">New Subscriber</div>
                    </div>
                    <div class="desc">Use form to sign up as a new subscriber.</div>
                </div>
                <div class="myvtell__form-container--lower--col">
                    <div class="myvtell__form-container--lower--row">
                        <img class="myvtell__img--small" src="../assets/myvtell/restore-badge.png" alt="">
                        <div class="title">Forgot Password ?</div>
                    </div>
                    <div class="desc">Follow the link to recover forgotten password.</div>
                </div>
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

.myvtell {
    background: rgba(242, 242, 242, 0.05);
    padding: 3rem 2rem;
    text-align: left;

    &__title {
        text-transform: uppercase;
        font-size: 21px;
        margin-bottom: 1rem;
        color: white;
    }

    &__desc {
        color:  $grey;
    }

    &__img {
        width: 3rem;
        margin-right: 2rem;

        &--small {
            width: 2rem;
            margin-right: 2rem;
        }
    }

    &__btn {
        cursor: pointer;
        border: 1px solid transparent;
        color: white;
        background: $red;
        font-size: 1.1rem;
        padding: 1.5rem;
        transition: all .4s;

        @media(max-width: 810px) {
            width: 100%;
            margin-top: 1rem;
        }

        &:hover {
            background: white;
            border: 1px solid $red;
            color: $red;
        }

    }

    &__form-container {
        background: #383838;
        padding: 2rem;
        margin-bottom: 5rem;

        &--upper {
            margin-bottom: 5rem;
            color: white;
            display: flex;
            align-items: center;
            justify-content: space-between;

            @media(max-width: 810px) {
                flex-direction: column;
                margin-bottom: 2rem;
            }

            &--flex {
                display: flex;
                flex-direction: column;
                align-items: flex-start;

                @media(max-width: 810px) {
                    width: 100%;
                    margin-top: 2rem;
                }

                & label {
                    margin-bottom: .8rem;
                }

                & input[type=text], & >input[type=password] {
                    border-radius: 77px;
                    padding: 1.5rem;
                    border: 1px solid rgba(247, 248, 248, 0.13);
                    background: transparent;
                    width: 300px;
                    min-width: 100%;
                }

            }
        }

        &--lower {
            display: flex;
            width: 80%;
            align-items: center;
            justify-content: space-between;

            @media(max-width: 810px) {
                width: 100%;
                flex-direction: column;
            }

            &--row {
                display: flex;
                margin-bottom: 1rem;
            }

            &--col {
                color: white;
                display: flex;
                flex-direction: column;
                font-size: 14px;

                 @media(max-width: 810px) {
                   margin-bottom: 2rem;
                }
            }

            & .title {
                font-size: 18px;
                color: white;
                text-transform: uppercase;
                margin-top: .5rem;
            }

            & > div  {
                display: flex;
                align-content: center;
            }

        }
    }
}

</style>
