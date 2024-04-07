<template>
  <div class="bg-[#D9D9D9] flex flex-row items-center justify-center p-5 m-2.5 w-64 h-28 space-x-5">
    <img v-if="icon" :src="require('../assets/icons/' + icon)" :alt="alt">
    <p class="text-base ">{{ texto }}</p>

  </div>
</template>

<script setup>
const requisição = '../assets/icons/';
import { defineProps } from 'vue';

const props = defineProps({
  icon: String,
  texto: String,
  alt: String
});
</script>
