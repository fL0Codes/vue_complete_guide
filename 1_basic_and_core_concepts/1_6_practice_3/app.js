const app = Vue.createApp({
  data() {
    return {
      iInternalResult: 0,
      iInternalWatcher: 0,
      iWatcherResult: 0,
    };
  },
  watch: {
    iInternalWatcher(iCurrentValue) {
      console.log("Watcher 'iInternalWatcher' called!");
      if (iCurrentValue < 37) this.iWatcherResult = "Not there yet!";
      else if (iCurrentValue > 37) this.iWatcherResult = "Too much!";
      else this.iWatcherResult = this.iInternalWatcher;
    },
    iWatcherResult(iCurrentValue) {
      console.log("Watcher 'iWatcherResult' called!");
      if (iCurrentValue === 37) {
        setTimeout(() => {
          this.iInternalWatcher = 0;
          this.iWatcherResult = 0;
        }, 1000);
      }
    },
    iResult() {
      console.log("Watcher 'iResult' called!");
      setTimeout(() => {
        this.iInternalResult = 0;
      }, 1000);
    },
  },
  computed: {
    iResult() {
      console.log("Computed Property 'iResult' called!");
      if (this.iInternalResult < 37) return "Not there yet!";
      else if (this.iInternalResult > 37) return "Too much!";
      else return this.iInternalResult;
    },
  },
  methods: {
    fnCalculateResult(iAddition) {
      this.iInternalResult += iAddition;
      this.iInternalWatcher += iAddition;
    },
  },
});

app.mount("#assignment");
