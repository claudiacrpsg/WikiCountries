let countriesVue = new Vue({
  el: "#wikiCountriesVue",
  data: {
    countries: [],
    search: "",
    show: false,
    name: "",
    border:"",
  },

  methods: {
    getData: function () {
      fetch('https://gist.githubusercontent.com/maguayo/37bafd58f214e519c74001e6eef10286/raw/aae57688cc9dde956e780d632bfa144f00119a7b/countries.json')
        .then(response => {
          return response.json()
        })
        .then(data => {
          this.countries = data;
          console.log(this.countries)
        })
        .catch(err => {
          return err;

        })
    },

    description: function (des) {
      this.name = des;
      for (var i = 0; i<this.countries.length; i++) {
        if (this.name.match(this.countries[i].name.common)) {
          console.log(this.name)
          this.show = true;
        }
        // if(this.border.match(this.countries[i].border)){
        //   console.log(this.border)
        // }
      }
    },

  },

  computed: {
    filterCountries: function () {
      return this.countries.filter((item) => item.name.common.toLowerCase().match(this.search.toLowerCase()));
    },

  },

  created() {
    this.getData();

  },
});