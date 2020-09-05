<template>
<div class="page">
    <div class="container">
        <PageCrumbs path="Coverage Map" />
        <PageDivider title="Coverage Map" />
        <div class="coverage__top-bar">
           <div class="coverage__top-bar--indicator">HOME ZONE</div>
           <div class="coverage__top-bar--search"><font-awesome-icon :icon="['fa', 'search']" /></div>
        </div>
        <div class="coverage__map-container">
            <svg class="coverage__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.68 78.47">
                <path d="M0,39.1,22.29.5A1,1,0,0,1,23.65.13l2.53,1.46A1,1,0,0,1,26.55,3L5.61,39.23,26.55,75.51a1,1,0,0,1-.37,1.36l-2.53,1.46A1,1,0,0,1,22.29,78L0,39.36" fill="#159846"/>
            </svg>
            <div class="coverage__map-container--inner">
                <Map />

            </div>
            <svg class="coverage__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.68 78.47">
                <path d="M26.68,39.1,4.4.5A1,1,0,0,0,3,.13L.5,1.59A1,1,0,0,0,.13,3l21,36.27L.13,75.51A1,1,0,0,0,.5,76.87L3,78.33A1,1,0,0,0,4.4,78L26.68,39.36" fill="#159846"/>
            </svg>
       </div>
       <div class="coverage__indicators">
           <span :class="{activeMap: mapIndex == 1}"></span>
           <span :class="{activeMap: mapIndex == 2}"></span>
           <span :class="{activeMap: mapIndex == 3}"></span>
       </div>
       <div class="coverage__countries">
           <p>Austria Belgium Brazil Bulgaria Canada Chech Republic Croatia Cyprus Denmark Dominican Republic EgyptF rance French Guiana Germany Gibraltar Greece Guadeloupe Hungary Iceland Ireland Israel Italy Latvia Liechtenstein Lithuania Luxembourg Malta Martinique Mexico Monaco Netherlands Norway Poland Portugal Puerto Rico RussiaS ingapore SlovakiaSouth Korea Spain Sweden SwitzerlandU nited KingdomU nited States of America United States Virgin Islands</p> 
       </div>
       <div class="coverage__desc">
           <p>V-Tell’s Roaming-Free Mobile Systems have dissolved country borders, allowing V-Tell Subscribers to make calls, access internet and send SMS messages from any part of the world, as if they were in their home country. A solo V-Tell SIM Card allows Subscribers to have an unlimited amount of permanently active phone numbers from over 77 countries. V-Tell’s quality of service is guaranteed by its own personal telecommunication infrastructure and partnerships with world’s leading mobile network operators.</p>
           <p>For people who live outside their home country, V-Tell’s services bring unique values, compared to local mobile network operators. Relatives and friends located in different countries do not have to make international calls if the V-Tell Subscriber has activated those countries local phone numbers.</p>
           <p>Detailed information about tariffs you will find here.</p>
       </div>
    </div>
</div>

</template>
<script>
import PageDivider from '@/components/PageDivider';
import PageCrumbs from '@/components/PageCrumbs';
import Map from '@/components/Map';
export default {
    components: {PageDivider, PageCrumbs, Map},
    data() {
        return {
            mapIndex: 1
        }
    }
}
</script>
<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';
@import '../scss/_utilities.scss';
@import '../scss/_page.scss';

.coverage {
    &__arrow {
        fill: #ffffff !important;
        width: 1rem;
    }

    &__top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;

        &--indicator {
            color: rgb(0, 152, 70);
            font-size: 22px;
        }

        &--search {
            color: rgb(0, 152, 70);
            font-size: 25px;
        }
    }

    &__map-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__indicators {
        display: flex;
        justify-content: center;
        align-items: center;

        & span {
            display: block;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            background: #333;
            margin: 2rem 1rem;
        }
    }
    &__countries {
        margin-bottom: 2rem;
        & p {
            color: white;
            font-size: 16px;
            line-height: 26.6px;
             word-spacing: 5px;
        }
    }
    &__desc {
        padding: 56px;
        margin: 28px 0;
        background: rgba(252, 252, 252, 0.25);
        margin-bottom: 8rem;
        & p {
            color: white;
            font-size: 16px;
            line-height: 26.6px;
            margin: 1rem;
        }
    }
}

.activeMap {
    background: rgb(0, 152, 70) !important;
    height: 25px !important;
    width: 25px !important;

}


</style>
