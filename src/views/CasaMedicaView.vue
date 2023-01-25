<template>
  <div class="division">
    <MainTable :flagCountries="flagCountries" :countries=countries></MainTable>
    <br />
    <br />
    <v-row>
      <v-col>
        <v-row class="d-flex justify-end separator" style="padding-right: 2vh; padding-bottom: 4vh;">
          <v-btn v-on:click="isDivision = isDivision ? false : true" color="primary">
            {{ isDivision ? "Consolidado" : "Por División" }}
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <accordion>
      <div v-for="tipo in tipoCasaMedica" :key="tipo.Tipo_Casa_Medica">
        <div class="col-12 box-shadow-table principal" style="padding-bottom: 3.5vh;">
            <accordion-item>
                <template slot="accordion-trigger">
                    <v-row>
                        <div class="col-6" style="text-align: left; padding-bottom: 0%;">
                          <h3 class="font-title" style="margin-bottom: 1vh; margin-left: 3vh; font-size: 2.7vh !important;"> {{ tipo.Tipo_Casa_Medica }}</h3>
                        </div>
                        <div class="col-6" style="text-align: end; margin: 0vh; padding: 1vh 4vh 0vh 0vh;">
							<v-btn class="button-secondary">+ Expandir</v-btn>
						</div>
                        <div class="col-12">
                          <div v-if="!isDivision">
                            <div class="row principal"
                            style="padding: 0.0vh 4vh 2vh 4vh;">
                            <!-- <div class="col-12" style="margin-bottom: 0vh; padding-bottom: 0vh; padding-top: 0%;"> -->
                            <div class="col-12" style="margin-bottom: 0vh; padding-bottom: 0vh; padding-top: 0vh;">
                              <h4 class="title-card font-title">CONSOLIDADO</h4>
                            </div>
                            <FilterTable :filter="{ countries:countries,  tipo: [tipo.Tipo_Casa_Medica] }"></FilterTable>
                            </div>
                          </div>
                          <div v-if="isDivision">
                            <div class="row principal"
                            style="padding: 0.0vh 4vh 2vh 4vh;">
                            <!-- <div class="col-12" style="margin-bottom: 0vh; padding-bottom: 0vh; padding-top: 0%;"> -->
                              <div class="col-12" style="margin-bottom: 0vh; padding-bottom: 0vh; padding-top: 0vh;">
                                <h4 class="title-card font-title">CONSOLIDADO</h4>
                              </div>
                              <div class="col-12" v-for="division in divisiones" :key="division.Cod_Division"
                                style="margin: 0vh 0vh 2vh 0vh; padding: 0vh 0vh 0vh 0vh;">
                                <h4 class="sub-title-card font-title">{{ division.Desc_Division }}</h4>
                                <FilterTable 
                                  :filter="{ countries:countries,  tipo: [tipo.Tipo_Casa_Medica], division: [division.Cod_Division] }">
                                </FilterTable>
                              </div>
                            </div>
                          </div>
                        </div>
                    </v-row>
                </template>
                <template slot="accordion-content">
                    <div v-for="casa in casasMedicas.filter((elem) => elem.Tipo_Casa_Medica === tipo.Tipo_Casa_Medica)" :key="casa.Cod_Casa_Medica">
                        <br>
                        <br>
                        <div v-if="isDivision">
                            <div class="row prueba secundario" style="background-color:#fff; padding: 0.0vh 4vh 1.5vh 4vh;">
                                <div class="col-12" style="margin-bottom: 0vh; padding-bottom: 0vh;">
                                    <h4 class="title-card font-title">{{ casa.Desc_Casa_Medica }}</h4>
                                </div>
                                <div class="col-12" v-for="division in divisiones" :key="division.Cod_Division"
                                    style="margin: 0vh 0vh 2vh 0vh; padding: 0vh 0vh 0vh 0vh;">
                                    <h4 class="sub-title-card font-title">{{ division.Desc_Division }}</h4>
                                    <FilterTable 
                                        :filter="{ countries:countries,  division: [division.Cod_Division], casaMedica: [casa.Cod_Casa_Medica] }">
                                    </FilterTable>
                                </div>
                            </div>
                        </div>
                        <div v-if="!isDivision">
                            <div class="row prueba secundario" 
                                style="background-color:#fff; padding: 0.0vh 4vh 1.5vh 4vh;">
                                <div class="col-12" style="margin-bottom: 0vh; padding-bottom: 0vh;">
                                    <h4 class="title-card font-title">{{ casa.Desc_Casa_Medica }}</h4>
                                </div>
                                <FilterTable :filter="{ countries:countries, casaMedica: [casa.Cod_Casa_Medica] }"></FilterTable>
                            </div>
                        </div>
                    </div>
                </template>
            </accordion-item>
        </div>
        <br>
		<br>
      </div>
    </accordion>
  </div>
</template>

<script>
import FilterTable from '@/components/FilterTable.vue'
import MainTable from '@/components/MainTable.vue'
import Accordion from "@/components/GrupAccordion";
import AccordionItem from "@/components/accordion-item";
import informeApi from '../services/informeApi';


export default {
  name: 'CasaMedicaView',
  data() {
    return {
      isDivision: false,
      data: [],
      divisiones: [],
      casasMedicas: [],
      tipoCasaMedica: [],
      flagCountries: ['GT', 'SV', 'HN', 'CR', 'NI', 'PA', 'PE', 'DO', 'BS', 'BO', 'CO', 'EC'],
      countries: []
    }
  },
  components: {
    MainTable,
    FilterTable,
    Accordion,
    AccordionItem
  },
  async mounted() {
    this.tipoCasaMedica = await informeApi.getTipoCasaMedica();
    this.divisiones = await informeApi.getDivisiones();
    this.casasMedicas = await informeApi.getCasasMedicas();
  }
}
</script>