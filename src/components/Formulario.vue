<template>
  <div>
    <CardUrbitavel>
      <form id="form" class="w-full flex flex-col items-center justify-center">
        <h1 class="text-5xl text-title text-center font-medium mb-2">
          Canal de comunicação
        </h1>
        <div class="md:w-96 flex flex-col space-y-10">
          <div>
            <p class="text-xl md:text-center text-[#484545] ">
              Entre em contato com nós via e-mail. 
            </p>
            <p class="text-xl text-center text-[#484545] ">
              Responderemos o mais rápido possível.
            </p>
          </div>
          
          <div class="flex flex-col">
            <label for="nome" class="text-sm font-medium">Nome <span class="color-title">*</span></label>
            <input id="nome" type="text" class="md:w-80 focus:outline-none border border-solid bg-white">
            <p v-if="verificaNome" class="text-title font-bold text-sm mt-2">{{ verificaNome }}</p>

          </div>
          <div class="flex flex-col">
            <label for="email" class="text-sm font-medium">Email <span class="color-title">*</span></label>
            <input id="email" type="email" class="md:w-80 focus:outline-none border border-solid	bg-white">
            <p v-if="verificaEmail" class="text-title font-bold text-sm mt-2">{{ verificaEmail }}</p>
          </div>
        </div>
        <div class="w-full flex flex-col space-y-2 mt-20">
          <label for="duvida" class="text-sm font-medium">Escreva sua mensagem ou dúvida: <span class="color-title">*</span></label>
          <textarea id="duvida" type="text" class=" sm:h-72 focus:outline-none border border-solid bg-white p-2" style="resize: none;"></textarea>
          <p v-if="verificaDuvida" class="text-title font-bold text-sm mt-2">{{ verificaDuvida }}</p>
        </div>
        <div class="w-full mt-14">
          <v-btn class="text-subtitle-1" color="#D9D9D9" size="small"  dark  @click.prevent="handleSubmit" ><span class="text-title">
              Enviar         
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
    </CardUrbitavel>
  </div>
     
</template>
<script setup>
import CardUrbitavel from './CardUrbitavel.vue';
import {ref} from 'vue'

const verificaEmail = ref()
const verificaNome = ref()
const verificaDuvida =  ref()

const dialog = ref(false)

const resetEmail = () =>{
  dialog.value = false
  document.getElementById('form').submit()
}

const handleSubmit = () =>{
   checkEmail()
   checkNome()
   checkDuvida()
   console.log(verificaDuvida.value, verificaEmail.value, verificaNome.value)
   if (verificaEmail.value == null && verificaDuvida.value == null && verificaNome.value === null) {
    dialog.value = true
    setTimeout(resetEmail, 3000)

  }
  console.log(verificaEmail, verificaNome)
}
const checkNome = () => {
  const nomeElement = document.getElementById('nome')

  if(nomeElement.value === ''){
    verificaNome.value = "Campo Obrigatório"
  }else{
    verificaNome.value = null
  }
}

const checkDuvida = ()=>{
  const duvidaElement = document.getElementById('duvida')

  if(duvidaElement.value === ''){
    verificaDuvida.value = "Campo Obrigatório"
  }else{
    verificaDuvida.value = null
  }
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
  // console.log(emailElement.value)
}
</script>