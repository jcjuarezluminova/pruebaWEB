<template>
  <div class="division">
    <MainTable :flagCountries="flagCountries" :countries=countries></MainTable>
    <br>
    <br>
      <div v-for="division in divisiones" :key="division.Cod_Division">
        <div class="box-shadow-table row principal" style="padding: 0.0vh 4vh 2vh 4vh;">
          <div class="col-12" style="margin-bottom: 0vh; padding-bottom: 0vh;">
            <h4 class="font-title">{{ division.Desc_Division }}</h4>
          </div>
          <div class="col-12" style="margin: 0vh 0vh 0vh 0vh; padding: 0vh 0vh 0vh 0vh;" >
            <FilterTable :filter="{ countries:countries, division: [division.Cod_Division] }"></FilterTable>
          </div>
        </div>
        <br>
        <br>
      </div>
  </div>
</template>

<script>
import FilterTable from '@/components/FilterTable.vue'
import MainTable from '@/components/MainTable.vue'
import informeApi from '../services/informeApi';

export default {
  name: 'DivisionView',
  data() {
    return {
      divisiones: [],
      flagCountries: ['GT', 'SV', 'HN', 'CR', 'NI', 'PA', 'PE', 'DO', 'BS', 'BO', 'CO', 'EC'],
      countries: []
    }
  },
  components: {
    MainTable,
    FilterTable
  },
  async mounted() {
    this.divisiones = await informeApi.getDivisiones();
  }
}
</script>