<template>
<div class="page">
  <div class="container">
    <PageCrumbs path="News" />
    <PageDivider title="News" />
    <div class="page__block news-page__margin">
      <div class="page__block--title">Service Limitation in Italy</div>
      <div class="page__block--cube">
        <img src="../assets/pages/cube-tab.png" alt="">
      </div>
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

.news-page {
    &__margin {
        margin-bottom: calc(100% - 40rem);
    }
}

</style>
