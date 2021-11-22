<template>
  <div id="app">
    <Navigation/>
    <h1> Eurosong Festival </h1>
    <counter/>
  <feedback
    v-for="(message, index) in messages" :key= "index"
    :message="message.message"
    :classType="message.classType"
  />

  <button @click="addMessage">
    Add Message
  </button>

  </div>
</template>

<script>
//importing the style of for the app.
import style from './scss/style.scss';

//Components
import Navigation from './components/Navigation.vue';
import Counter from './components/Counter.vue';
import Feedback from './components/Feedback.vue';

//App component
export default {
  name: 'App',
  components :{
    Navigation,
    Counter,
    Feedback
    },
    data(){
      return{
        messages: [
          {
            message: "er is een fout gebeurd",
            classType:"warning"
          },
          {
            message: "tis kapot",
            classType:"error"
          },
          {
            message: "tis gelukt",
            classType:"success"
          }
        ]
        }
      },
      methods: {
        addMessage(){
            this.messages.push(
              {
                messages: "Hallo nieuwe feedback item", 
                classType: "Success"
              })
          }
        }
}
</script>

