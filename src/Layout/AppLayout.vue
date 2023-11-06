<template>
  <v-card class="elevation-0">
    <v-layout>
      <v-app-bar 
        class="flex justify-between flex-row items-center space-x-8"
        color="greenDark"
      >
        <v-app-bar-nav-icon @click="drawer = !drawer" class="d-xs-flex d-lg-none"></v-app-bar-nav-icon>
        <Navbar/>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" color="greenDark" temporary >
        <v-list nav>
          <v-list-item v-for="page in pages" 
            :key="page.route" 
            :to="page.route" 
            class="text-white p-2 flex flex-col"
          >
            {{page.name}}
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main class="flex">
        <span class="backgroundSpan bg-cover z-1 h-2/6 w-full absolute " :style="{ backgroundImage: 'url(' + bg + ')', width: '100%' }"> </span>
        <router-view class=" z-10 routerView realtive px-7 py-5 "/>

      </v-main>
    </v-layout>
  </v-card>
  
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar.vue'
import pages from  '../../data/pages'

const drawer = ref(null);

const bg = require('@/assets/backgroundTreen.png');

</script>

<style>

</style>