<template>
  <div class="home">
    <div class="header" style="background-color: #fbfbfb !important">
      <CountryList :flagCountries="flagCountries" :countries=countries></CountryList>
      <MainMenu></MainMenu>
    </div>
    <div style="margin-top:16vh;">
        <CountryTable :data=data></CountryTable>
    </div>
  </div>
</template>
  
<script>
import CountryTable from '@/components/CountryTable.vue'
import CountryList from '@/components/CountryList.vue'
import MainMenu from '@/components/MainMenu.vue'
import informeApi from '../services/informeApi';
export default {
  name: 'MainTable',
  data() {
    return {
      data: []
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
  components: {
    CountryTable,
    CountryList,
    MainMenu
  },
  watch: {
        async countries() {
          await this.getData();
        }
  },
  async mounted() {
    await this.getData();
  },
  methods: {
    async getData() {
      const countriesParams = this.countries.length ? this.countries : [];
      this.data = await informeApi.getSummary(countriesParams);

    }
  }
}
</script>
  