<template>
<div>
    <section class="header" :class="{headerOpaque: addOpaqueBack}">
        <div class="top-bar"></div>
        <div class="nav-container">
            <div class="nav-logo" >
                <router-link to="/"><img class="nav-logo__svg" src="../assets/nav/logoSvg.svg" alt=""></router-link>
            </div>
            <div class="menu-container">
            <nav class="nav-menu nav-menu__upper">
                <router-link class="nav-link nav-link__upper" to="/" @click.native="launchSearchModal()">
                    <span class="nav-link__container">
                        <div class="nav-link__container--text">Search</div>  
                        <img class="icon" src="../assets/nav/search.svg" alt="">
                    </span>
                </router-link>
                <router-link class="nav-link nav-link__upper" to="/addfunds">
                    <span class="nav-link__container">
                        <router-link class="nav-link nav-link__container--text" to="/addfunds" >Add Funds</router-link>  
                        <img class="icon" src="../assets/nav/payments.svg" alt="">
                    </span>
                </router-link>
                <router-link class="nav-link nav-link__upper" to="/myvtell">
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
                                <router-link class="nav-link nav-link__drop" to="/news"><span class="dot"></span>News</router-link>
                            </span>
                            <span class="nav-link__container">
                                <router-link class="nav-link nav-link__drop" to="/press-center"><span class="dot"></span>Press Center</router-link>
                            </span>
                        </div>
                    </div>
                </span>

                <div class="vert-border"></div>

                <span class="nav-link__root-container">
                    <router-link class="nav-link nav-link__root"  to="/plans">Tariffs</router-link>
                    <div class="drop-down">
                        <div class="drop-down__inner">
                            <span class="nav-link__container">
                                <router-link class="nav-link nav-link__drop" to="/plans"><span class="dot"></span>All Tariffs</router-link>
                            </span>
                            <span class="nav-link__container">
                                <router-link class="nav-link nav-link__drop" to="/plan-v1"><span class="dot"></span>V-1</router-link>
                            </span>
                            <span class="nav-link__container">
                                <router-link class="nav-link nav-link__drop" to="/plan-v2"><span class="dot"></span>V-2</router-link>
                            </span>
                            <span class="nav-link__container">
                                <router-link class="nav-link nav-link__drop" to="/plan-v3"><span class="dot"></span>V-3</router-link>
                            </span>
                            <span class="nav-link__container">
                                <router-link class="nav-link nav-link__drop" to="/plan-vmax"><span class="dot"></span>V-Max</router-link>
                            </span>
                        </div>
                    </div>
                </span>

                <div class="vert-border"></div>

                <span class="nav-link__root-container ">
                    <router-link class="nav-link nav-link__root"  to="/advantages">Subscribers</router-link>
                    <div class="drop-down">
                        <div class="drop-down__inner">
                            <span class="nav-link__container">
                                <router-link class="nav-link nav-link__drop" to="/advantages"><span class="dot"></span>Advantages of V-tell</router-link>
                            </span>
                            <span class="nav-link__container">
                                <router-link class="nav-link nav-link__drop" to="/coverage-map"><span class="dot"></span>Coverage Map</router-link>
                            </span>
                            <span class="nav-link__container">
                                <router-link class="nav-link nav-link__drop" to="/settings"><span class="dot"></span>Settings</router-link>
                            </span>
                            <span class="nav-link__container">
                                <router-link class="nav-link nav-link__drop" to="/faq"><span class="dot"></span>FAQ</router-link>
                            </span>
                            <span class="nav-link__container">
                                <router-link class="nav-link nav-link__drop" to="/advantages-list/0"><span class="dot"></span>Advantages List</router-link>
                            </span>
                            <span class="nav-link__container">
                                <router-link class="nav-link nav-link__drop" to="/corporate-services"><span class="dot"></span>Corporate Services</router-link>
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
                    <router-link class="nav-link nav-link__root" to="/contact-us">Contacts</router-link>
                    <div class="drop-down">
                        <div class="drop-down__inner">
                            <span class="nav-link__container">
                                <router-link class="nav-link nav-link__drop" to="/contact-us"><span class="dot"></span>Office</router-link>
                            </span>
                            <span class="nav-link__container">
                                <router-link class="nav-link nav-link__drop" to="/customer-service"><span class="dot"></span>Customer Service</router-link>
                            </span>
                        </div>
                    </div>
                </span>
            </nav>
            </div>
        </div>
    </section>
    <nav class="mobile-nav">
        <div class="mobile-nav-header__left">
            <a href="/"><img class="mobile-nav__left--svg" src="../assets/nav/logo.svg" alt=""></a>
        </div>
        <div class="mobile-nav-header__right">
            <div class="mobile-burger" @click.prevent="mobileOpen = !mobileOpen">
                <span :class="{burgerOpenTop : !mobileOpen}"></span>
                <span :class="{burgerOpenMid : !mobileOpen}"></span>
                <span :class="{burgerOpenBot : !mobileOpen}"></span>
            </div>
        </div>
        <div class="mobile__overlay" :class="{slideOpen : mobileOpen}">
            <div class="mobile__overlay--inner">
                <router-link class="nav-link mobile__link" to="/about" @click.native="closeMobile()">
                    <span class="mobile__link--text">About Us</span>
                    <font-awesome-icon icon="angle-right" class="mobile-arrow"/>
                </router-link>
                <router-link class="nav-link mobile__link" to="/plans" @click.native="closeMobile()">
                    <span class="mobile__link--text">Tariffs</span>
                    <font-awesome-icon icon="angle-right" class="mobile-arrow"/>
                </router-link>
                <router-link class="nav-link mobile__link" to="/advantages" @click.native="closeMobile()">
                    <span class="mobile__link--text">Subscribers</span>
                    <font-awesome-icon icon="angle-right" class="mobile-arrow"/>
                </router-link>
                <router-link class="nav-link mobile__link" to="/partnerships" @click.native="closeMobile()">
                    <span class="mobile__link--text">Partnerships</span>
                </router-link>
                <router-link class="nav-link mobile__link" to="/contact-us" @click.native="closeMobile()">
                    <span class="mobile__link--text">Contacts</span>
                    <font-awesome-icon icon="angle-right" class="mobile-arrow"/>
                </router-link>
                <router-link class="nav-link mobile__link" to="/" @click.native="closeMobile()">
                    <span class="mobile__link--text">Search</span>
                    <img class="mobile-icon" src="../assets/nav/search.svg" alt="">
                </router-link>
                <router-link class="nav-link mobile__link" to="/addfunds" @click.native="closeMobile()">
                    <span class="mobile__link--text">Add Funds</span>
                    <img class="mobile-icon" src="../assets/nav/payments.svg" alt="">
                </router-link>
                <router-link class="nav-link mobile__link" to="/myvtell" @click.native="closeMobile()">
                    <span class="mobile__link--text">My V-Tell</span>
                    <img class="mobile-icon" src="../assets/nav/account.svg" alt="">
                </router-link>
                <router-link class="nav-link mobile__link" to="/" @click.native="closeMobile()">
                    <span class="mobile__link--text">Cart</span>
                    <img class="mobile-icon" src="../assets/nav/cart.svg" alt="">
                </router-link>
            </div>
        </div>
    </nav>
    <div v-if="searchModal" class="search-modal">
        <div class="search-modal__top">
            <div>SEARCH</div>
            <div @click.prevent="searchModal = false">&#10005;</div>
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
export default {
    data() {
        return {
            mobileOpen: true,
            addOpaqueBack: false,
            searchModal: false
        }
    },
    methods: {
        handleScroll (event) {
            if(window.scrollY > 10) {
                this.addOpaqueBack = true;
            } else {
                this.addOpaqueBack = false;
            }
        },
        closeMobile() {
            console.log('closing');
            this.mobileOpen = true;
        },
        launchSearchModal() {    
            console.log('clicked');
            this.searchModal = !this.searchModal;
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    }
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

.header {
    position: fixed;
    top: 0;
    right: 0;
    height: auto;
    width: auto;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99; 
    @media(max-width: 760px) {
        display: none;
    }
}

.headerOpaque {
    background-image: url('../assets/img/border.png');
    background-position: center;
}

.nav-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.nav-menu {
    font-size: .9rem;
    max-width: 1024px;
    display: flex;
    align-items: center;
    padding-top: .5rem;  

    &__upper {
        justify-content: space-between; 
    }

    &__lower {
        justify-content: space-evenly;
        margin-top: .2rem;    
    }
}

.nav-logo {
    z-index: 99;

    &__svg {
        width: 8rem;
        transition: all .4s;
    }

    :hover {
        filter: opacity(80%);
    }
}

.nav-link {
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        z-index: 2;

        & .icon {
            width: 16%;
            margin-left: 10%;
        }

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

        &__root {
            display: block;
            width: 100%;
            padding: 16px 0;
        }

        &__root-container {
            width: 95%;
            position: relative;
            z-index: 0;
            cursor: pointer;

            &:hover, &:hover .nav-link__root {
                background: rgba(0,0,0, .8);
                color: $red;
            }

            &:hover > .drop-down {
                color: $red;
                display: block;
                z-index: 2;
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
                background: black;
            }
        }
}

.drop-down {
    z-index: -1;
    width: 100%;
    background: rgba(0,0,0, .8);
    position: absolute;
    top: 3rem;
    left: 0;
    display: none;
}

.top-bar {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    background-color: #0d0d0d;
    height: 3.5rem;
    display: block;
    width: 100%;
}

.vert-border {
    width: 1px;
    height: 30px;
    background: $red;
}

.dot {
    display: inline-block;
    height: 10px;
    width: 10px;
    background: $red;
    border-radius: 50%;
    margin-right: 5px;
}

//**********************MOBILE STYLES************************/

.mobile-nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    background: rgba(0,0,0,.9);
    padding: .4rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 70px;

    @media(min-width: 760px) {
           display: none;
        }

    &__left {
        &--svg {
            width: 5.5rem;
        }
    }
}

.mobile-arrow {
    color: $red;
    font-size: 1.8rem;
    margin-left: 8px;
}

.mobile-burger {
    z-index: 1;
    width: 40px;
    height: 20px;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;

    & span {
        display: block;
        position: absolute;
        height: 4px;
        width: 100%;
        background: white;
        border-radius: 9px;
        opacity: 1;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
    }

    & span:nth-child(1) {
        top: 0px;
        transform-origin: left center;
    }

    & span:nth-child(2) {
        top: 10px;
        transform-origin: left center;
    }

    & span:nth-child(3) {
        top: 20px;
        transform-origin: left center;
    }
}

.slideOpen {
    left: -50rem !important;
}

.burgerOpen {

    &Top {
        top: -8px !important;
        right: 0px !important;
        transform: rotate(45deg) !important;
    }

    &Mid {
        width: 0% !important;
        opacity: 0 !important;
    }

    &Bot {
        transform: rotate(-45deg) !important;
    }
}

.mobile {
    &-icon {
        width: 1.6rem;
        margin-left: .5rem;
    }

    &__overlay {
        position: absolute;
        top: 4.6rem;
        left: 0rem;
        z-index: 20;
        background: rgba(0,0,0, .8);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        transition: all .4s;

        &--inner {
            position: absolute;
            top: .5rem;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            transition: all .4s;
        }
    }

    &__link {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 0 auto;
        font-size: 14px;
        margin: .3rem 0;
        &--text {
            padding-top: 3px;

            &--no-arrow  {
                margin: .4rem 0;
            }
        }
    }
}
//****************************END MOBILE****************************
</style>

