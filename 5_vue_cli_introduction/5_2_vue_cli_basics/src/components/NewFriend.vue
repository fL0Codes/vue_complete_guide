<template>
  <form @submit.prevent="fnAddFriend">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <button>Add Contact</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredName: "",
      enteredPhone: "",
      enteredEmail: ""
    };
  },
  emits: ["add-friend-contact"],
  methods: {
    fnAddFriend() {
      const oNewContact = {
        name: this.enteredName,
        phone: this.enteredPhone,
        mail: this.enteredEmail,
        isFavorite: false
      };
      this.$emit("add-friend-contact", oNewContact);

      this.enteredName = "";
      this.enteredPhone = "";
      this.enteredEmail = "";
    }
  }
};
</script>
