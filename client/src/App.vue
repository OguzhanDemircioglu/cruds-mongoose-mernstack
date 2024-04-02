<template>
  <div>
    <Navbar/>
  <router-view />
  </div>
</template>

<style Lang="scss">

</style>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
}
</script>