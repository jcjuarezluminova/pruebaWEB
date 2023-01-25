<template>
  <div>
    <div class="row" style="padding: 0vh 0vh 0vh 0vh; margin: 0vh 0vh 0vh 0vh;">
      <div class="col-12" style="padding: 0vh 0vh 0vh 0vh; margin: 0vh 0vh 0vh 0vh;">
        <div class="box-shadow-table row" style="background-color: #EFF3FB; color: #746e6e; ">


          <div class="col-5 text-center" style="padding:0 0 0 0vh; margin:0%">
            <h2 class="font-title" style="font-size: 23px;"> <b>Centro America</b></h2>
          </div>
          <div class="col-3" style="padding:0 0 10 0vh; margin:0%">
            <h2 class="font-title" style="font-size: 23px;">Caribe</h2>
          </div>
          <div class="col-4" style="padding:0 0 0 0vh; margin:0%">
            <h2 class="font-title" style="font-size: 23px;">Sur America</h2>
          </div>


          <div class="col-5" style="padding:0vh 0vh 2vh 0vh; margin:0%;">
            <div id="chartdiv1">+</div>
          </div>

          <div class="col-3" style="padding:0%; margin:0%">
            <div class="row">
              <div id="chartdiv2">+</div>
            </div>
            <div class="row">
              <div id="chartdiv3">+</div>
            </div>
          </div>

          <div class="col-4" style="padding:0 0vh 0 0; margin:0%">
            <div id="chartdiv4">+</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="modal-overlay" @click="clear()"></div>
    <div v-if="showModal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" @click="clear()" style="float:right;" aria-label="Close">
              <span style="font-size: 20px;">
                X</span>
            </button>
          </div>
          <div class="modal-body">
            <CountrySummary :country="country"></CountrySummary>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>
<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import informeApi from '../services/informeApi';
import CountrySummary from "./CountrySummary.vue";

