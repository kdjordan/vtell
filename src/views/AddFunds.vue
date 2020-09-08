<template>
<div class="page">
    <div class="container">
        <PageCrumbs path="PAYMENT: CREDIT/DEBIT CARDS" />
        <PageDivider title="PAYMENT: CREDIT/DEBIT CARDS" />
        <div class="addfunds">
            <form class="addfunds__form">
                <div class="addfunds__form--do">Enter Phone Number</div>
                <label for="phone">11 Digits</label>
                <input class="addfunds__form--input" type="text" id="phone">
                <div class="addfunds__form--do">Amount to Pay</div>
                <label for="amount">min 100</label>
                <input class="addfunds__form--input" type="text" id="amount">
            </form>
            <div class="addfunds__checkboxes">
                <div>
                    <input type="checkbox"  id="recurring">
                    <label for="recurring">Use recurring payments service. I accept terms and conditions.</label>
                </div>
                <div>
                    <input type="checkbox" id="accept" checked>
                    <label for="accept"> Add funds. I accept terms and conditions.</label>
                </div>
            </div>
            <button class="addfunds__btn">ADD FUNDS</button>
            <hr>
            <div class="addfunds__payment">
                <div class="addfunds__payment--title">Payment Information</div>
                <div class="addfunds__payment--desc">
                    <p>When using bank cards of Visa and MasterCard payment systems, online payments are processed via the authorized server of processing center of PayOnline. Payment information is transmitted in encrypted form directly to the bank server on a secure channel via SSL communication.</p>
                    <p>For payment communications V-Tell is using certified internet security payments technology Verified by Visa and MasterCard SecureCode. All transactions on your card are carried out in full compliance with the requirements of Visa international and MasterCard Worldwide. Secure processing of online payments is guaranteed by international certificate PCI DSS security.</p>
                    <p>If you have any questions, please feel free to contact our customer support team.</p>
                </div>
                <img src="../assets/payment-cards.png" alt="">
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

hr {
    border: 1px solid $grey;
    margin-bottom: 2rem;
}

.addfunds {
    &__a {
        text-transform: uppercase;
        font-size: 25px;
        color: white;
        transition: all .4s;

        &:hover {
            filter: opacity(50%);
        }
    }

    & label {
        text-align: left;
        color: white;
        font-size: 14px;
        margin-bottom: .5rem;

    }

    &__form {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        width: 50%;
        margin: 0 auto;

        &--do {
            color: $grey;
            text-align: left;
            font-size: 15px;
            margin-bottom: .2rem;
        }

        &--input {
            margin-bottom: 2rem;
            border-radius: 77px;
            padding: 1.5rem;
            border: 1px solid rgba(247,248,248,.13);
            background: transparent;
        }
    }

    &__btn {
        cursor: pointer;
        width: 50%;
        background: $red;
        border: 1px solid transparent;
        color: white;
        padding: 25px 0;
        margin: 1rem  0;
        margin-bottom: 3rem;
        transition: all .4s;

        &:hover {
            background: white;
            border: 1px solid $red;
            color: $red;
        }

    }

    &__checkboxes {
        display: flex;
        flex-direction: column;
        width: 50%;
        margin: 0 auto;

        & > div {
            display: flex;
            margin:  .5rem 0;
            text-align: left;
        }

        & input[type=checkbox] {
            margin-right: 1rem;
            width: 22px;
            height: 22px;
            appearance: none;
            background-color: transparent;
            border: 1px solid $grey;
            outline: none;
            transition-duration: 0.3s;
            background-color: transparent;
            cursor: pointer;

            &:checked {
                background-color: $red;

                &::before {
                    display: block;
                    content: "\2713";
                    color: white;
                    font-size: 1.4rem;
                    position: relative;
                    bottom: 3px;
                    left: 1px;
                }
            }
        }

        & label {
            color: $grey;
            font-size: 14px;
            margin-top: .2rem;
        }
    }

    &__payment {
        &--title {
            font-size: 2rem;
            color: white;
            margin-bottom: 1rem;

        }
        &--desc {
            margin: 0 2rem;
            & p {
                line-height: 24px;
                margin-bottom: 1rem;
            }
        }

        & img {
            width: 50%;
            margin-bottom: 1rem;
        }
    }
}



</style>
