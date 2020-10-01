<template>
<div class="page">
    <div class="container">
        <PageCrumbs path="Coverage Map" />
        <PageDivider title="Coverage Map" />
        <div class="coverage__top-bar">
           <div class="coverage__top-bar--indicator" :class="{blueHighlight: mapIndex == 2, redHighlight: mapIndex == 3}">
               <span v-if="mapIndex ==1">HOME ZONE</span>
               <span v-if="mapIndex ==2">ADDITIONAL PHONE NUMBERS TO ADD THEM TO YOUR PACKAGE</span>
               <span v-if="mapIndex ==3">COUNTRIES WHERE V-TELL WORKS</span>
               
            </div>
           <div class="coverage__top-bar--search" :class="{blueHighlight: mapIndex == 2, redHighlight: mapIndex == 3}"><font-awesome-icon :icon="['fa', 'search']" /></div>
        </div>
        <div class="coverage__map-container">
            <svg @click="mapShift(0)"  class="coverage__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.68 78.47">
                <path d="M0,39.1,22.29.5A1,1,0,0,1,23.65.13l2.53,1.46A1,1,0,0,1,26.55,3L5.61,39.23,26.55,75.51a1,1,0,0,1-.37,1.36l-2.53,1.46A1,1,0,0,1,22.29,78L0,39.36" :class="{greenHighlight: mapIndex == 1, blueHighlight: mapIndex == 2, redHighlight: mapIndex == 3}"/>
            </svg>
            
            <div class="coverage__map-container--inner">
                <Map :mapIndex="`${mapIndex}`"/>
            </div>
            <svg @click="mapShift(1)" class="coverage__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.68 78.47">
                <path d="M26.68,39.1,4.4.5A1,1,0,0,0,3,.13L.5,1.59A1,1,0,0,0,.13,3l21,36.27L.13,75.51A1,1,0,0,0,.5,76.87L3,78.33A1,1,0,0,0,4.4,78L26.68,39.36" 
                 :class="{greenHighlight: mapIndex == 1, blueHighlight: mapIndex == 2, redHighlight: mapIndex == 3}"/>
            </svg>
       </div>
       <div class="coverage__indicators">
           <span :class="{activeMap: mapIndex == 1}" @click.stop="mapIndex = 1"></span>
           <span :class="{activeMapBlue: mapIndex == 2}" @click.stop="mapIndex = 2"></span>
           <span :class="{activeMapRed: mapIndex == 3}" @click.stop="mapIndex = 3"></span>
       </div>
       <div class="coverage__countries">
           <p v-if="mapIndex == 1"><span class="block block-green"></span>Austria Belgium Brazil Bulgaria Canada Chech Republic Croatia Cyprus Denmark Dominican Republic Egypt France French Guiana Germany Gibraltar Greece Guadeloupe Hungary Iceland Ireland Israel Italy Latvia Liechtenstein Lithuania Luxembourg Malta Martinique Mexico Monaco Netherlands Norway Poland Portugal Puerto Rico RussiaS ingapore SlovakiaSouth Korea Spain Sweden Switzerland United Kingdom Uited States of America United States Virgin Islands</p> 
           <p v-if="mapIndex == 2"><span class="block block-blue"></span>Albania Angola Argentina Australia Austria Belarus Belgium Brazil Bulgaria Cambodia Canada Cayman Islands Chech Republic China Colombia Costa Rica Croatia Cyprus Denmark Dominican Republic El Salvador Estonia Finland  France Georgia Germany Ghana Greece Grenada Guatemala Hong Kong Hungary Iceland Ireland Israel Italy Jamaica Japan Kazakhstan Kenya Latvia Lithuania Luxembourg Macao Malaysia Malta Mexico Netherlands New Zealand Nigeria Norway Panama Peru Philippines Poland Portugal Puerto Rico Romania Russia Singapore Slovakia Slovenia South Africa South Korea Spain Sweden Switzerland Thailand Trinidad and Tobago Turkey Ukraine United KingdomUnited States of America Venezuela Vietnam</p> 
           <p v-if="mapIndex == 3"><span class="block block-red"></span>Afghanistan Albania Algeria Andorra Angola Anguilla Antigua and Barbuda Argentina Armenia Aruba Australia Austria Azerbaijan Bahamas Bahrain Bangladesh Barbados Belarus Belgium Belize Bermuda Bhutan Bolivia Bosnia and Herzegovina Botswana Brazil British Virgin Islands Brunei Bulgaria Burkina Faso Burundi Cabo Verde Cambodia Cameroon Canada Cayman Islands Central African Republic Chad Chech Republic Chile China Colombia Comoros Costa Rica Cote d`Ivoire Croatia Cuba Cyprus Democratic Republic of the Congo Denmark Djibouti Dominican Republic Dominika Ecuador Egypt El Salvador Equatorial Guinea Estonia Eswatini (Swaziland) Ethiopia Faroe Islands Fiji Finland France French Guiana French Polynesia Gabon Gambia Georgia Germany Ghana Gibraltar Greece Grenada Guadeloupe Guam Guatemala Guernsey Guinea Guinea-Bissau Guyana Haiti Honduras Hong Kong Hungary Iceland India Indonesia Iran Iraq Ireland Isle of Man Israel Italy Jamaica Japan Jersey Jordan Kazakhstan Kenya Kiribati Kosovo Kuwait Kyrgyzstan Laos Latvia Lebanon Lesotho Liberia Libya Liechtenstein Lithuania Luxembourg Macao Madagascar Malawi Malaysia Mali Malta Martinique Mauritania Mauritius Mayotte Mexico Moldova Monaco Mongolia Montenegro Montserrat Morocco Mozambique Myanmar Namibia Nauru Nepal Netherlands Netherlands Antilles (Saba, Curacao, Bonaire, Sint Eustatius, Saint Martin) New Zealand Nicaragua Niger Nigeria North Macedonia Northen Mariana Islands Norway Oman Pakistan Palestine State Panama Papua New Guinea Paraguay Peru Philippines Poland Portugal Puerto Rico Qatar Republic of the CongoReunion (La) Romania Russia Rwanda Republic of Saint Barthélemy (French West Indies) Saint Kitts and Nevis Saint Lucia Saint Martin (French West Indies)Saint Vincent and the Grenadines Samoa Saudi Arabia Senegal Serbia Seychelles Sierra Leone Singapore Slovakia Slovenia Somalia South Africa South Korea South Sudan Spain Sri Lanka Sudan Suriname Sweden Switzerland Syria Taiwan Tajikistan Tanzania Thailand Timor-Leste Togo Trinidad and Tobago Tunisia Turkey Turkmenistan Turks and Caicos Islands Uganda Ukraine United Arab Emirates United Kingdom United States of America United States Virgin Islands Uruguay Uzbekistan Vanuatu Venezuela Vietnam Yemen Zambia Zimbabwe</p> 
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
    },
    methods: {
        mapShift(num) {
            if(num === 1) {
                if(this.mapIndex == 3) {
                    this.mapIndex = 1;
                } else {
                    this.mapIndex++;
                }
            } else if(num == 0) {
                if(this.mapIndex == 1) {
                    this.mapIndex = 3;
                } else {
                    this.mapIndex--;
                }
            }
        }
    },
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


.coverage {
    &__arrow {
        cursor: pointer;
        transform: scale(1);
        transition: all .4s;
        width: 1rem;

        &:hover {
                filter: opacity(50%);
                transform: scale(1.2);
            }
    }

    &__top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        @media(max-width: 900px) {
            margin: 0 2rem;
        }

        &--indicator {
            color: rgb(0, 152, 70);
            font-size: 22px;
            text-align: left; 

            @media(max-width: 900px) {
                font-size: 16px;
                width: 80%;
                margin-bottom: 1rem;
            }
        }

        &--search {
            color: rgb(0, 152, 70);
            font-size: 25px;
            @media(max-width: 900px) {
                font-size: 16px;
            }
        }
    }

    &__map-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    &__indicators {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 1rem;

        & span {
            cursor: pointer;
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
        @media(max-width: 900px) {
            margin-left: 2rem;
            margin-right: 2rem;
        }
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
    &Blue {
        background: rgb(76,134,227) !important;
        height: 25px !important;
        width: 25px !important;
    }
    &Red {
        background: rgb(230, 57, 55) !important;
        height: 25px !important;
        width: 25px !important;
    }
}

.greenHighlight {
    fill: rgb(0, 152, 70);
    color:  rgb(0, 152, 70) !important;
}

.blueHighlight {
    fill: rgb(76,134,227);
    color:  rgb(76,134,227) !important;
}
.redHighlight {
    fill: rgb(230, 57, 55);
    color: rgb(230, 57, 55) !important;
}
.block {                                                                    
    display: inline-block;
    margin-right: .5rem;
    height: 12px !important;
    width: 12px !important;

    &-green {
        background: rgb(0, 152, 70) !important;
    }

    &-blue {
        background: rgb(76,134,227) !important;
    }

    &-red {
        background: rgb(230, 57, 55) !important;
    }
}
</style>
