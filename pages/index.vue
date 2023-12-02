<template>
  <!-- <Hero/> -->
  
  <signIn/>
</template>

<script>
import Hero from "@/components/hero.vue";
import signIn from "@/components/signIn.vue";
export default {
  name: 'IndexPage',
  components: {
    Hero,
    signIn
  },
};
</script>
