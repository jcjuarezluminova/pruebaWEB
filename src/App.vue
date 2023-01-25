<template>
  <div id="app">
    <v-app>
    <v-row>
        <v-main>
          <v-container class="main-container">
            <router-view/>
          </v-container>
        </v-main>
      </v-row>
  </v-app>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Barlow');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans');

.font-title{
  font-family: 'Barlow';
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  color: #607090;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fbfbfb;
  font-family: Poppins;
  
}


nav {
  padding: 30px;
  
  a {
    font-weight: bold;
    color: #2c3e50;
    
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

a {
    text-decoration: none;
    color: black;
    text-align: left !important;
}

.v-list-item__title {
    text-align: left;
    padding-left: 20px;
}


.box-shadow-table{
    box-shadow: 11px 15px 10px rgba(0, 0, 0, 0.2);
    border: 1px solid lightgrey;
    border-radius: 20px;
    height: auto !important;
}


:root {
    /* Colors */
    --color-table-principal: #EFF3FB;
    --color-table-secundario: #e6e6e6;
    --color-h3:#000;
    --color-h4:#000;
    --color-table-border: #cfcfcf 2px solid;
    --color-text-table: #6c757d;
}




h4 {
  color: var(--color-h3);
}

h3 {
  color: var(--color-h4);
}

table{
  border: var(--color-table-border);
}


.new-modal td{
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 600;
  font-size: 14px !important;
  line-height: 17px;
  color: #607091;

}

.new-modal table tr > td:first-child {
  background: linear-gradient(242.56deg, #80AD34 -53.41%, #CDFA81 94.61%);
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  padding: 0vh 1vh 0vh 1vh;
  text-align: center;
  color: #607091;
}

.new-modal table {
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
  box-shadow: 0 0 0 50px #EFF3FB;
}


.new-modal table thead {
  background: linear-gradient(242.56deg, #80AD34 -53.41%, #CDFA81 94.61%);
  padding: 0vh 1vh 0vh 1vh !important;
  
}

.new-modal table th{
  text-align: center !important;  
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 600;
  font-size: 14px !important;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.6) !important;

}



.principal{
  background-color: var(--color-table-principal);
}

.principal table th{
  font-size: 13.5px !important;
}
.principal table td{
  font-size: 13.5px !important;
}

.secundario{
  background-color: var(--color-table-secundario) !important;
  border-radius: 20px;
  padding-bottom: 2vh !important;
  margin-left: 5vh;
  margin-right: 2.5vh;
}


.secundario table th{
  font-size: 12.5px !important;
}

.secundario table td{
  font-size: 12.5px !important;
}

.title-card{
  font-size: 2.2vh;
}

.sub-title-card{
  font-size: 1.5vh;
}

.button-secondary{
    background-color: #73af00 !important;
    border-radius: 20px !important;
    color: white !important;
    font-weight: bold !important;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    height: 4.5vh !important;
    width: 10vw !important;
    font-size: 1.3vh !important;
}



.header{
  position: fixed;
  top: 0;
  left: 0;
  padding-left: 5%;
  padding-right: 5%;
  z-index: 9999;
  width: 100%;
  height: 14vh;
}


.xl-row table tbody> tr:nth-child(2){
  line-height: 4.6 !important;
}

.base-new-table table td{
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 600;
  color: #607091;
}

.base-new-table table {
  border-collapse: collapse;
  border-radius: 1em;
  overflow: hidden;
  box-shadow: 0 0 0 1px #bbb4b4;
}

.base-new-table table, th, td {
  border: 1px solid #bbb4b4;
  border-collapse: collapse;
}

.base-new-table table th{
  text-align: center !important;  
  font-family: 'Barlow';
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
}


.first-color table thead tr:nth-child(1) th:nth-child(2)  {
  background: linear-gradient(242.56deg, #2e4b7e -53.41%, #1f3864 94.61%);
  padding: 0vh 1vh 0vh 1vh !important;
  color: #FFFFFF !important; 
}

.first-color table thead tr:nth-child(2) th:not(:nth-child(0))  {
  background: linear-gradient(242.56deg, #8eaadb -53.41%, #8eaadb 94.61%);
  padding: 0vh 1vh 0vh 1vh !important;
  color: #FFFFFF !important; 
}


.second-color table thead tr:nth-child(1) th:nth-child(1)  {
  background: linear-gradient(242.56deg, #a86132 -53.41%, #833c0b 94.61%);
  padding: 0vh 1vh 0vh 1vh !important;
  color: #FFFFFF !important; 
}

.second-color table thead tr:nth-child(2) th{
  background: linear-gradient(242.56deg, #f4b083 -53.41%, #f4b083 94.61%);
  padding: 0vh 1vh 0vh 1vh !important;
  color: #FFFFFF !important; 
}

.third-color table thead tr:nth-child(1) th:nth-child(1)  {
  background: linear-gradient(242.56deg, #fabf98 -53.41%, #f4b083 94.61%);
  padding: 0vh 1vh 0vh 1vh !important;
  color: #FFFFFF !important; 
}

.third-color table thead tr:nth-child(2) th{
  background: linear-gradient(242.56deg, #f8d3ba -53.41%, #f8d3ba 94.61%);
  padding: 0vh 1vh 0vh 1vh !important;
  color: #FFFFFF !important; 
}


</style>