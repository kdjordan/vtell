<template>
<div class="page">
    <div class="container">
        <div class="crumbs">
            <img class="crumbs__img" src="../assets/back-button.png" alt="">
            <div class="crumbs__path">/&nbsp;<a href="/">HOME</a>&nbsp;/&nbsp;CONTACT US</div>
        </div>
        <div class="page-divider mb-3">  
            <img class="page-divider__cube" src="../assets/SVG/cube.svg" alt="">
            <div class="page-divider__title">CONTACTS</div>
        </div> 
        <div class="contacts">
            <div>
                <div class="contacts__title">GLOBEX TELEСOM GROUP LIMITED</div>
                <div class="contacts__addr">Unit 1016, 10/F., Star House, 3 Salisbury Road,<br>Tsimshatsui, Kowloon, Hong Kong</div>
            </div>
            <div>
                <div class="contacts__title">GLOTELL US, CORP.</div>
                <div class="contacts__addr">1001 North Federal Hwy., Suite 102<br>Hallandale Beach, FL 33009, USA</div>
            </div>
            <div>
                <div class="contacts__title">SKYTELL FZ, LLC.</div>
                <div class="contacts__addr">P.O. Box 73030<br>Dubai Internet City, Dubai, UAE</div>
            </div>
            <div>
                <div class="contacts__title">SkyTell A.G.</div>
                <div class="contacts__addr">Gotthardstrasse 3<br>6300 Zug, Switzerland</div>
            </div>
        </div>
    </div>
</div>

</template>
<script>

</script>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_base.scss';
@import '../scss/_divider.scss';
@import '../scss/_utilities.scss';
@import '../scss/_page.scss';

.contacts {
    background: rgba(252, 252, 252, 0.25);
    box-shadow: 0 0 6em rgba(31, 31, 31, 0.25) inset;
    padding: 56px;
    margin: 28px 0;
    text-align: left;
    color: $white;

    & > div {
        margin: 1.5rem 0;
    }

    &__title {
        font-style: italic;
        margin-bottom: .6rem
    }

    &__addr {
        line-height: 25px;
    }
}
</style>