export default {
  name: 'RegionMap',
  data() {
    return {
      listOfCountries: this.countries,
      showModal: false,
      mapSurAmerica: null,
      mapBahamas: null,
      mapCaribe: null,
      mapCentroAmerica: null,
      country: null,
    }
  },
  components: {
    CountrySummary
  },
  props: {
    countries: {
      type: Array,
      required: true,
    },
    centro: {
      type: Array,
      required: true,
    },
    bahamas: {
      type: Array,
      required: true,
    },
    caribe: {
      type: Array,
      required: true,
    },
    sud: {
      type: Array,
      required: true,
    },
  },
  async mounted() {
    const _this = this;
    this.mapCentroAmerica = await this.createMap('chartdiv1', _this, { 
      fill: am4core.color("#4997d0"), 
      polygonSeries: this.centro, 
      codRegion: 1,
      colorF:"#3f82b3",
      colorM:"#4997d0",
      colorD:"#53a8e6" });
    this.mapBahamas = await this.createMap('chartdiv2', _this, { 
      fill: am4core.color("#E26723"), 
      polygonSeries: this.bahamas, 
      codRegion: 2,
      colorF:"#C24C0B",
      colorM:"#E26723",
      colorD:"#f86b1c" });
    this.mapCaribe = await this.createMap('chartdiv3', _this, { 
      fill: am4core.color("#E26723"), 
      polygonSeries: this.caribe, 
      codRegion: 2,
      colorF:"#C24C0B",
      colorM:"#E26723",
      colorD:"#F87D3A"});
    this.mapSurAmerica = await this.createMap('chartdiv4', _this, { 
      fill: am4core.color("#f8b334"), 
      polygonSeries: this.sud, 
      codRegion: 3,
      colorF:"#e1a330",
      colorM:"#f8b334",
      colorD:"#fcc154" });
  },
  methods: {
    addCountry(country) {
      const found = this.listOfCountries.find(element => { return element === country });
      (!found) ? this.listOfCountries.push(country) : this.listOfCountries.splice(this.listOfCountries.indexOf(country), 1);
    },
    async createMap(elementId, _this, options) {
      let map = am4core.create(elementId, am4maps.MapChart);
      map.logo.disabled = true;
      map.background.fill = am4core.color("#EFF3FB");
      map.background.fillOpacity = 0.9;
      map.geodata = am4geodata_worldLow;
      map.projection = new am4maps.projections.Miller();

      let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
      polygonSeries.useGeodata = true;
      polygonSeries.include = options.polygonSeries;

      let polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.tooltipText = "{name}";
      polygonTemplate.fill = options.fill;
      
      let gradient = new am4core.LinearGradient();
      gradient.addColor(am4core.color(options.colorF));
      gradient.addColor(am4core.color(options.colorM));
      gradient.addColor(am4core.color(options.colorD));
      gradient.rotation = 30;
      polygonTemplate.fill = gradient;
      
      let hs = polygonTemplate.states.create("hover");
      hs.properties.fill = am4core.color("#8a8b8f");

      let activeState = polygonTemplate.states.create("active");
      activeState.properties.fill = am4core.color("#8a8b8f");

      map.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("#91c2dc");

      polygonTemplate.events.on("hit", function (ev) {
        let data = ev.target.dataItem.dataContext;
        _this.showModal = true;
        _this.country = data.id;
        ev.target.series.chart.zoomToMapObject(ev.target)
        ev.target.isActive = !ev.target.isActive;
      });
      await this.loadCountryMap(map, options.codRegion);
      return map;
    },
    createBullets(map, data) {
      const imageSeries = map.series.push(new am4maps.MapImageSeries());
      const imageTemplate = imageSeries.mapImages.template;
      imageTemplate.propertyFields.longitude = "longitude";
      imageTemplate.propertyFields.latitude = "latitude";
      imageTemplate.nonScaling = true;

      //Creating a pin bullet
      const color1 = am4core.color("#73af00");
      const color2 = am4core.color("#ffffff");
      const color3 = am4core.color("#000");


      const pin = imageTemplate.createChild(am4plugins_bullets.PinBullet);
      pin.background.fill = color1;
      pin.background.pointerBaseWidth = 5;
      pin.background.pointerLength = 22;
      pin.background.propertyFields.pointerLength = "small";
      pin.circle.fill = pin.background.fill;
      pin.label = new am4core.Label();
      pin.label.text = "{value}%";
      pin.label.fill = color2;
      pin.label.fontSize = "12"

      const label = pin.createChild(am4core.Label);
      label.text = "{title}";
      label.fontWeight = "bold";
      label.propertyFields.dy = "length";
      label.verticalCenter = "middle";
      label.fill = color3;
      label.fontSize = "12"
      label.adapter.add("dy", function (dy) {
        return (30 + dy) * -1;
      });

      imageSeries.heatRules.push({
        "target": pin.background,
        "property": "radius",
        "min": 20,
        "max": 20,
        "dataField": "value"
      });

      imageSeries.heatRules.push({
        "target": label,
        "property": "dx",
        "min": 20,
        "max": 20,
        "dataField": "value"
      });

      imageSeries.data = data;
    },
    async loadCountryMap(map, codRegion) {
      const presupuestos = await informeApi.getPresupuestos(codRegion);
      const data = presupuestos.map((item) => {
        return {
          "latitude": item.latitud,
          "longitude": item.longitud,
          "value": item.valor === '' ? '0' : item.valor,
          "title": item.Desc_Pais,
          "length": 12
        }
      })
      this.createBullets(map, data)
    },
    clearMapSelections(map) {
      this.showModal = false;
      if (map.series === undefined || map.series.length === 0) return;
      map.series.each((series) => {
        if (series.mapPolygons === undefined) return;
        series.mapPolygons.each((polygon) => {
          polygon.isActive = false;
        });
      });
      map.zoomToGeoPoint({ latitude: 0, longitude: 0 }, 1);
      if (map.selection !== undefined) {
        map.selection.clear();
      }
    },
    clear() {
      this.clearMapSelections(this.mapCentroAmerica);
      this.clearMapSelections(this.mapBahamas);
      this.clearMapSelections(this.mapCaribe);
      this.clearMapSelections(this.mapSurAmerica);
    }
  }
}
</script>
<style>
div#chartdiv1 div {
  height: 42vh !important;
}

div#chartdiv2 div {
  height: 21vh !important;
}

div#chartdiv3 div {
  height: 21vh !important;
}

div#chartdiv4 div {
  height: 42vh !important;
}

.enabled {
  opacity: 100%;
  border: 4px solid #B5E26A
}

.disabled {
  opacity: 70%;
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px 20px;
  border-radius: 10px;
  width: 80%;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
  .modal {
    position: absolute;
    top: 52%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px 20px;
    border-radius: 10px;
    width: 80%;
    z-index: 1001;
  }
</style>