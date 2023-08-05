<template>
  <div>
    <h1>List events</h1>
    <router-link :to="{ name: 'event-show', params: { id: '1' } }"
      >Showing Event</router-link
    >
  </div>
</template>
