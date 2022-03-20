<template>
  <v-app id="nav">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>

      <router-link to="/ " class="mr-2">Home</router-link>
      <router-link to="/About" class="mr-2">About</router-link>
      <router-link to="/todo" class="mr-2">Todo</router-link>
      <router-link to="/Login" class="mr-2">Login</router-link>
      <router-link to="/Register" class="mr-2">Register</router-link>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style scoped>
#nav {
  padding: 0px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #000000;
  padding: auto;
  margin: auto;
}

#nav a.router-link-exact-active {
  color: #0087f5;
  background: rgb(3, 1, 146);
  border-radius: 0.5rem;
}
</style>
