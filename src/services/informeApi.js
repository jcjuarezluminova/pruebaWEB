import axios from 'axios'
const informeApi = {
    getSummary: async (countries = [], region = [], division = [], casaMedica = [], tipo = []) =>{
        const response = await axios.post(`${process.env.VUE_APP_API}api/informe/`, {
        countries,
        region,
        division,
        casaMedica,
        tipo
        });
        return response.data;
    },
    getRegion: async () => {
        const response = await axios.get(`${process.env.VUE_APP_API}api/regiones/`);
        return response.data;
    },
    getPaises: async (codRegion) => {
        const response = await axios.get(`${process.env.VUE_APP_API}api/paises/${codRegion}`);
        return response.data;
    },
    getDivisiones: async () => {
        const response = await axios.get(`${process.env.VUE_APP_API}api/divisiones/`);
        return response.data;
    },
    getCasasMedicas: async () => {
        const response = await axios.get(`${process.env.VUE_APP_API}api/casas-medicas/`);
        return response.data;
    },
    getTipoCasaMedica: async () => {
        const response = await axios.get(`${process.env.VUE_APP_API}api/tipo-casas/`);
        return response.data;
    },
    getPresupuestos: async(codRegion) => {
        const response = await axios.get(`${process.env.VUE_APP_API}api/presupuesto-paises/${codRegion}`);
        return response.data;
    },
    getResumenPais: async(codPais) => {
        const response = await axios.get(`${process.env.VUE_APP_API}api/resumen-pais/${codPais}`);
        return response.data;
    },
    getTotalPais: async(codPais) => {
        const response = await axios.get(`${process.env.VUE_APP_API}api/total-pais/${codPais}`);
        return response.data;
    }
}


export default informeApi