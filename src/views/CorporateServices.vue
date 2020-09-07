<template>
<div class="page">
    <div class="container">
        <PageCrumbs path="CORPORATE SERVICES" />
        <PageDivider title="CORPORATE SERVICES" />
        <div class="corporate">
            <div class="corporate__desc">
                <p>If your business reaches way beyond local borders and your clients are located in every part of the world - search no longer. You can always rely on a multi-number contact center provided by V-Tell.</p>
                <p>This service helps to attach any numbers of any country to your switch so locals are more likely to pick up their phones as long as they see their local number displayed to them. Besides, to the initiator of the call such calls are also being treated as local.</p>
                <p>In case you need to get in touch with your customer he or she will always see your number as local in their county of residence. V-Tell’s adaptive CLI service will make sure that you are always local in every country of the world.</p>
                <p>Here’s another tip: people will be prone to accept the call if it comes for a local mobile number instead of a fixed line number. Because it will look more personal to them and thus will have the higher probability of being picked up. Fixed line number are usually associated with some government or corporate facilities or services, which are not always enjoyable.</p>
                <p>Manage your business in a way it should be managed, do it from any part of the world independently from where your customers are located!</p>
            </div>
            <img src="../assets/pages/corpoorate.png" alt="">
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

.corporate {
    & p {
        margin: 1rem 0;
        font-size: 17px;
        line-height: 27px;
    }   

    & img {
        display: block;
        max-width: 960px;
        width: 100%;
        height: auto;
        margin-bottom: 3rem;
    }

    &__desc {
        padding: 56px;
        margin: 28px 0;
        background: rgba(252, 252, 252, 0.25);
        box-shadow: 0 0 6em rgba(31, 31, 31, 0.25) inset;
    }
}
</style>