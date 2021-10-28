<template>
  <div>
    <div>
      <label>User Name</label>
      <input type="text" v-model="sUserName" />
    </div>
    <div>
      <label>User Age</label>
      <input type="text" v-model="sUserAge" />
    </div>
    <button @click="fnAddUser">Add User</button>
    <p v-if="bHasError">Please enter correct data!</p>
  </div>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      sUserName: "",
      sUserAge: "",
      bHasError: false
    };
  },
  methods: {
    fnAddUser() {
      if (!this.sUserName || !this.sUserAge) {
        this.bHasError = true;
        return;
      }

      this.bHasError = false;
      this.$emit("add-user", { name: this.sUserName, age: this.sUserAge });
    }
  }
};
</script>

<style></style>
