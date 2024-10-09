<template>
  <div>
    <!-- Header -->
    <header>
      <hmheader />
    </header>
  </div>
</template>

<script>
import hmheader from "./Header.vue";

export default {
  name: "Home", // Capitalized component name for consistency
  components: {
    hmheader,
  },
};
</script>

<style>
/* Add your styles here if needed */
</style>
