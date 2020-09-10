<template>
<div class="page">
    <div class="container">
        <PageCrumbs path="Cart" />
        <PageDivider title="Cart" />
       <div class="cart-page">
           <p>This page will be used by Zoom to display Cart Information</p>
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
@import '../scss/_utilities.scss';
@import '../scss/_page.scss';

.cart-page {
  color: white;
  text-align: center;
  margin-bottom: 9rem;
}



</style>
