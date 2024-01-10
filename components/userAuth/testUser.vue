<template>
  <div>
    {{ siteName }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getSiteName']),
    siteName() {
      return this.getSiteName();
    },
  },
};
</script>
