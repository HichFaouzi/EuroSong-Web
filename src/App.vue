<template>
  <div id="app">
    <!-- Homepagina -->
    <homepage
      v-if="page == 'home'"

      @change-page="goToPage"
    />

    <!-- Game -->
    <gamepage
      v-if="page == 'game'"
      @change-page="goToPage"
    />

    <!-- Ranking -->
    
    <rankingpage
      v-if="page == 'ranking'"
      @change-page="goToPage"
    />

  </div>
</template>

<script>
import Homepage from './pages/Homepage.vue';
import Rankingpage from './pages/RankingPage.vue';
import Gamepage from './pages/Gamepage.vue';

//App component
export default {
  name: 'App',
  components :{
    Homepage,
    Gamepage,
    Rankingpage
    },
  data(){
    return {
      page: "ranking"
      }
    },
  methods: {
      goToPage(page){
        this.page = page;
      }
    }
}
</script>

<style lang="scss">
  @import "./styles/style.scss";
</style>
