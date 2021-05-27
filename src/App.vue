<template>
  <div class='container w-11/12 p-6 flex flex-col justify-center items-center'>
    <img class="logo w-1/3" 
      src='https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg'
    >
    <h1 class="title mt-4 mb-5 text-lg pb-4">Bienvenido a la Pokédex Online</h1>
    <div class="about mx-width relative flex flex-col justify-center items-start pl-4">
      <h3 class='my-4 font-bold'>¿Para qué sirve esta Pokédex?</h3>
      <p>
        La Pokédex es una enciclopedia electrónica portátil perteneciente al universo de Pokémon
        que los entrenadores llevan consigo para registrar automáticamente las fichas de todas las 
        diversas especies vistas y capturadas durante su viaje.
      </p>
      <p class="disclaimer mt-0 mb-0">
        Esta Pokédex está implementada utilizando la 
        <a class="link text-sm font-bold" href="https://pokeapi.co/" target="_blank">
          siguiente API
        </a>
      </p>
      <button class="py-3 px-4 mt-5 white rounded-full">Comenzar</button>
    </div>
  </div>
</template>

<style lang="scss">
  @import './styles/_colors.scss';
  @import './styles/index.scss';

  body {
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $pokeblack;
    background: $pokered;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about {
    min-height: 300px;

    &::before {
      content: '';
      background-image: url('https://www.solofondos.com/wp-content/uploads/2016/01/Fondos-de-pantalla-pokemon.jpg');
      background-size: 100% 100%;
      width: 100%;
      min-height: 300px;
      left: 0;
      position: absolute;
      background-repeat: no-repeat;
      filter: blur(4px);
      opacity: .4;
    }
  }
</style>
