const app = Vue.createApp({
  data() {
    return {
      iCounter: 0,
      sName: "",
      sFirstName: "",
      sLastName: "",
      sLinkToGoogle: "https://www.google.de",
    };
  },
  // To use watchers, we have to name the methods inside the watch property the same way as the
  // property to be watched.
  // Watchers shine, when we want to execute code as soon as a specific condition is reached.
  // For example, when our counter exceeds the number of fifty.

  // However, watchers are not good to calculate properties on change - e.g. we have to properties
  // firstName and lastName to calculate the fullName of a person.
  watch: {
    iCounter(iNewValue, iOldValue) {
      if (iNewValue > 50) this.iCounter = 0;
    },

    // Lots of duplicate code with watchers to calculate the fullname here!
    // --> With computed properties we make sure, that the dependencies are clear to Vue

    sFirstName(sNewValue) {
      if (sNewValue === "" || this.sLastName === "") this.sName = "";
      else this.sName = sNewValue + " " + this.sLastName;
    },
    sLastName(sNewValue) {
      if (sNewValue === "" || this.sFirstName === "") this.sName = "";
      else this.sName = this.sFirstName + " " + sNewValue;
    },
  },
  // Computed values allow Vue to check for dependencies with bound data properties.
  // In case a data property inside a computed value changes, the computed value gets executed.
  // In all other cases the computed value is not recalculated! IMPORTANT difference to methods
  // used in data binding which always will be executed whenever a bound property changes!
  computed: {
    // Although computed properties are methods, we define them as variables and also set them
    // just like variables within our HTML part!
    sFullName() {
      console.log("Only runs, when sName changes!");
      if (this.sFirstName === "" || this.sLastName === "") return "";
      return `${this.sFirstName} ${this.sLastName}`;
    },
  },
  methods: {
    fnOutputFullName() {
      console.log(
        "Running again and again and again ... Even when counter updates!"
      );
      if (this.sName === "") return "";
      return `${this.sName} Albrecht`;
    },
    fnAdd(iNum) {
      this.iCounter = this.iCounter + iNum;
    },
    fnReduce(iNum) {
      this.iCounter = this.iCounter - iNum;
    },
    fnResetInput() {
      this.sName = "";
    },
  },
});

app.mount("#events");
