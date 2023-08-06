<template>
  <div>
    <h1>Show events</h1>
    <p>Welcome to #{{ event.title }}</p>
  </div>
</template>

<script>
import EventService from "@/services/EventService";
export default {
  props: ["id"],
  data() {
    return {
      event: {},
    };
  },
  created() {
    EventService.getEvent(this.id)
      .then((Response) => {
        this.event = Response.data;
      })
      .catch((error) => {
        console.log("Error:", error.Response);
      });
  },
};
</script>
