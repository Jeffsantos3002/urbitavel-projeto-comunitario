<template>
  <v-card class="elevation-0">
    <v-layout class="flex flex-col">
      <v-app-bar 
        class="flex justify-between flex-row items-center space-x-8"
        color="greenDark"
      >
        <v-app-bar-nav-icon no-overlay
          @click="drawer = !drawer" 
          class="d-xs-flex d-lg-none absolute v-btn--no-hover" 
          rounded="xl" 
          :ripple="false">
        </v-app-bar-nav-icon>
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
          <v-list-item class="">
            <router-link to="/apoie" class="text-white p-2 flex sm:hidden">
              Apoie
            </router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main class="flex w-full justify-center">
        <span class="backgroundSpan bg-cover z-1 h-[450px] w-full absolute " :style="{ backgroundImage: 'url(' + bg + ')' }"> </span>
        <router-view class=" z-10 realtive px-5 md:px-14 py-5 "/>
      </v-main>
      <FooterUrb/>
    </v-layout>
  </v-card>
  
</template>

<script setup>
import { ref } from 'vue';
import Navbar from '@/components/navbar.vue'
import pages from  '../../data/pages'
import FooterUrb from '@/components/footer.vue'

const drawer = ref(null);

const bg = require('@/assets/backgroundTreen.png');

</script>

<style>
.v-btn--variant-text .v-btn__overlay {
  background-color: transparent  !important;
}
</style>