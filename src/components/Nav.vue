<template>
    <div class="nav">
        <div class="top-bar"></div>
        <div class="bot-bar"></div>
        <div class="nav-logo">
            <a href="/"><img class="nav-logo__svg" src="../assets/nav/logo.svg" alt=""></a>
        </div>
        <nav class="nav-menu nav-menu__upper">
            <router-link class="nav-link nav-link__upper" to="/search">
                <span class="nav-link__container">
                    <div class="nav-link__container--text">Search</div>  
                    <img class="icon" src="../assets/nav/search.svg" alt="">
                </span>
            </router-link>
            <router-link class="nav-link nav-link__upper" to="/payments">
            <span class="nav-link__container">
                <div class="nav-link__container--text">Add Funds</div>  
                <img class="icon" src="../assets/nav/payments.svg" alt="">
            </span>
            </router-link>
            <router-link class="nav-link nav-link__upper" to="/account">
            <span class="nav-link__container">
                <div class="nav-link__container--text">My V-tell</div>  
                <img class="icon" src="../assets/nav/account.svg" alt="">
            </span>
            </router-link>
            <router-link class="nav-link nav-link__upper" to="/cart">
            <span class="nav-link__container">
                <div class="nav-link__container--text">Cart</div>  
                <img class="icon" src="../assets/nav/cart.svg" alt="">
            </span>    
            </router-link>
        </nav>
        <nav class="nav-menu nav-menu__lower">
            <span class="nav-link__root-container">
                <router-link class="nav-link nav-link__root" to="/about">About</router-link>
                <div class="drop-down">
                    <div class="drop-down__inner">
                        <span class="nav-link__container">
                            <router-link class="nav-link nav-link__drop" to="/about"><span class="dot"></span>About V-Tell</router-link>
                        </span>
                        <span class="nav-link__container">
                            <router-link class="nav-link nav-link__drop" to="/about"><span class="dot"></span>News</router-link>
                        </span>
                        <span class="nav-link__container">
                            <router-link class="nav-link nav-link__drop" to="/about"><span class="dot"></span>Press Center</router-link>
                        </span>
                    </div>
                </div>
            </span>

            <div class="vert-border"></div>

            <span class="nav-link__root-container">
                <router-link class="nav-link nav-link__root"  to="/tariffs">Tariffs</router-link>
                <div class="drop-down">
                    <div class="drop-down__inner">
                        <span class="nav-link__container">
                            <router-link class="nav-link nav-link__drop" to="/about"><span class="dot"></span>All Tariffs</router-link>
                        </span>
                        <span class="nav-link__container">
                            <router-link class="nav-link nav-link__drop" to="/about"><span class="dot"></span>V-1</router-link>
                        </span>
                        <span class="nav-link__container">
                            <router-link class="nav-link nav-link__drop" to="/about"><span class="dot"></span>V-2</router-link>
                        </span>
                        <span class="nav-link__container">
                            <router-link class="nav-link nav-link__drop" to="/about"><span class="dot"></span>V-3</router-link>
                        </span>
                        <span class="nav-link__container">
                            <router-link class="nav-link nav-link__drop" to="/about"><span class="dot"></span>V-Max</router-link>
                        </span>
                        <span class="nav-link__container">
                            <router-link class="nav-link nav-link__drop" to="/about"><span class="dot"></span>Archive Tariffs</router-link>
                        </span>
                    </div>
                </div>
            </span>

            <div class="vert-border"></div>

            <span class="nav-link__root-container ">
                <router-link class="nav-link nav-link__root"  to="/tariffs">Subscribers</router-link>
                <div class="drop-down">
                    <div class="drop-down__inner">
                        <span class="nav-link__container">
                            <router-link class="nav-link nav-link__drop" to="/about"><span class="dot"></span>Advantages of V-tell</router-link>
                        </span>
                        <span class="nav-link__container">
                            <router-link class="nav-link nav-link__drop" to="/about"><span class="dot"></span>Coverage Map</router-link>
                        </span>
                        <span class="nav-link__container">
                            <router-link class="nav-link nav-link__drop" to="/about"><span class="dot"></span>Settings</router-link>
                        </span>
                        <span class="nav-link__container">
                            <router-link class="nav-link nav-link__drop" to="/about"><span class="dot"></span>FAQ</router-link>
                        </span>
                        <span class="nav-link__container">
                            <router-link class="nav-link nav-link__drop" to="/about"><span class="dot"></span>Advantages List</router-link>
                        </span>
                        <span class="nav-link__container">
                            <router-link class="nav-link nav-link__drop" to="/about"><span class="dot"></span>Corporate Services</router-link>
                        </span>
                    </div>
                </div>
            </span>

            <div class="vert-border"></div>

            <span class="nav-link__root-container ">
                <router-link class="nav-link nav-link__root" to="/partnerships">Partnerships</router-link>
            </span>

            <div class="vert-border"></div>

            <span class="nav-link__root-container">
                <router-link class="nav-link nav-link__root" to="/about">About</router-link>
                <div class="drop-down">
                    <div class="drop-down__inner">
                        <span class="nav-link__container">
                            <router-link class="nav-link nav-link__drop" to="/about"><span class="dot"></span>Office</router-link>
                        </span>
                        <span class="nav-link__container">
                            <router-link class="nav-link nav-link__drop" to="/about"><span class="dot"></span>Customer Care Service</router-link>
                        </span>
                    </div>
                </div>
        
            </span>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hover: false
        }
    }
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
    line-height: 16px;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    &__upper {
        position: absolute;
        top: 10%;
        left: 22%;
        width: 63%;
    }

    &__lower {
        position: absolute;
        top: 54%;
        left: 26%;
        width: 55%;
    }
}

.nav-logo {
    position: absolute;
    top: 12%;
    left: 16%;
    width: 10%;    
    transition: all .4s;

    &__svg {
        width: 80%;
        transition: all .4s;
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

.icon {
    width: 12%;
    margin-left: 10%;
}

.nav-link {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        z-index: 2;

        &__container {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            &--text {
                margin-top: .2rem;
                border-bottom: 1px solid transparent;
                transition: all .4s;

                &:hover {
                    color: grey;
                    border-bottom: 1px solid grey;
                }
            }
        }

        &__root-container {
            // border: 1px solid green;
            padding: 16px 0;
            width: 95%;
            position: relative;
            z-index: 0;
            cursor: pointer;

            &:hover, &:hover .nav-link__root {
                background: rgba(0,0,0, .8);
                color: $red;
            }

            &:hover > .drop-down {
                // background: rgba(0,0,0, .3);
                color: red;
                display: block;
                z-index: 2;
            }
            &:hover .nav-link__root {
                z-index: 9;
            }
        }  

        &__drop {
            width: 100%;
            height: auto;
            padding: 9px 0;
            font-size: 11px;
            line-height: 16px;
            text-align: left;
            padding-left: .4rem;

            &:hover {
                width: 100%;
                background: $red;
            }

            &:hover .dot {
                // width: 100%;
                background: black;
            }
        }
}

.drop-down {
    z-index: -1;
    width: 100%;
    // border: 1px solid green;
    
    background: rgba(0,0,0, .8);
    
    position: absolute;
    top: 3rem;
    left: 0;
    
    
    display: none;
        
}

.dot {
    display: inline-block;
    height: 10px;
    width: 10px;
    background: $red;
    border-radius: 50%;
    margin-right: 5px;
    // z-index: 5;
}

</style>

