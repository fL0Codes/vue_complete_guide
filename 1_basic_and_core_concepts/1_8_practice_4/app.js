const app = Vue.createApp({
  data() {
    return {
      sUserInput: "",
      bIsVisible: true,
      sBackgroundColor: ""
    };
  },
  computed: {
    cpClassUserInputStyle() {
      return { [`${this.sUserInput}`]: true };
    },
    cpClassToggleVisibility() {
      return { visible: this.bIsVisible, hidden: !this.bIsVisible };
    },
    cpBackgroundColor() {
      return { backgroundColor: this.sBackgroundColor };
    }
  },
  methods: {
    fnOnButtonClicked() {
      this.bIsVisible = !this.bIsVisible;
    }
  }
});

app.mount("#assignment");
