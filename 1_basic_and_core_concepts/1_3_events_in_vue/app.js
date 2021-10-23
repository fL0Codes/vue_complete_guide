const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      sNameCached: "",
      sName: "",
    };
  },
  methods: {
    fnIncrementCounter(iNum) {
      this.counter = this.counter + iNum;
    },
    fnDecrementCounter(iNum) {
      this.counter = this.counter - iNum;
    },
    fnUpdateName(oEvent) {
      this.sNameCached = oEvent.target.value;
    },
    fnSetName(sLastName) {
      this.sName = `${this.sNameCached} ${sLastName}`;
    },
    fnSubmitForm() {
      alert("Submitted!");
    },
  },
});

app.mount("#events");
