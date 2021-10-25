const app = Vue.createApp({
  data() {
    return {
      aTasks: [],
      sTask: "",
      bListVisible: true,
    };
  },
  computed: {
    cpTogglButtonText() {
      return this.bListVisible ? "Hide List" : "Show List";
    },
  },
  methods: {
    fnAddTask() {
      this.aTasks.push(this.sTask);
      this.sTask = "";
    },
    fnDeleteTask(iIndex) {
      this.aTasks.splice(iIndex, 1);
    },
    fnHideList() {
      this.bListVisible = !this.bListVisible;
    },
  },
});

app.mount("#assignment");
