<template>
  <div>
      <Hero />
      <Privilege />
      <Advantages />
      <About />
      <Tariffs />
      <Sim />
      <Countries />
  </div>
</template>

<script>
// @ is an alias to /src
import Countries from '@/components/Countries'
import Sim from '@/components/Sim'
import Tariffs from '@/components/Tariffs'
import About from '@/components/About'
import Advantages from '@/components/Advantages'
import Privilege from '@/components/Privilege'
import Hero from '@/components/Hero'

export default {
    name: "home",
    components: {
    Hero,
    Privilege,
    Advantages,
    About,
    Tariffs,
    Sim,
    Countries
    },
    mounted () {
        window.scrollTo(0, 0);
    }
};
</script>
