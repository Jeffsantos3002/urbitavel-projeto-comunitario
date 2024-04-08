<template>
   <div class="flex items-center flex-col mt-40 space-y-24 w-1/2 mb-16">
      <CardUrbitavel>
        <div class=" flex flex-col space-y-11 lg:items-center  ">
          <h1 class="text-5xl text-title font-medium ">
              SOBRE NÓS
            </h1>
          <div class="flex justify-center">
            <img :src="imgHome" class="w-full"/>
          </div>
          <div class="flex flex-col items-center space-y-2">
              <p class="text-base"> 
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. 
                Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
                Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
                per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. 
                Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. 
                Aliquam in elementum tellus. 
              </p>
              <p class="text-base">
                Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. 
                Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. 
                Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. 
                Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. 
                Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
              </p>
          </div>
        </div> 
      </CardUrbitavel>
  </div>
</template>

<script setup>
import CardUrbitavel from '@/components/CardUrbitavel.vue';

const imgHome = require('@/assets/about.png');
</script>