<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js & Phoenix & GraphQL App",
      getPost: undefined // Apollo will assign the result of its "user" query here!
    };
  },
  apollo: {
    // Apollo specific options
    // Here, we use gql to describe the data we want: a user with ID 1, and
    // Apollo will assign the result of that query to the 'user' key in data.
    getPost: { query: gql`
      {
        getPost(id:2) {
          title
        }
      }
    `
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
