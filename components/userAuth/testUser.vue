<template>
  <div>

    {{siteName}}

  </div>
</template>

<script>
export default {
  computed: {
    siteName() {
      return this.$store.getters.getSiteName
    }
  },
}
</script>
