<template>
  <ul>
    <active-user :user-name="user.name" :user-age="user.age"></active-user>
    <user-data @add-user="fnSetUserData"></user-data>
  </ul>
</template>

<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

export default {
  components: { ActiveUser, UserData },
  data() {
    return { user: {} };
  },
  methods: {
    fnSetUserData(oUserData) {
      this.user = oUserData;
    }
  }
};
</script>
