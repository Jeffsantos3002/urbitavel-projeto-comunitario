<template>
  <div class="w-full flex flex-row items-center px-5 ">
    <div class="flex items-center justify-center w-full space-x-4">
      <h1 class="text-4xl text-white font-normal">URBITÁVEL</h1>
      <div class="w-8 hidden xl:flex">
        <img :src="logoSrc"/>
      </div>
        <div class="bg-greenDark w-full flex flex-row hidden lg:flex"  >
          <router-link v-for="page in pages" 
            :key="page.route" 
            :to="page.route" 
            class="text-white p-2 flex flex-row"
          >
            {{page.name}}
          </router-link>
        </div>
    </div>
    <div class="hidden sm:flex ">
        <router-link to="/apoie" class="text-brown text-base font-semibold bg-white p-2 px-8 rounded-3xl">
          Apoie
        </router-link>
    </div>
  </div>     
</template>

<script setup>

import pages from  '../../data/pages'

const logoSrc = require('@/assets/icons/logo.svg');
</script>
