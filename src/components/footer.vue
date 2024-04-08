<template>
  <div>
    <div class="w-full h-5 bg-gray"></div>

    <form id="form" class=" flex flex-col justify-center space-y-3.5 bg-footer bg-cover w-full  h-80 px-10 sm:px-36 md:pt-14 md:pb-28 ">
      <h4>
        Cadastre-se abaixo!
      </h4>
      <p>
        Receba alertas de ações e novos conteúdos no seu email.
      </p>
      <div class="w-48 sm:w-72 bg-white flex flex-col border pl-2">
        <input id="email" type="email" placeholder="Email" class=" w-full focus:outline-none">
      </div>
      <p v-if="verificaEmail" class="text-white font-bold text-sm mt-2">{{ verificaEmail }}</p>
      <div class="w-48">
        <v-btn variant="outlined"  :style="{ borderColor: '#3b4e92' }" class="bg-white" @click.prevent="handleSubmit" >
          <span class="text-lilac">
            Inscrever-se         
          </span>
          <v-dialog 
            v-model="dialog"
            width="auto"
          >
            <v-card class="flex flex-col items-center justify-center py-10">
              <v-card-text> Você foi cadastrado com sucesso! </v-card-text>
              <v-icon
                end
                icon="mdi-checkbox-marked-circle"
                color="title"
              ></v-icon>
            </v-card>
          </v-dialog>
        </v-btn>
      </div>   
    </form>
    <div class="bg-title w-full	h-20 flex items-center justify-center p-8">
      <p class="text-white text-center font-normal">TM Urbitável Brasil 2023 | Organização sem fins lucrativos </p>
    </div>
  </div>
</template>

<script setup>

import {ref} from 'vue'

const verificaEmail = ref()
const dialog = ref(false)

const resetEmail = () =>{
  dialog.value = false
  document.getElementById('form').submit()
}

const handleSubmit = () =>{
   checkEmail()
   if(verificaEmail.value == null){
    dialog.value = true
    setTimeout(resetEmail, 3000)

  }
  console.log(dialog.value)
}
const checkEmail = () => {
  const emailElement = document.getElementById('email')
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (emailElement.value === '') {
    verificaEmail.value = 'Campo obrigatório'
  } else if (emailRegex.test(emailElement.value)) {
    verificaEmail.value= null
  } else {
    verificaEmail.value = 'Email inválido'
  }
}
</script>

<style>
.v-label.v-field-label{
  top: 20% !important;
  font-size: 16px;
}

.v-field__overlay{
  background-color: white !important; 
}

</style>