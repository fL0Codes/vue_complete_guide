// Create Vue instance
const app = Vue.createApp({
  // The data property ALWAYS needs a function which returns data!
  // The function also has to return ALWAYS an object!
  // Within the object we can define any key-value pairs we want to use
  data() {
    return {
      sMainCourseGoal: "Getting better in WebDevelopment!",
      sCourseGoalA: "Finish the course and learn Vue!",
      sCourseGoalB: "Master VueJs!",
      // In case I have to work with html based strings
      sHTMLBasedCourseGoal: "<p>Learn more awesome things about VueJs!</p>",
      sVueLink: "https://vuejs.org/",
    };
  },
  // Another special property of the Vue instance that
  // allows to define my own functions.
  // Functions can be executed in Interpolation and binding parts
  methods: {
    fnRandomCourseGoal() {
      let iNumber = Math.random();

      if (iNumber < 0.5) {
        // In this case Vue does magic behind the scenes why 'this'
        // in here can be used to access the data properties from above
        return this.sCourseGoalA;
      } else {
        return this.sCourseGoalB;
      }
    },
  },
});

// Mount the instance to a specific part of my app
// mount() method needs a CSS selector - in this case an ID selector!
app.mount("#user-goal");
