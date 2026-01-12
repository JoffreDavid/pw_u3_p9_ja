<template>
  <h2>Hola Mundo</h2>
  <h1>Consultando los datos del Estudiante</h1>
  <h3>{{ idEstudiante }}</h3>
  <button v-on:click="botonId()">MostrarId</button>
</template>

<script>
export default {
    data(){
        return{
            idEstudiante: null
        };
    },
    created(){
        console.log(this.$route);
        console.log(this.$route.params.id);
        //this.idEstudiante=this.$route.params.id;
        console.log(this.$route.query.anio);
        console.log(this.$route.query.mes);
        console.log(this.$route.query.apellido)
    },
    methods:{
        botonId(){
            this.idEstudiante=this.$route.params.id;
        }
    }
}
</script>

<style scoped>

</style>