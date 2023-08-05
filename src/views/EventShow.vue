<template>
  <div>
    <h1>Show events</h1>
    <p>Welcome to {{ eventname }}</p>
  </div>
</template>

<script>
export default {
  props: ["eventname"],
};
</script>
