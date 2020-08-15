<template>
    <div class="nav">
        <div class="top-bar"></div>
        <div class="bot-bar"></div>
        <div class="nav-logo">
            <a href="/"><img class="nav-logo__svg" src="../assets/nav/logo.svg" alt=""></a>
        </div>
        <nav class="nav-menu nav-menu__upper">
            <router-link class="nav-link nav-link__upper" to="/search">
                <span class="nav-link__upper--container">
                    <div class="nav-link__upper--text">Search</div>  
                    <img class="icon" src="../assets/nav/search.svg" alt="">
                </span>
            </router-link>
            <router-link class="nav-link nav-link__upper" to="/payments">
            <span class="nav-link__upper--container">
                <div class="nav-link__upper--text">Add Funds</div>  
                <img class="icon" src="../assets/nav/payments.svg" alt="">
            </span>
            </router-link>
            <router-link class="nav-link nav-link__upper" to="/account">
            <span class="nav-link__upper--container">
                <div class="nav-link__upper--text">My V-tell</div>  
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
        <nav class="nav-menu nav-menu__lower">
            <span class="nav-link__upper--container wide">
                <router-link class="nav-link nav-link__lower" to="/about">About</router-link>
            </span>
            <div class="vert-border"></div>
            <span class="nav-link__upper--container wide">
                <router-link class="nav-link nav-link__lower" to="/tariffs">Tariffs</router-link>
            </span>
            <div class="vert-border"></div>
            <span class="nav-link__upper--container wide">
                <router-link class="nav-link nav-link__lower" to="/subscribers">Subscribers</router-link>
            </span>
            <div class="vert-border"></div>
            <span class="nav-link__upper--container wide">
                <router-link class="nav-link nav-link__lower" to="/partnerships">Partnerships</router-link>
            </span>
            <div class="vert-border"></div>
            <span class="nav-link__upper--container wide">
                <router-link class="nav-link nav-link__lower" to="/contacts">Contact</router-link>
            </span>
        </nav>
      
            
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.nav {
    position: sticky;
    top: 0;
    right: 0;
}

.top-bar {
    
    background-color: #0d0d0d;
    height: 3.5rem;
    display: block;
    width: 100%;
}
.bot-bar {
    background-color: rgba(0,0,0, .5);
    height: 3rem;
    display: block;
    width: 100%;
}

.nav-menu {
    font-size: 14px;
    line-height: 30px;

    &__upper {
        position: absolute;
        top: 9%;
        left: 24%;
        width: 65%;
        max-width: 1024px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    &__lower {
        position: absolute;
        top: 54%;
        left: 25%;
        width: 60%;
        max-width: 1024px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }

}

.nav-logo {
    position: absolute;
    top: 12%;
    left: 15%;
    width: 10%;    
    transition: all .4s;

    &__svg {
        width: 80%;
    }

    :hover {
        filter: opacity(80%);
    }
}

.vert-border {
    width: 1px;
    height: 30px;
    background: $red;
}

.nav-link {
        color: white;
        text-decoration: none;
        text-transform: uppercase;

    &__upper {
        width: 100%;
        list-style-type: none;
        display: flex;
        align-items: center;

        &--text {
            transition: all .4s;
        }

        &:hover &--text, &:hover &.icon {
            color: grey;
            border-bottom: 1px solid grey;
        }

        &--container {
            // border: 1px solid green;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
.wide {
    width: 100%;
    padding: 1%  0;

    &:hover {
        background: red;
    }
}


.ghost {
    background: transparent;
}

.icon {
    width: 12%;
    margin-left: 10%;
}
</style>