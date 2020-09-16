<template>
<div class="plans__calc">
    <div class="plans__calc--row">
        <img class="plans__calc--img" src="../assets/pages/plans/globe_call.png" alt="">
        <div class="plans__calc--title">CALCULATE THE COST OF TALKING MINUTES</div>
    </div>
    <div class="plans__calc--row">
        <div class="plans__calc--row input-boxes">
            <label for="">From Country</label>
            <input type="text" name="" id="">
        </div>
        <div class="exchange-box">
            <font-awesome-icon :icon="['fa', 'exchange-alt']" />
        </div>
        <div class="plans__calc--row input-boxes">
            <label for="">To Country</label>
            <input type="text" name="" id="">
        </div>
        <div class="plans__calc--row input-boxes input-boxes__small">
            <label for="">Currency</label>
            <input type="text" name="" id="">
        </div>
    </div>
    <button class="plans__calc--btn">Calculate</button>
    <div class="plans__calc--row">
        <img class="plans__calc--img" src="../assets/pages/plans/globe_inet.png" alt="">
        <div class="plans__calc--title">CALCULATE THE COST OF 1 MB OF DATA</div>
    </div>
    <div class="plans__calc--row plans__calc--row--right">
        <div class="plans__calc--row input-boxes">
            <label for="">From Country</label>
            <input type="text" name="" id="">
        </div>
        <div class="plans__calc--row input-boxes input-boxes__small">
            <label for="">Currency</label>
            <input type="text" name="" id="">
        </div>
    </div>
    <button class="plans__calc--btn">Calculate</button>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.exchange-box {
    color: $red;
    margin-top: 2rem;
    margin-right: 1rem;
}

.plans__calc {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: $vwhite2;
    font-size: 24px;
    
    @media(max-width: 960px) {
        margin: 0 1rem;
    }

    &--img {
        width: 25%;
    }

    &--title {
        @media(max-width: 700px) {
            font-size: 3vw;
        }
    }

    &--btn {
        width: 100%;
        background: $red;
        color: white;
        border: 1px solid transparent;
        padding: 15px 0;
        font-size: 20px;
        margin-bottom: 2rem;
    }

    &--row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        &--right {
            width: 70%;
            margin-right: 30%;
        }

        & .input-boxes {
            font-size: 16px;
            flex: 0 1 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 2rem 0;

            &__small {
                flex: 0 1 70%;
            }
            
            & > label {
                display: block;
                margin-bottom: 10px;            
            }

            & > input[type=text] {
                background-color: transparent;
                font-size: 16px;
                border: 2px solid $greydim;
                padding: 10px;
                width: 90%;

            }
        }
    }

}
</style>