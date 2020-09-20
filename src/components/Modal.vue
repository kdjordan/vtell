<template>
<div class="mssg-modal" @click="closeModal($event)">
    <div v-if="type == 'mssg'" class="mssg-modal__container">
        <div class="mssg-modal__top">
            <div class="mssg-modal__top--left">
                <div>Ask a question</div> 
                <div>All fields are required</div>
            </div>
            <div @click.prevent="closeModal(0)" class="mssg-modal__top--right">&#10005;</div>
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
                <label for="Question" class="modal-form__input-textarea--label">Message</label>
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
    <div v-if="type == 'call'" class="mssg-modal__container">
        <div class="mssg-modal__top mssg-modal__top--callback">
            <div>REQUEST A CALL BACK</div> 
            <img src="../assets/SVG/footer/headphones.svg" alt="phone numbers icon">
            <div @click.prevent="closeModal(0)" class="mssg-modal__top--right">&#10005;</div>
        </div>
        <div class="mssg-modal__form">
            <div class="mssg-modal__form--cb">
                <label for="cbname">Name</label>
                <input type="text" name="cbname" id="cbname" class="modal-form__input-text">
            </div>
            <div class="mssg-modal__form--cb">
                <label for="cbphone" class="cb-label" >Contact<br>Number</label>
                <input type="text" name="cbphone" id="cbphone" class="modal-form__input-text">
            </div>
            <div class="mssg-modal__form--cb">
                <label for="cbtime" class="cb-label" >Preferable<br>Time</label>
                <input type="text" name="cbtime" id="cbtime" class="modal-form__input-text">
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
    <div v-if="type == 'search'" class="search-modal">
        <div class="search-modal__top">
            <div>SEARCH</div>
            <div @click.prevent="closeModal(0)">&#10005;</div>
        </div>
        <div class="search-modal__mid">
            <input type="text" name="" id="">
        </div>
        <div class="search-modal__bot">
            <button>FIND</button>
        </div>
    </div>
</div>
</template>

<script>
import { bus } from '../main';
export default {
    props: ['type'],
    methods: {
        closeModal(ev) {
            if(ev == 0) {
                 bus.$emit('launchMssg', 'close');
            }
            else if(ev.target.className !== "mssg-modal"){
                return;
            } else {
                bus.$emit('launchMssg', 'close');
            }
        }
    },
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.search-modal {
    display: flex;
    flex-direction: column;
    background: #333;
    z-index: 111;
    position: absolute;
    top: 12.5%;
    left: 12.5%;
    color: white;
    width: 75%;
    padding: 2rem 1rem;
    filter: opacity(95%);

    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 30px;
        margin-bottom: 2rem;

        & div:nth-child(2) {
            cursor: pointer;
        }
    }

    &__mid {
        & input {
            width: 100%;
            padding: 1rem 0;
            background-color: rgba(254, 254, 254, 0.5);
            margin-bottom: 1rem;
        }
    }
    
    &__bot {
        display: flex;
        align-content: flex-start;
       & button {
           text-align: left;
           background: $red;
           color: white;
           border: 1px solid transparent;
           padding: 1rem 2rem;
       }
    }
}


.mssg-modal {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .8);
    z-index: 0;


    &__container {
        background: #6f6f6e;
        font-family: inherit;
        color: $vwhite2;
        width: 40%;
        max-width: 600px;
        min-width: 400px;
        z-index: 99;
    }

    &__top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        padding: 1.5rem 2rem;

        &--callback {
            font-size: 24px;
            justify-content: center;
            align-items: center;

            & img {
                width: 4rem;
                margin: 0 1.5rem;
            }

            & .mssg-modal__top--right {
               margin-bottom: 2rem;
               margin-left: 2rem;
            }
        }
        

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
        width: 100%;
        margin: 0 auto;

        &--cb {
            display: flex;
            justify-content: center;
            width: 80%;
            margin: 0 auto;
            align-items: center;

            &__input-text {
                width: 80%;
            }
        }

        & label {
            text-align: left;
            width: 100px;
            margin-right: 1rem;
        }

        & .cb-label {
            display: flex;
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
        @media(max-width: 1370px) {
            
        }
    }

    &__input-textarea {
        background: rgba(242, 242, 242, 0.07);
        width: 60%;
        margin-right: 1.5rem;

        &--label {
            vertical-align: top;
        }
    }
    
    &__input-check {
        width: 22px;
        height: 22px;
        border: 1px solid $grey;
    }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>