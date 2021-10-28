<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="fnShowDetails">
      {{ bDetailsVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="fnToggleFavorite">
      {{ isFavorite ? "Unset" : "Set" }} Favorite
    </button>
    <ul v-if="bDetailsVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAdress }}</li>
    </ul>
    <button @click="fnDeleteContact">Delete Contact</button>
  </li>
</template>

<script>
export default {
  //props: ["name", "phoneNumber", "emailAdress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAdress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  // To make other developers clear, which events are possibly emited by the component
  emits: ["toggle-favorite", "delete-contact"],
  // It is also possible to define validation logic for emitted events:
  // emits: {
  //   "toggle-favorite": function(id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn("Id argument is missing!");
  //       return false;
  //     }
  //   }
  // },
  data() {
    return {
      bDetailsVisible: false
      // Vue has a uni-directional data flow which means, that data passed from parent to
      // child CANNOT be modified. In this case we use the parent value to initialize
      // a new local component value. This local coponent value can then be modified by
      // the component. There is another way to achieve this which will be shown later..
      //bFriendIsFavorite: this.isFavorite
    };
  },
  methods: {
    fnShowDetails() {
      this.bDetailsVisible = !this.bDetailsVisible;
    },
    fnToggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
    fnDeleteContact() {
      this.$emit("delete-contact", this.id);
    }
  }
};
</script>
