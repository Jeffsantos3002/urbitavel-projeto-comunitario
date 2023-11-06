<template>
  <div class="flex items-center flex-col">
    <cardUrbitavel>
      <div class="flex flex-row">
        <div class="w-1/2">
          <h1>
            URBITÁVEL
          </h1>
          <p> O projeto Urbitável é uma iniciativa coletiva de estudantes da FIAP,  Que busca apresentar uma solução sustentável,  relativa a um dos problemas ambientais mais ocorridos pelo mundo todo:</p>
          <p>O inadequado descarte dos lixos e substratos prejudiciais  ao ambiente em meios urbanos. </p>
          <p>Se trata, portanto, de uma ideia  interventiva que tem como objetivo recompensar a população urbana por descartar corretamente os seus lixos, através do programa consciente de descarte. </p>
        </div>
        <img :src="imgHome" class="w-1/2"/>
      </div> 
    </cardUrbitavel>
    <div>
      <h2>Lutamos pela saúde do planeta que habitamos</h2>
      <h4>Podemos mudar o mundo</h4>
      <div>
        <p>Se você quer defender o planeta e se somar às pessoas que atuam para proteger o meio ambiente, aqui é o seu lugar!</p>
        <p>Nós acreditamos que um mundo mais verde, pacífico e justo para todas as formas de vida é possível, e não poupamos esforços para alcançá-lo.</p>
        <p>Temos décadas de ativismo que muito nos ensinou e que nos mostra que ainda temos muito o que fazer.</p>
      </div>
      <v-btn>saiba quem somos</v-btn>
    </div>
  </div>
  
</template>

<script setup>
import CardUrbitavel from '@/components/CardUrbitavel.vue'

const imgHome = require('@/assets/trashBins.png');
</script>