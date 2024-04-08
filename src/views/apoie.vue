<template>
  <CardUrbitavel class="mx-10 my-10 md:my-20">
    <div class="flex flex-col items-center justify-center space-y-20 my-10">
      <div class="flex flex-col items-center justify-center space-y-2">
        <h1 class="text-3xl md:text-4xl text-center">
          Doe agora mesmo.
        </h1>
        <p class="text-center text-base w-2/3">Precisamos de recursos para proteger a Terra e lutar contra o descarte indevido de lixo.</p>
      </div>
      <div class="flex flex-col items-center justify-center ">
        <img :src="lixo" alt="reciclagem-img" class="w-36"/>
        <p class="text-base">Qualquer valor é bem vindo!</p>
      </div>
      <div class="flex flex-col space-y-5 items-center justify-center ">
        <label for="valor" class="text-base font-medium mb-5">Insira o valor que você gostaria de doar:</label>
        <div class="flex flex-row bg-[#D9D9D9] space-x-2 px-5 py-2 w-44 xs:w-52 sm:w-72 rounded-xl">
          <p class="text-6xl">R$ </p>
          <input v-model="valor" id="valor" type="text" class="w-full focus:outline-none text-5xl" >
        </div>
        <p v-if="verificaValor" class="text-title font-bold text-sm mt-2">{{ verificaValor }}</p>
        <v-btn color="#D9D9D9" class="rounded-xl text-caption" density="compact" :padding="['10px', null]" @click.prevent="handleSubmit">
          <span class="text-title font-bold">
            Realizar doação         
          </span>
          <v-dialog 
              v-model="dialog"
              width="auto"
            >
              <v-card class="flex flex-col items-center justify-center px-10 pb-10 pt-5">
                <img :src="solo" alt="logo" color="black">
                <v-card-text>QR Code pix</v-card-text>
                <img :src="qr" alt="qr-code" class="w-72"/>
                <v-card-text class="text-h6 font-weight-bold text-title"> R$ <span class="text-h6 text-title">{{ valor }}</span></v-card-text>
                <div>
                  <div class="flex flex-row space-x-2">
                    <p class="font-bold">Chave PIX: </p>
                    <p>(79) 55515-5121</p>
                  </div >
                  <div class="flex flex-row space-x-2">
                    <p class="font-bold">Nome: </p>
                    <p>Urbitável</p>
                  </div>
                  <div class="flex flex-row space-x-2">
                    <p class="font-bold">Tipo de Chave: </p>
                    <p>Telefone</p>
                  </div>
                  <div></div>
                </div>
                <!-- <v-icon
                  end
                  icon="mdi-checkbox-marked-circle"
                  color="title"
                ></v-icon> -->
              </v-card>
            </v-dialog>
          </v-btn>
      </div>
    </div>
  </CardUrbitavel>
</template>

<script setup>
import CardUrbitavel from '@/components/CardUrbitavel.vue';
import lixo from "@/assets/icons/trash.svg"
import qr from "@/assets/qrcode-pix.png"
import solo from "@/assets/icons/solo.svg"


import {ref} from 'vue'

const verificaValor = ref()
const valor = ref()
const dialog = ref(false)

const checkValor = () => {
  // Se o campo estiver vazio, exibe mensagem de erro
  if (!valor.value) {
    verificaValor.value = "Campo Obrigatório";
    return;
  }
  
  const regex = /^\d+(\.\d+)?$/;

  // Tenta converter o valor para número
  const numero = regex.test(valor.value);
  
  // Se o valor não for um número válido, exibe mensagem de erro
  if (!numero) {
    verificaValor.value = "Digite um valor válido";
    return;
  }

  // Limpa a mensagem de erro se o valor for válido
  verificaValor.value = null;
}
const handleSubmit = () =>{
   checkValor()
   if (verificaValor.value == null) {
    dialog.value = !dialog.value
  }
  console.log(verificaValor)
}
</script>

<style>
.v-btn--size-default {
  padding:10px 15px 10px 15px !important;
  height: 40px !important;

  .input-number::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
}</style>