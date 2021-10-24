const app = Vue.createApp({
  data() {
    return {
      sBoxSelected: "",
    };
  },
  computed: {
    boxEClasses() {
      return { active: this.sBoxSelected === "E" ? true : false };
    },
    boxFClasses() {
      return { active: this.sBoxSelected === "F" ? true : false };
    },
  },
  methods: {
    fnOnBoxSelected(sSelectedBox) {
      this.sBoxSelected = sSelectedBox;
    },
  },
});

app.mount("#styling");
