<template>
  <div id="app">
    <header>
       <b-navbar toggleable="md" type="light" variant="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">vueCRUD</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/posts-manager">Collective Api / Cameras</b-nav-item>
          <b-nav-item to="/fun-manager">Fun Manager</b-nav-item>
          <b-nav-item href="#" @click.prevent="login">Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
  
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: rgb(53, 94, 77);
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 18px;
}
</style>
