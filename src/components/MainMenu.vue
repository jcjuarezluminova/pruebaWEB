<template>
  <v-row style="padding-bottom: 1vh; margin-bottom: 0vh;">
    <v-col cols="6" style="padding-bottom: 0vh; margin-bottom: 0vh;">
    </v-col>
    <v-col cols="6" style="padding-bottom: 0vh; margin-bottom: 0vh; margin-top: 0.8vh;">
      <v-row class="d-flex justify-end separator" style="padding-bottom: 0vh; margin-bottom: 0vh;">
        
          <router-link to="division" v-if="currentRoute !== 'division'" class="separator-button">
            <v-btn depressed color="primary" class="button-menu">
              División
            </v-btn>
          </router-link>
          <router-link to="/" v-if="currentRoute === 'division'" class="separator-button">
            <v-btn depressed color="primary"  class="button-menu">
              Atras
            </v-btn>
          </router-link>
          <router-link to="region" v-if="currentRoute !== 'region'" class="separator-button">
            <v-btn depressed color="primary"  class="button-menu">
              Región
            </v-btn>
          </router-link>
          <router-link to="/" v-if="currentRoute === 'region'" class="separator-button">
            <v-btn depressed color="primary" class="button-menu">
              Atras
            </v-btn>
          </router-link>
          <router-link to="casa-medica" v-if="currentRoute !== 'casaMedica'" class="separator-button">
            <v-btn depressed color="primary" class="button-menu">
              Casa Medica
            </v-btn>
          </router-link>
          <router-link to="/" v-if="currentRoute === 'casaMedica'" class="separator-button">
            <v-btn depressed color="primary" class="button-menu">
              Atras
            </v-btn>
          </router-link>
        
      </v-row>
    </v-col>
  </v-row>
</template>
  
<script>

export default {
  data() {
    return {
      currentRoute: null
    }
  },
  async mounted() {
    this.currentRoute = this.$router.currentRoute.name
  },
}
</script>
<style>
  .v-btn:not(.v-btn--round).v-size--default{
    background-color: #303F61 !important;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
    height: 4vh !important;
    width: 8vw !important;
    font-size: 1.3vh !important;

  }
  .separator{
    padding-top: 1vh;
    padding-bottom: 2.5vh;
  }

  .separator-button{
    padding-right: 1.5vh;
  }

  .button-menu{
    height: 4vh !important;
    width: 8vw !important;
    font-size: 1.3vh !important;

  }

</style>