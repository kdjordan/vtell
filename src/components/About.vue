<template>
<div>
    <HPageDivider title="About" />
    <div class="about mb-3">
        <div class="container">
            <p>V-Tell is a rapidly growing Telecommunication company acting as an International Mobile Operator, devoted to provide services and innovative technology to customers across the globe.
            </p>
            <div class="about__title">WHY V-TELL ?</div>
            <p class="mb-1">Having its own technological infrastructure, including HLR, GMSC and GGSN; its partnership by contract with the largest GMNO; its license agreement with the GSM Association; and its membership with the ITU – V-Tell has created an ultimate, unlimited communication system by erasing borders among countries via roam-free network allowing customers to access voice, SMS and worldwide internet service.
            </p>
            <p class="mb-4">Having a solo V-Tell SIM card, the Subscriber has unlimited quantity of personal phone numbers from any country, that are permanently active on a single device. Subscribers may also port their existing personal phone numbers from any mobile operator and country to their V-Tell SIM Card. By providing a local phone number to partners and customers, V-Tell Subscribers may run their businesses from any part of the world. The called party always receives a V-Tell Subscribers’ calls from his or her local mobile phone number, no matter what country the V-Tell Subscriber is currently located in.
            </p>
            <button class="btn-about mb-4"  @click.prevent="toggleButton()" >{{buttonMssg}}&nbsp;&nbsp;&nbsp;&nbsp;<span style="padding-bottom: 8px;">{{buttonMssgExt}}</span></button>
            <div v-if="buttonActive">
                <p class="mb-1">Entrepreneurs having International businesses and frequent travelers</p>  
                <p class="mb-1">V-Tell brings outstanding benefits for international frequent travelers and entrepreneurs.</p> 
                <p class="mb-1">Having a local phone number in a foreign country makes travelers feel at home while visiting, or conducting business, as well as, awards substantial benefits when using local services in different countries (i.e. ordering a taxi, delivery service, hotels, etc.).</p>
                <p class="mb-1">International businesspeople have large networks across different countries and they have to communicate regularly with their foreign partners. Giving foreign partners a local mobile phone number in their country is a demonstration of solid business intentions and an initial step for productive cooperation. One’s business partners would eagerly call a familiar local phone number and avoid extra chargers for international calls. Activating as many permanent phone numbers as needed for each required country brings sufficient value for businesspeople who need to be constantly available for their business partners on any phone number with the highest quality network connection worldwide.</p>
                <p class="mb-1">International Students</p>
                <p class="mb-1">V-tell provides telecommunication services in all top host countries and most of those countries are V-Tell's home zone. For those students and parents who are located overseas; comfort, convenience and simplicity are THE major benefits when compared to any local mobile operator. With V-Tell services there are no boundaries having an access to your child via (globally) international mobile communication and online.</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import HPageDivider from '@/components/HPageDivider';
export default {
    components: {HPageDivider},
    data() {
        return {
            buttonMssg: 'SHOW MORE',
            buttonMssgExt: '...',
            buttonActive: false
        }
    },
    methods: {
        toggleButton() {
            if (this.buttonActive) {
                this.buttonActive = false;
                this.buttonMssg = "SHOW MORE";
                this.buttonMssgExt = "...";
            } else {
                this.buttonActive = true;
                 this.buttonMssg = "HIDE";
                this.buttonMssgExt = "X";
            }
        }
    }

}
</script>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';

.btn-about {
    cursor: pointer;
    color: rgba(242, 242, 242, 0.75);
    background: transparent;
    border: 1px solid $grey;
    border-radius: 3px;
    padding: 10px 15px;
    min-width: 150px;
    transition: all .4s ease;

    &:hover {
        background: $red;
        color: white;
        border: 1px solid $red;
    }
}

.about {
    display: flex;
    font-size: 16px;
    line-height: 24px;
    justify-content: center;

    @media(max-width: 900px) {
        margin: 0 1.5rem;
    }

    &__title {
        margin: 1rem 0;
        color: rgba(242, 242, 242, .5);
        text-align: left;
        font-size: 18px;
    }
}

p {
    color: rgba(252, 252, 252, 0.8);
    text-align: left;
}


</style>