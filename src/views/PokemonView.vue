<template>
    <PokemonImagen v-if="mostrar" :PokemonId="pokemonGanador"/>
    <PokemonOpciones 
    @seleccionado="evaluarGanador($event)"
    :listaPokemon="pokemonArr"
    />

    <p v-if="mensaje">{{ mensaje }}</p>

    <div class="boton_destr">
    <button @click="destruir()">Destruir</button>
    </div>
    
</template>

<script>

import PokemonImagen from "../components/PokemonImagen.vue"
import PokemonOpciones from "../components/PokemonOpciones.vue"
import {obtenerVectorPokemonFacade, obtenerAleatorioFacade} from "../clients/PokemonClient"
export default {

    components: {
    PokemonImagen,
    PokemonOpciones
    },
    data(){
        return{
            pokemonArr:[],
            pokemonGanador: null,
            mensaje: null,
            mostrar: true
        };
    },

    /*Crear el componente */
    beforeCreate(){
        console.log("beforeCreate: apenas inicia la instancia del componente");
    },

    created(){
        console.log("created Se ejecuta cuando ya se resolvienron data, compueted, watch, methods");
    },
    /*Montar el componente: renderizar o visualizar el componente */
    beforeMount(){
        console.log("beforeMount: se ejecuta justo antes de renderizar un componente o elemento html");
    },

    mounted(){
        console.log("Componente montado")
        console.log("componente montado: el componente ya se renderizo");
        this.iniciarJuego();
    },

    /*Actualizacion de un componente */
    beforeUpdate(){
        console.log("beforeUpdate: cuando cambia un data o un props de un componente y vue esta por re-renderizar el cambio")
    },
    updated(){
        console.log("updated: cuando ya se actualizo despues de la rerenderizacion")
    },

    methods:{
        async iniciarJuego(){
            this.pokemonArr = await obtenerVectorPokemonFacade();
            const aleatorioId = obtenerAleatorioFacade(0,3);
            this.pokemonGanador = this.pokemonArr[aleatorioId].id;

        },

        destruir(){
            this.mostrar=false;
        },
        evaluarGanador(idGanador){
            console.log("Valor recibido desde el padre");
            console.log(idGanador);
            if(idGanador == this.pokemonGanador){
                console.log("Ganaste");
                this.mensaje="Ganaste!!"
            }else{
                console.log("Perdiste");
                this.mensaje="Perdiste!!"
            }
        }
    }
}
</script>

<style scoped>

.boton_destr {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
</style>