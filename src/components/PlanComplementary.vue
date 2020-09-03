<template>
<div class="plan-comp">
    <div class="plan-comp__title">"Multi Numbers</div>
    <div class="plan-comp__desc">This service allows the Subscriber to select telephone numbers of foreign countries from the available list. Additional MSISDN can be added by request.</div>
    <div class="plan-comp__title">"Default Numbers"</div>
    <div class="plan-comp__desc">Selected default number will be shown for every outgoing calls, except calls to countries whose phone numbers have been assigned to your SIM card.</div>
    <div class="plan-comp__title">Subscriber Capabilities</div>
    <div class="plan-comp__desc">
        <ul>
            <li>Create a local presence in whichever country is chosen for the HOME TARIFF PLAN.</li>
            <li>No need to change SIM cards when entering another country. V-Tell SIM card allows you to add and use numbers of any country worldwide, seamlessly.</li>
            <li>Business partners, relatives and friends around the world can call a local phone number, which has been assigned to the Subscribers, paying only their countries local calling rate.</li>
            <li>Subscribers can add multiple phone numbers of different countries to one SIM card. These are permanently assigned phone numbers, which can be deleted from the SIM card upon request.</li>
        </ul>
    </div>
    <div class="plan-comp__title">Package "20/20"</div>
    <div class="plan-comp__desc">Add 20 hours of calls and 20 GB of mobile Internet to your V-2 tariff plan for €32 or $40. The offer is valid for use of mobile services on the territory of the Russian Federation.</div>

</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.plan-comp {
    &__title {
        color: $red;
        font-size: 20px;
        margin: 1rem 0;
    }
    &__desc {
        color: white;
        font-size: 15px;
        line-height: 21px;
        margin: 1rem 0;

        & li {
            margin: .3rem 0;
        }
    }
}

</style>