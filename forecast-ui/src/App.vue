<template>
<v-app>
  <div>
    <v-card class="ma-5">
      <v-card-title class="accent white--text">Forecast</v-card-title>
      <v-data-table
    :headers="headers"
    :items="forecast"
    :items-per-page="5"
    class="elevation-1 ma-1"
  ></v-data-table>
    </v-card>

  </div>
</v-app>

</template>

<script>

export default {
  name: 'App',

  created() {
    //Get products lists
     this.$Axios.get('http://localhost:3000/forecast/GL4')
     .then((res) => {
        this.forecast = res.data   
     }).catch(() => {
        alert("error occured while getting products")
     })
  },

  data: () => ({
        headers: [
          { text: 'Day', value: 'day' },
          { text: 'Degree', value: 'degree' },
        ],
        forecast:[]
      }),
};
</script>
