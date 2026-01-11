<template>
  <div class="pokemonContainer">
    <img :src="SrcImagen" alt="No se puede renderizar">
  </div>
</template>

<script>
export default {
    props: {
        PokemonId: {
            type: Number,
            required: true
        },
    },

    computed: {
        SrcImagen(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.PokemonId}.svg`;
        },
    },

    /*Desmontaje de un componente */
    beforeUnmount(){
        console.log("beforeUnmount: se ejecuta justo antes de que el componete se destruya");
    },
    unmounted(){
        console.log("unmounted: ya fue removido del DOM y destruido")
    }

};
</script>

<style scoped>

    img {
        position: relative;
        height: 200px;
        left: 44%;
    }

    .pokemonContainer{
        height: 200px;
    }

</style>