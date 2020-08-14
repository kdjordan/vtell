<template>
    <div class="nav">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="/">
                    <img class="nav-logo__svg" src="../assets/nav/logo.svg" alt="">
                </a>
            </div>
            <div class="nav-menu__container">
                <nav class="nav-menu__upper">
                        <router-link class="nav-link nav-link__upper" to="/search">
                            <span class="nav-link__upper--container">
                                <div class="nav-link__upper--text">Search</div>  
                                <img class="icon" src="../assets/nav/search.svg" alt="">
                            </span>
                        </router-link>
                        <router-link class="nav-link nav-link__upper" to="/payments">
                        <span class="nav-link__upper--container">
                            <div class="nav-link__upper--text">Payments</div>  
                            <img class="icon" src="../assets/nav/payments.svg" alt="">
                        </span>
                        </router-link>
                        <router-link class="nav-link nav-link__upper" to="/account">
                        <span class="nav-link__upper--container">
                            <div class="nav-link__upper--text">Account</div>  
                            <img class="icon" src="../assets/nav/account.svg" alt="">
                        </span>
                        </router-link>
                        <router-link class="nav-link nav-link__upper" to="/cart">
                        <span class="nav-link__upper--container">
                            <div class="nav-link__upper--text">Cart</div>  
                            <img class="icon" src="../assets/nav/cart.svg" alt="">
                        </span>    
                        </router-link>
                </nav>
                <nav class="nav-menu__lower">
                    <span class="vert-border ghost"></span>
                    <router-link class="nav-link nav-link__lower" to="/about">About</router-link>
                    <span class="vert-border"></span>
                    <router-link class="nav-link nav-link__lower" to="/tariffs">Tariffs</router-link>
                    <span class="vert-border"></span>
                    <router-link class="nav-link nav-link__lower" to="/subscribers">Subscribers</router-link>
                    <span class="vert-border"></span>
                    <router-link class="nav-link nav-link__lower" to="/partnerships">Partnerships</router-link>
                    <span class="vert-border"></span>
                    <router-link class="nav-link nav-link__lower" to="/contacts">Contact</router-link>
                    <span class="vert-border ghost"></span>
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

.nav {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    width: 100%;
    height: 5.5%;
    background: #0d0d0d;

    &::after {
        position: fixed;
        top: 5.5%;
        height: 5.5%;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        display: block;
        width: 100%;
        z-index: -1;
    }
}

.nav-container {
    max-width: 1024px;
    display: flex;
    z-index: 2;
    margin: 1rem auto;

    // border: 1px solid red;
}

.nav-logo {
    width: 16%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
    transition: all .4s;

    &__svg {
        width: 80%;
    }

    :hover {
        filter: opacity(80%);
    }
}

.vert-border {
    display: inline-block;
    background: red;
    width: 1px;
    height: 50%;
    transform: translateY(40%);
}

.nav-link {
        color: white;
        text-decoration: none;
        text-transform: uppercase;

    &__upper {
        width: 100%;
        // border: 1px solid yellow;
        list-style-type: none;
        display: flex;
        // justify-content: ;
        align-items: center;
        &:hover {
            background: red;
        }

        &--container {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    &__lower {
        // width: 100%;
        // height: 100%;

        &:hover {
            background: red;
        }
    }
}

.nav-menu {
    position: fixed;
    width: 80%;
    
    &__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        width: 830px;
    }

    &__upper {
        padding-top: 1%;
        width: 100%;
        display: flex;
        
        // align-items: center;
        // justify-content: center;
        
    }

    &__lower {
        width: 100%;
        padding-top: 2%;
        // border: 1px solid yellow;
        display: flex;
        justify-content: space-evenly;
    }

}

.ghost {
    background: transparent;
}

.icon {
    width: 15%;
    margin-left: 5%;
}
</style>