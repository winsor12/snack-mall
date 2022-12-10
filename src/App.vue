<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script></script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --color-primary-light: #fec163;
  --color-primary-dark: #de4313;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
  overflow: auto;
}

body {
<<<<<<< HEAD
  /* overflow: hidden; */
=======
  overflow: scroll;
>>>>>>> 1b08afd61e96769e5bdade20751d3a9284b9fe87
}
</style>
