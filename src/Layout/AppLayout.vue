<template>
  <v-card>
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
            @click="console.log('cliked')"
          >
            {{page.name}}
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main class="w-full">
        <v-card>
          <router-view class="w-full"/>
        </v-card>
          
      </v-main>
    </v-layout>
  </v-card>
  
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar.vue'
import pages from  '../../data/pages'

const drawer = ref(null);

</script>
