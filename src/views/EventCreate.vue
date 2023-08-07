<template>
  <div>
    <h1>{{ user.name }}</h1>
    <p>This is the {{ user.id }}</p>
    <ul>
      <li v-for="category in categories" :key="category">{{ category }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    user: "user",
    categories: "categories",
  }),
};
</script>

<style scoped></style>
