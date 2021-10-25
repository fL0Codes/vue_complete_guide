const app = Vue.createApp({});

app.component("friend-contact", {
  template: `
    <li>
    <h2>{{ friend.name }}</h2>
    <button @click="fnToggleDetails">{{ bShowDetails ? "Hide" : "Show" }} Details</button>
    <ul v-if="bShowDetails">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.mail }} </li>
    </ul>
    </li>
    `,
  data() {
    return {
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        mail: "manuel@localhost.com"
      },
      bShowDetails: false
    };
  },
  methods: {
    fnToggleDetails() {
      this.bShowDetails = !this.bShowDetails;
    }
  }
});

app.mount("#app");
