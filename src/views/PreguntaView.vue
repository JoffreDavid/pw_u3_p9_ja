<template>
  <Pregunta />
</template>

<script>
import Pregunta from '@/components/Pregunta.vue';
export default {

    components: {
        Pregunta,
    },
};

</script>

<!-- Scoped me sirve para que los estidos no entren en conflicto por repeticion-->
<style scoped>
    /* Aqui puedo crear el estilo de mi componente Pregunta por herencia*/ 
    .contenedor_pregunta {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
    }
</style> 
