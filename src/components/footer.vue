<template>
  <div>
    <div class="w-full h-5 bg-gray">/</div>
    <div class=" flex flex-col justify-center bg-footer bg-cover w-full  h-80 px-10 sm:px-36 pt-14 pb-28 ">
      <!-- <img :src="imgFooter" alt="imgFooter" class="bg-cover w-full"> -->
      <h4>
          Cadastre-se abaixo!
        </h4>
        <p>
          Receba alertas de ações e novos conteúdos no seu email.
        </p>
        <div class="w-72 flex  bg-white h-5 overflow-hidden">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            hide-details
            required
            color="white"
            class="w-full"
          ></v-text-field>
        </div>
        <div class="bg-white w-48">
          <v-btn variant="outlined" class="w-48">
          <span class="text-lilac">
            Inscrever-se         
          </span>
        </v-btn>
        </div>
        
     
    </div>
    <div class="bg-title w-full max-h-96	h-20">
   
    </div>
  </div>
</template>
<script setup>

const imgFooter = require('@/assets/backgroundRegister.png');

</script>

<style>
.v-label.v-field-label{
  top: 20% !important;
  font-size: 16px;
}

.v-field__overlay{
  background-color: white !important; 
}
.v-field.v-field--active .v-label.v-field-label--floating{
}
.v-btn--variant-outlined {
  border: thin solid #3b4e92;
  background-color: white;
}

</style>