<template>
  <div>
    <v-row class="mb-6" no-gutters style="height: 6vh;">
      <div class="col-1 col-sm-1">
          <a href="/">
           <img src="../assets/img/logo.png" style="width:14vh; padding-top: 1vh;padding-bottom: 0%; margin-bottom: 0%;">
          </a>
      </div>
      <div class="col-1 col-sm-1">

      </div>
      <div class="col-10 col-sm-10" style="padding-top: 5px; background-color: #EFF3FB; border-radius: 100px; margin-top: 10px; margin-bottom: 10px; padding-left: 3vh; padding-right: 3vh;">
        <v-row >
          <v-col v-for="flag in flagCountries" :key="flag.Cod_Pais" style="padding-top:1.5vh;">
            <img v-bind:src="require(`../assets/img/${flag}.png`)" style="border-radius: 50%; height: 6vh; width: 6.4vh;"
              v-bind:class="(listOfCountries.find(e => e == flag) || listOfCountries.length === 0) ? 'enabled' : 'disabled'" v-on:click="addCountry(flag)"  v-bind:title="`${flag}`"/>
          </v-col>
        </v-row>


      </div>
      
    </v-row>
  </div>
</template>
<script>
export default {
  name: 'RegionMap',
  data() {
    return {
      listOfCountries: this.countries,
    }
  },
  props: {
    countries: {
      type: Array,
      required: true,
    },
    flagCountries: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addCountry(country) {
      const found = this.listOfCountries.find(element => element === country);
      (!found) ? this.listOfCountries.push(country) : this.listOfCountries.splice(this.listOfCountries.indexOf(country), 1);
    },
  }
}
</script>