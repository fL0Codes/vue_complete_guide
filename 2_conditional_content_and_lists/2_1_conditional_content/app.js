const app = Vue.createApp({
  data() {
    return { aGoals: [], sGoalText: "" };
  },
  methods: {
    fnAddGoal() {
      this.aGoals.push(this.sGoalText);
      this.sGoalText = "";
    },
    fnOnGoalPressed(iIndex) {
      // Remove goal from list
      this.aGoals.splice(iIndex, 1);
    },
  },
});

app.mount("#user-goals");
