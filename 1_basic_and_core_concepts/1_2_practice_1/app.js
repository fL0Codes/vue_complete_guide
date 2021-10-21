const app = Vue.createApp({
  data() {
    return {
      sName: "Florian",
      iAge: 28,
      sImageUrl:
        "https://stateless-morningchalkup-com.storage.googleapis.com/2021/03/67077468_1153365934848648_3416384834560327680_o-1.jpg",
      sDefaultValue: "Some String",
    };
  },
  methods: {
    fnCreateRandomNumber() {
      return Math.random();
    },
  },
});

app.mount("#assignment");
