let countriesVue = new Vue({
  el: "#wikiCountriesVue",
  data: {
    countries: [],
    search: "",
    infoShow: false,
    welcomeShow: true,
    name: "",
  },

  methods: {
    getData: function () { //fetch function
      fetch('https://gist.githubusercontent.com/maguayo/37bafd58f214e519c74001e6eef10286/raw/aae57688cc9dde956e780d632bfa144f00119a7b/countries.json')
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.countries = data;
        })
        .catch(err => {
          return err;
        })
    },

    description: function (des) { //function that allows the display of information specific for every country
      this.name = des;
      for (var i = 0; i<this.countries.length; i++) {
        if (this.name.match(this.countries[i].name.common)) {
          this.infoShow = true;
          this.welcomeShow = false;
        }
      }
    },
  },

  computed: {
    filterCountries: function () { //function that allows the user to search for a country
      return this.countries.filter((item) => item.name.common.toLowerCase().match(this.search.toLowerCase()));
    },
  },

  created() {
    this.getData();

  },
});