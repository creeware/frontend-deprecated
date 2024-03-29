import Vue from "vue";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import VueApollo from "vue-apollo";
import App from "./App.vue";
import router from "@/router"


Vue.config.productionTip = false;

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:4000/graphql"
});

// Create the apollo client, with the Apollo caching.
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

// Install the vue plugin for VueApollo
Vue.use(VueApollo);
// Ant Design Vue
Vue.use(Antd);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  el: "#app",
  router: router,
  apolloProvider: apolloProvider,
  render: h => h(App)
}).$mount("#app");
