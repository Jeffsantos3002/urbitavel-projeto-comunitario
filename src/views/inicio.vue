<template>
  <div class="flex items-center flex-col mt-40 space-y-24">
    <div>
      <cardUrbitavel>
        <div class="flex flex-col lg:flex-row lg:space-x-24 space-y-16 lg:space-y-0 lg:items-center  ">
          <div class=" lg:w-3/6 flex flex-col items-center">
            <h1 class="text-5xl text-title font-bold mb-11">
              URBITÁVEL
            </h1>
            <div class=" flex flex-col space-y-2">
              <p class="text-base"> O projeto Urbitável é uma iniciativa coletiva de estudantes da FIAP,  Que busca apresentar uma solução sustentável,  relativa a um dos problemas ambientais mais ocorridos pelo mundo todo:</p>
              <p class="text-base">O inadequado descarte dos lixos e substratos prejudiciais  ao ambiente em meios urbanos. </p>
              <p class="text-base">Se trata, portanto, de uma ideia  interventiva que tem como objetivo recompensar a população urbana por descartar corretamente os seus lixos, através do programa consciente de descarte. </p>
            </div>
          </div>
          <div class="flex justify-center lg:w-3/6">
            <img :src="imgHome" class="w-full"/>
          </div>
      </div> 
    </cardUrbitavel>
    </div>
  
    <div class="flex flex-col  items-center">
      <h2 class="text-3xl text-center mb-5">Lutamos pela saúde do planeta que habitamos</h2>
      <h4 class="text-xl mb-16">Podemos mudar o mundo</h4>
      <div class="lg:w-3/5 mb-11">
        <p class="text-base">Se você quer defender o planeta e se somar às pessoas que atuam para proteger o meio ambiente, aqui é o seu lugar!</p>
        <p class="text-base">Nós acreditamos que um mundo mais verde, pacífico e justo para todas as formas de vida é possível, e não poupamos esforços para alcançá-lo.</p>
        <p class="text-base">Temos décadas de ativismo que muito nos ensinou e que nos mostra que ainda temos muito o que fazer.</p>
      </div>
      
        <v-btn variant="outlined" color="#3b4e92" :style="{ borderColor: '#3b4e92' }">
          <router-link to='/sobre' class="text-lilac ">
            saiba quem somos
          </router-link>
         
        </v-btn>
   
    </div>
  </div>
  
</template>

<script setup>
import CardUrbitavel from '@/components/CardUrbitavel.vue'

const imgHome = require('@/assets/trashBins.png');
</script>

<style>

</style>