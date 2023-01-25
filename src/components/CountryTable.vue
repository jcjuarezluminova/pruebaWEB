<template>
  <v-row class="box-shadow-table principal" style="padding: 1vh 2vh 1vh 2vh;">
    <div class="col-12" style="padding: 0vh 0vh 0vh 0vh;" >
      <h3 class="font-title">TABLA RESUMEN</h3>
    </div>
    
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
<style>
td {
  border-bottom: thin solid rgba(0, 0, 0, 0.12);
  border-top: thin solid rgba(0, 0, 0, 0.12);
}
</style>

<script>
export default {
  name: 'CountryTable',
  data() {
    return {
    }
  },
  props: {
    data: {
      type: Array,
      required: true,
    }
  }
}
</script>