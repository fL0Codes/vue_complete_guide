<template>
  <li>
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
  </li>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true
    },
    userAge: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
