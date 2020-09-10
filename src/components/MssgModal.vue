<template>
<div class="mssg-modal">
        <div class="mssg-modal__top">
            <div class="mssg-modal__top--left">
                <div>Ask a question</div> 
                <div>All fields are required</div>
            </div>
            <div @click.prevent="closeModal()" class="mssg-modal__top--right">&#10005;</div>
        </div>
        <div class="mssg-modal__form">
            <div>
                <label for="fname">Name</label>
                <input type="text" name="fname" id="fname" class="modal-form__input-text">
            </div>
            <div>
                <label for="phone">Phone</label>
                <input type="text" name="phone" id="phone" class="modal-form__input-text">
            </div>
            <div>
                <label for="email">Email</label>
                <input type="text" name="email" id="email" class="modal-form__input-text">
            </div>
            <div>
                <label for="Question">Message</label>
                <textarea name="mssg" id="mssg" cols="40" rows="10" class="modal-form__input-textarea"></textarea>
            </div>
        </div>
        <div class="mssg-modal__bot">
            <div class="mssg-modal__bot--checkbox-wrap">
                <div>I agree with personal data processing</div>
                <div>
                    <input type="checkbox" name="" id="" class="modal-form__input-check">
                </div>
            </div>
            <button class="mssg-modal__bot--button">Submit</button>
        </div>
    </div>
</template>

<script>
import { bus } from '../main';
export default {
    methods: {
        closeModal() {
            bus.$emit('launchMssg');
        }
    }

}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.mssg-modal {
    position: fixed;
    top: 20%;
    left: 30%;
    width: 40%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    background: #6f6f6e;
    font-family: inherit;
    color: $vwhite2;

    &__top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        padding: 2rem 1rem;
        

        &--left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            & div:nth-child(1) {
                color: white;
                font-family: inherit;
                font-size: 24px;
                margin-bottom: 1rem;
            }

            & div:nth-child(2) {
                font-style: italic;
            }
        }

        &--right {
            cursor: pointer;
            font-size: 28px;
            transition: all .4s;

            &:hover {
                filter: opacity(50%);
            }
        }
    }

    &__form {
        display: flex;
        flex-direction: column;
        font-size: 16px;
        min-width: 0;

        & label {
            margin-right: 4rem;
        }

        & div:nth-child(4) {
            width: 85%;
            margin: 0 auto;
            margin-top: 1rem;
        }

        & div:nth-child(4) > label {
            vertical-align: top;
        }
    }

    &__bot {
        padding: 2rem 3rem;

        &--checkbox-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &--button {
            margin-top: 2rem;
            background: $red;
            color: white;
            border: 1px solid transparent;
            padding: 2rem 0;
            width: 100%;
            font-size: 20px;
        }
    }
}

.modal-form {
    &__input-text {
        background: transparent;
        border: none;
        border-bottom: 1px solid $vwhite2;
        margin: 1rem 0;
        width: 60%;
    }

    &__input-textarea {
        background: rgba(242, 242, 242, 0.07);
    }
    
    &__input-check {
        width: 22px;
        height: 22px;
        border: 1px solid $grey;
    }
}


</style>