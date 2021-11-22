<template>
  <div id="app">
  <nav class="c-nav">
    <ul class="c-nav-list">
      <li class="c-nav-list-item"> Home </li>
      <li class="c-nav-list-item"> About Us </li>
      <li class="c-nav-list-item"> Contact </li>
    
    </ul>

  </nav>
    <h1> Eurosong Festival </h1>

  <div class="c-feedback warning">
    er is een fout gebeurd
  </div>

  <div class="c-feedback error">
    tis kapot
  </div>

  <div class="c-feedback succes">
    tis gelukt
  </div>
  </div>
</template>

<script>
//importing the style of for the app.
import style from './scss/style.scss';

export default {
  name: 'App',

}
</script>

