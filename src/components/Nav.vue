<template>
    <div class="menu-top">
        <div class="row-bg"></div>
        <div class="nav">
            <div class="logo">
                <a href="/">
                    <img class="logo__img" src="../assets/nav/logo.svg" alt="">
                </a>
            </div>
            <div class="items">
                <nav class="nav-first-row">
                    <li class="search"><span>Search</span></li>
                    <li class="payments"><span>Add Funds</span></li>
                    <li class="account"><span>Account</span></li>
                    <li class="cart"><span>Cart</span></li>
                </nav>
                <nav class="nav-second-row">
                    <li><span class="first">About Us</span></li>
                    <li><span class="all">Taariffs</span></li>
                    <li><span class="all">Subscribers</span></li>
                    <li><span class="all">Partnerships</span></li>
                    <li><span class="last">Contacts</span></li>
                </nav>
            </div>
        </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../scss/_variables.scss';


.nav-second-row {
    width: 830px;
    padding: 0;
    list-style: none;
    overflow: visible;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & .all {
        padding: 2px 0 0 32px;
        border-left: 1px solid #e63739;
        border-right: 1px solid #e63739;
    }

    & .first {
        padding: 2px 0 0 32px;
        border-left: 1px solid $red;
    }

    & .last {
        padding: 2px 0 0 32px;
        border-right: 1px solid $red;
    }
}

.nav {
    width: 960px;
    display: inline-block;
    position: relative;
    z-index: 2;
}

li {
    list-style-type: none;
    display: inline-block;
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: right center;
    text-align: left;
    text-transform: uppercase;
    height: 50px;

    & > span {
        font-size: 14px;
        position: relative;
        top: 17px;
    }
}

ul {
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
}

.menu-top {
    height: auto;
    margin: auto;
    min-width: 1024px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    padding: 0;
}
.row-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 56px;
    display: block;
    background: #0d0d0d;
    z-index: -1;
}

.logo__img{
    width: 118px;
    float: left;
    margin-top: 10px;
    z-index: 5;
}

.items {
    color: white;
    width: 830px;
    float: left;
}

.search {
    background-image: url('../assets/nav/search.svg');
    margin-left: 33px;
    width: 105px;
}
.payments {
    background-image: url('../assets/nav/payments.svg');
    margin-left: 95px;
    width: 135px;
}
.account {
    background-image: url('../assets/nav/account.svg');
    margin-left: 109px;
    width: 122px;
}

.cart {
    background-image: url('../assets/nav/cart.svg');
    margin-left: 125px;
    width: 106px;
}



</style>