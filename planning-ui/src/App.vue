<template>
<v-app>
  <div>
    <v-card class="ma-5">
      <v-card-title class="accent white--text">Planning</v-card-title>
      <v-data-table
    :headers="headers"
    :items="planning"
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
     this.$Axios.get('http://localhost:3000/planning/GL4')
     .then((res) => {
        this.planning = res.data   
     }).catch(() => {
        alert("error occured while getting products")
     })
  },

  data: () => ({
        headers: [
          { text: 'Time', value: 'time' },
          { text: 'Event', value: 'event' },
        ],
        planning:[]
      }),
};
</script>
