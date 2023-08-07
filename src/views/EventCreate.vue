<template>
  <div>
    <h1>{{ userName }}</h1>
    <p>This is the {{ userId }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.state.user.name;
    },
    userId() {
      return this.$store.state.user.id;
    },
  },
};
</script>

<style scoped></style>
