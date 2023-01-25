<template>
  <div class="home">
    <MainTable :flagCountries="flagCountries" :countries=countries></MainTable>
    <br/>
    <br/>
    <RegionMap :centro="centro" :bahamas="bahamas" :caribe="caribe" :sud="sud" :countries=countries></RegionMap>
  </div>
</template>

<script>
import MainTable from '@/components/MainTable.vue'
import RegionMap from '@/components/RegionMap.vue';

export default {
  name: 'HomeView',
  data() {
      return {
        flagCountries: ['GT', 'SV', 'HN', 'CR', 'NI', 'PA', 'PE', 'DO', 'BS', 'BO', 'CO', 'EC'],
        centro:  ['GT', 'SV', 'HN', 'CR', 'NI', 'PA'],
        caribe: ['DO'],
        bahamas: ['BS'],
        sud: ['PE', 'BO', 'CO', 'EC'],
        countries:[]
      }
  },
  components: {
    MainTable,
    RegionMap
  },
}
</script>
