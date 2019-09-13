<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
    <b-navbar>
      <template slot="start">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Hem
            </b-navbar-item>
            <b-navbar-item  tag="router-link" :to="{ path: '/booking' }">
                Bokning
            </b-navbar-item>
            <b-navbar-item>
              <a target="_blank" href="https://www.facebook.com/groups/vallgossen/">facebook</a>
            </b-navbar-item>
        </template>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
