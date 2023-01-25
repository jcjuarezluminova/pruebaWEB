<template>
	<div class="region">
		<MainTable :flagCountries="flagCountries" :countries=countries></MainTable>
		<br>
		<br>
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
			<div v-for="region in regiones" :key="region.Cod_Region">
				<div class="col-12 box-shadow-table principal" style="padding-bottom: 3.5vh;">
					<accordion-item>
						<template slot="accordion-trigger">
							<v-row>
								<div class="col-6" style="text-align: left; padding-bottom: 0%;">
									<h3 class="font-title" style="margin-bottom: 1vh; margin-left: 3vh; font-size: 2.7vh !important; margin-bottom: 0%;">{{ region.Desc_Region }}</h3>
								</div>
								<div class="col-6" style="text-align: end; margin: 0vh; padding: 1vh 4vh 0vh 0vh;">
									<v-btn class="button-secondary">+ Expandir</v-btn>
								</div>
								<div class="col-12">
									<div v-if="!isDivision">
										<div class="row principal"
											style="padding: 0vh 4vh 2vh 4vh;">
											<!-- <div class="col-12" style="margin-bottom: 0vh; padding-bottom: 0vh; padding-top: 0%;"> -->
											<div class="col-12" style="margin-bottom: 0vh; padding-bottom: 0vh; padding-top: 0vh;">
												<h4 class="title-card font-title">CONSOLIDADO</h4>
											</div>
											<FilterTable :filter="{ countries:countries, region: [region.Desc_Corta_Region] }"></FilterTable>
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
													:filter="{ countries:countries, region: [region.Desc_Corta_Region], division: [division.Cod_Division] }">
												</FilterTable>
											</div>
										</div>
									</div>
								</div>
							</v-row>
						</template>
						<template slot="accordion-content">
							<div v-for="pais in paises.filter((elem) => elem.Cod_Region === region.Cod_Region)" :key="pais.Cod_Pais">
								<br>
								<br>
								<div v-if="isDivision">
									<div class="row secundario" style="background-color:#fff; padding: 0.0vh 4vh 1.5vh 2vh;">
										<div class="col-12" style="margin-bottom: 0vh; padding-bottom: 0vh;">
											<h4 class="title-card font-title">{{ pais.Desc_Pais }}</h4>
										</div>
										<div class="col-12" v-for="division in divisiones" :key="division.Cod_Division"
											style="margin: 0vh 0vh 2vh 0vh; padding: 0vh 0vh 0vh 0vh;">
											<h4 class="sub-title-card font-title">{{ division.Desc_Division }}</h4>
											<FilterTable
												:filter="{ countries: [pais.Desc_Corta_Pais], division: [division.Cod_Division] }">
											</FilterTable>
										</div>
									</div>
								</div>
								<div v-if="!isDivision">
									<div class="row secundario"
										style="background-color:#fff; padding: 0.0vh 4vh 1.5vh 2vh;">
										<div class="col-12" style="margin-bottom: 0vh; padding-bottom: 0vh;">
											<h4 class="title-card font-title">{{ pais.Desc_Pais }}</h4>
										</div>
										<FilterTable :filter="{ countries: [pais.Desc_Corta_Pais] }"></FilterTable>
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
import FilterTable from '@/components/FilterTable.vue';
import MainTable from '@/components/MainTable.vue'
import informeApi from '../services/informeApi';
import Accordion from "@/components/GrupAccordion";
import AccordionItem from "@/components/accordion-item";

export default {
	name: 'RegionView',
	data() {
		return {
			isDivision: false,
			paises: [],
			regiones: [],
			divisiones: [],
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
		await this.getRegion();
		await this.getPaises();
		await this.getDivisiones();
	},
	watch: {
        async countries() {
          await this.getPaises();
    }
  },
	methods: {
		async getRegion() {
			this.regiones = await informeApi.getRegion();
		},
		async getPaises() {
			this.paises = await informeApi.getPaises(0);
			if(this.countries.length){
				this.paises = this.paises.filter(pais => this.countries.includes(pais.Desc_Corta_Pais));
			}
		},
		async getDivisiones() {
			this.divisiones = await informeApi.getDivisiones();
		}
	}
}
</script>