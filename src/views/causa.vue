<template>
  <div class="flex items-center flex-col mt-60 mb-44">
    <CardUrbitavel class="sm:5/12 lg:w-5/12 my-10">
      <p class="text-xl w-full text-[#484545] text-justify">
        Quais serão as consequências para o meio ambiente se houver um mal gerenciamento e descarte incorreto dos lixos em meios urbanos?
      </p>
    </CardUrbitavel>
    <div class="flex flex-col items-center justify-center space-y-14" >
      <div class="flex flex-wrap items-center justify-center w-2/3 ">
        <CardCausas v-for="(card, index) in cards" :key="index" :icon="card.img" :alt="card.alt" :texto="card.texto" />

      </div>
      <div class=" mx-5 md:w-1/3 space-y-5">
        <p class="text-justify">
          Poluição do ar: A queima de lixo em aterros mal gerenciados pode liberar gases tóxicos, como o dióxido de carbono, 
          metano e óxidos de nitrogênio, que contribuem para o aquecimento global e a poluição do ar.
        </p>
        <p class="text-justify">
          Poluição da água: O descarte inadequado de lixo pode contaminar os corpos d'água próximos, prejudicando a vida marinha
          e a qualidade da água. Além disso, substâncias tóxicas podem se infiltrar no solo, contaminando os aquíferos subterrâneos.
        </p>
        <p class="text-justify">
          Emissão de gases de efeito estufa: Os aterros sanitários são responsáveis por cerca de 20% das emissões totais de metano, um gás de 
          efeito estufa muito mais potente que o dióxido de carbono. Isso contribui para o aquecimento global e as mudanças climáticas.
        </p>
        <p class="text-justify">
          Prejuízos à saúde pública: O acúmulo de lixo em áreas urbanas pode atrair pragas como mosquitos, ratos e
          baratas, que podem transmitir doenças para os humanos.
        </p>
        <p class="text-justify">
          Degradação do solo: A disposição inadequada de lixo pode causar erosão do solo e a contaminação com produtos químicos tóxicos, 
          tornando-o incapaz de sustentar a vida vegetal.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import CardUrbitavel from '@/components/CardUrbitavel.vue';
import CardCausas from '@/components/CardCausas.vue';
// import solo from 'solo.svg';

const cards = [
  {
    img: "solo.svg",
    alt: "solo",
    texto: "Poluição do solo e enchentes"
  },
  {
    img: "gota-de-agua-2.svg",
    alt: "gota-de-água",
    texto: "Poluição da água"
  },
  {
    img: "ar-1.svg",
    alt: "ar",
    texto: "Poluição do ar"
  },
  {
    img: "recursos-humanos.svg",
    alt: "humanos",
    texto: "Riscos para a saúde humana"
  },
  {
    img: "coin.svg",
    alt: "coin",
    texto: "Impactos na economia"
  },
  {
    img: "reciclar-1.svg",
    alt: "resíduos",
    texto: "Dificuldades no manejo de resíduos"
  }
];
</script>
