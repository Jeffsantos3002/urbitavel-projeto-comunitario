<template>
  <div>
    <div class="w-full h-5 bg-gray"></div>
    <div class=" flex flex-col justify-center space-y-3.5 bg-footer bg-cover w-full  h-80 px-10 sm:px-36 pt-14 pb-28 ">
      <h4>
        Cadastre-se abaixo!
      </h4>
      <p>
        Receba alertas de ações e novos conteúdos no seu email.
      </p>
      <div class="w-72 bg-white flex border">
        <input type="email" placeholder="Email" class="pl-2 w-full focus:outline-none">
      </div>
        <div class="w-48">
          <v-btn variant="outlined" class="bg-white">
            <span class="text-lilac">
              Inscrever-se         
            </span>
          </v-btn>
      </div>
        
     
    </div>
    <div class="bg-title w-full	h-20">
   
    </div>
  </div>
</template>
<script setup>

</script>

<style>
.v-label.v-field-label{
  top: 20% !important;
  font-size: 16px;
}

.v-field__overlay{
  background-color: white !important; 
}

.v-btn--variant-outlined {
  border: thin solid #3b4e92;
  background-color: white;
}
</style>