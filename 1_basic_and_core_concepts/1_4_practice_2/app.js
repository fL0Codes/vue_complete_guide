const app = Vue.createApp({
  data() {
    return {
      sUserInput: "",
      sUserInputConfirmed: "",
    };
  },
  methods: {
    fnOnButtonPressed(oEvent) {
      alert(`The '${oEvent.target.innerHTML}' button was pressed!`);
    },
    fnOnUserInput(oEvent) {
      this.sUserInput = oEvent.target.value;
    },
    fnOnUserInputConfirmed(oEvent) {
      this.sUserInputConfirmed = oEvent.target.value;
    },
  },
});

app.mount("#assignment");
