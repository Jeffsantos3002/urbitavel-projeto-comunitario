<template>
  <div class="w-full flex flex-row items-center px-5 ">
    <div class="flex items-center w-full space-x-4">
      <h1 class="text-4xl text-white font-normal">URBITÁVEL</h1>
      <img src="../assets/icons/salvando 1.svg" alt="logo"/>
        <div class="bg-greenDark w-full flex flex-row hidden lg:flex"  >
          <router-link v-for="page in pages" 
            :key="page.route" 
            :to="page.route" 
            class="text-white p-2 flex flex-row"
            color="transparent"
          >
            {{page.name}}
          </router-link>
        </div>
    </div>
    <div class="">
        <router-link to="/apoie" class="text-brown text-base font-semibold bg-white py-2 px-8 rounded-3xl">
          Apoie
        </router-link>
    </div>
  </div>     
</template>

<script setup>

import pages from  '../../data/pages'
</script>
