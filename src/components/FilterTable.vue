<template>
    <v-row>
        <div class="col-4 base-new-table first-color">
      <table style="width: 100%; ">
        <thead>
          <tr>
            <th colspan="2" rowspan="2">OBJETIVOS MES</th>
            <th colspan="2">
              POTENCIAL DE VENTA
            </th>
          </tr>
          <tr>
            <th>Ped. Recibidos</th>
            <th>Abast. Conf.</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="items in data[0]" :key="items.id">
            <td v-for="item in items" :key="item.id">
            {{ item }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-3 xl-row base-new-table second-color">
      <table style="width: 100%; ">
        <thead>
          <tr>
            <th colspan="2">
              FACTURACIÓN / ABASTECIMIENTO
            </th>
          </tr>
          <tr>
            <th>Facturado</th>
            <th>En Proceso</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="items in data[1]" :key="items.id">
            <td v-for="item in items" :key="item.id">
            {{ item }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="col-5 xl-row base-new-table third-color">
      <table style="width: 100%; ">
        <thead>
          <tr>
            <th colspan="5">
              SEGUIMIENTO DE PROCESOS - PEDIDOS A FACTURACIÓN
            </th>
          </tr>
          <tr>
            <th>R.Pedidos</th>
            <th>Abastecimiento</th>
            <th>Fac.Inter.Comp</th>
            <th>Tránsito</th>
            <th>Fac.Comercial</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="items in data[2]" :key="items.id">
            <td v-for="item in items" :key="item.id">
            {{ item }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </v-row>
</template>
    
<script>
import informeApi from '../services/informeApi';
export default {
    name: 'FilterTable',
    props: {
        filter: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            data: [],
            headers: [
            { text: 'Meta', value: 'Desc_Corta_Meta', align: 'center'  },
            { text: '', value: 'Meta', align:"center"},
            // { text: 'T. Pedidos', value: 'Toma Pedidos', align:"center" },
            // { text: 'Val. Comercial', value: 'Validacion Comercial', align:"center"},
            { text: 'R. Pedidos', value: 'Recepción Pedidos', align:"center"},
            { text: 'Abastecimiento', value: 'Abastecimiento', align:"center" },
            { text: 'Fac. Inter Comp.', value: 'Fac. Inter Company', align:"center" },
            { text: 'Distribucion', value: 'Distribucion', align:"center" },
            { text: 'Fac. Comercial', value: 'Fac. Comercial', align:"center" },
            { text: 'Facturado', value: 'Facturado', align:"center"},
            { text: 'Total', value: 'Total', align:"center" },
            ]
        }
    },
    watch: {
        async filter() {
            await this.getData();
        }
    },
    async mounted() {
        await this.getData();
    },
    methods: {
        async getData() {
            
            const { countries=[], region=[], division=[], casaMedica=[], tipo=[] } = this.filter
            this.data = await informeApi.getSummary(countries, region, division, casaMedica, tipo)
        }
    }
}
</script>
    