<template>
    <div class="new-modal">
        <h3 class="font-title" style="text-align: left; padding: 0vh 0vh 0vh 3vh;">{{ resumen[0].Desc_Pais }}</h3>
        <table style="width: 100%; ">
            <thead>
                <tr>
                    <th colspan="2">
                    </th>
                    <th colspan="2">
                        {{ resumen[0].Fecha_1ra_Distrib }}<br/>
                        1ra Distribución
                    </th>
                    <th colspan="2">
                        {{ resumen[0].Fecha_2da_Distrib }}<br/>
                        2da Distribución
                    </th>
                    <th colspan="2">
                        {{ resumen[0].Fecha_3ra_Distrib }}<br/>
                        3ra Distribución
                    </th>
                    <th colspan="2">Por Facturar</th>
                    <th colspan="2">Real Facturado</th>
                    <th colspan="2">Total</th>
                </tr>
                <tr>
                    <th colspan="2">Meta</th>

                    <th>Valor</th>
                    <th>%</th>

                    <th>Valor</th>
                    <th>%</th>

                    <th>Valor</th>
                    <th>%</th>

                    <th>Valor</th>
                    <th>%</th>

                    <th>Valor</th>
                    <th>%</th>

                    <th>Valor</th>
                    <th>%</th>
                </tr>
                <tr>
                    <th colspan="14">PRIVADO</th>
                </tr>
            </thead>
            <tr v-for="data in resumen.filter((value) => value.Desc_Division === 'PRIVADO')" :key="data.Cod_Division">
                <td >{{ data.Desc_Corta_Meta[0] }}</td>
                <td >{{ data.Valor_Meta }}</td>

                <td >{{ data.Valor_1ra_Distrib }}</td>
                <td >{{ data.Porcent_1ra_Distrib }}</td>

                <td >{{ data.Valor_2da_Distrib }}</td>
                <td >{{ data.Porcent_2da_Distrib }}</td>

                <td >{{ data.Valor_3ra_Distrib }}</td>
                <td >{{ data.Porcent_3ra_Distrib }}</td>

                <td >{{ data.Valor_Por_Facturar }}</td>
                <td >{{ data.Porcent_Por_Facturar }}</td>

                <td >{{ data.Valor_Real_Facturado }}</td>
                <td >{{ data.Porcent_Real_Facturado }}</td>

                <td >{{ data.Valor_Total }}</td>
                <td >{{ data.Porcent_Total }}</td>
            </tr>
            <tr>
                <th colspan="14" style="background:transparent;height: 20px;"></th>
            </tr>
            <tr>
                <th colspan="14" style="background: linear-gradient(242.56deg, #80AD34 -53.41%, #CDFA81 94.61%);">INSTITUCIONAL</th>
            </tr>
            <tr v-for="data in resumen.filter((value) => value.Desc_Division === 'INSTITUCIONAL')"
                :key="data.Cod_Division">
                <td >{{ data.Desc_Corta_Meta[0] }}</td>
                <td >{{ data.Valor_Meta }}</td>

                <td >{{ data.Valor_1ra_Distrib }}</td>
                <td >{{ data.Porcent_1ra_Distrib }}</td>

                <td >{{ data.Valor_2da_Distrib }}</td>
                <td >{{ data.Porcent_2da_Distrib }}</td>

                <td >{{ data.Valor_3ra_Distrib }}</td>
                <td >{{ data.Porcent_3ra_Distrib }}</td>

                <td >{{ data.Valor_Por_Facturar }}</td>
                <td >{{ data.Porcent_Por_Facturar }}</td>

                <td >{{ data.Valor_Real_Facturado }}</td>
                <td >{{ data.Porcent_Real_Facturado }}</td>

                <td >{{ data.Valor_Total }}</td>
                <td >{{ data.Porcent_Total }}</td>
            </tr>
            <tr>
                <th colspan="14" style="background:transparent;height: 20px;"></th>
            </tr>
            <tr>
                <th colspan="14" style="background: linear-gradient(242.56deg, #80AD34 -53.41%, #CDFA81 94.61%);">VETERINARIO</th>
            </tr>
            <tr v-for="data in resumen.filter((value) => value.Desc_Division === 'VETERINARIO')"
                :key="data.Cod_Division">
                <td >{{ data.Desc_Corta_Meta[0] }}</td>
                <td >{{ data.Valor_Meta }}</td>

                <td >{{ data.Valor_1ra_Distrib }}</td>
                <td >{{ data.Porcent_1ra_Distrib }}</td>

                <td >{{ data.Valor_2da_Distrib }}</td>
                <td >{{ data.Porcent_2da_Distrib }}</td>

                <td >{{ data.Valor_3ra_Distrib }}</td>
                <td >{{ data.Porcent_3ra_Distrib }}</td>

                <td >{{ data.Valor_Por_Facturar }}</td>
                <td >{{ data.Porcent_Por_Facturar }}</td>

                <td >{{ data.Valor_Real_Facturado }}</td>
                <td >{{ data.Porcent_Real_Facturado }}</td>

                <td >{{ data.Valor_Total }}</td>
                <td >{{ data.Porcent_Total }}</td>
            </tr>
            <tr>
                <th colspan="14" style="background:transparent;height: 20px;"></th>
            </tr>
            <tr>
                <th colspan="14" style="background: linear-gradient(242.56deg, #80AD34 -53.41%, #CDFA81 94.61%);">TOTAL</th>
            </tr>
            <tr v-for="data in totalResumen" :key="data.Cod_Division">
                <td >{{ data.Desc_Corta_Meta[0] }}</td>
                <td >{{ data.Valor_Meta }}</td>

                <td >{{ data.Valor_1ra_Distrib }}</td>
                <td >{{ data.Porcent_1ra_Distrib }}</td>

                <td >{{ data.Valor_2da_Distrib }}</td>
                <td >{{ data.Porcent_2da_Distrib }}</td>

                <td >{{ data.Valor_3ra_Distrib }}</td>
                <td >{{ data.Porcent_3ra_Distrib }}</td>

                <td >{{ data.Valor_Por_Facturar }}</td>
                <td >{{ data.Porcent_Por_Facturar }}</td>

                <td >{{ data.Valor_Real_Facturado }}</td>
                <td >{{ data.Porcent_Real_Facturado }}</td>

                <td >{{ data.Valor_Total }}</td>
                <td >{{ data.Porcent_Total }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import informeApi from '../services/informeApi';
export default {
    name: 'CountrySummary',
    props: {
        country: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            resumen: [],
            totalResumen: []
        }
    },
    async mounted() {
        this.resumen = await informeApi.getResumenPais(this.country);
        this.resumen = this.resumen.map(objeto => {
            return {
                ...objeto,
                Valor_1ra_Distrib: objeto.Valor_1ra_Distrib === "" ? "0.00" : objeto.Valor_1ra_Distrib,
                Porcent_1ra_Distrib: objeto.Porcent_1ra_Distrib === "%" ? "0.00%" : objeto.Porcent_1ra_Distrib,
                Valor_2da_Distrib: objeto.Valor_2da_Distrib === "" ? "0.00" : objeto.Valor_2da_Distrib,
                Porcent_2da_Distrib: objeto.Porcent_2da_Distrib === "%" ? "0.00%" : objeto.Porcent_2da_Distrib,
                Valor_3ra_Distrib: objeto.Valor_3ra_Distrib === "" ? "0.00" : objeto.Valor_3ra_Distrib,
                Porcent_3ra_Distrib: objeto.Porcent_3ra_Distrib === "%" ? "0.00%" : objeto.Porcent_3ra_Distrib,
                Valor_Por_Facturar: objeto.Valor_Por_Facturar === "" ? "0.00" : objeto.Valor_Por_Facturar,
                Porcent_Por_Facturar: objeto.Porcent_Por_Facturar === "%" ? "0.00%" : objeto.Porcent_Por_Facturar,
                Valor_Real_Facturado: objeto.Valor_Real_Facturado === "" ? "0.00" : objeto.Valor_Real_Facturado,
                Porcent_Real_Facturado: objeto.Porcent_Real_Facturado === "%" ? "0.00%" : objeto.Porcent_Real_Facturado,
                Valor_Total: objeto.Valor_Total === "" ? "0.00" : objeto.Valor_Total,
                Porcent_Total: objeto.Porcent_Total === "%" ? "0.00%" : objeto.Porcent_Total
            }
        });
        this.totalResumen = await informeApi.getTotalPais(this.country);
    }
}
</script>