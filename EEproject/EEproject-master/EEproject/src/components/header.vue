<template>
  <div>
      <header class="app-header">
          <h2 id="app">TRip JaO</h2>
          <ul class="links">
              <li><router-link to='/about' v-on:click="aboutpage">ABOUT</router-link></li>
              <li><router-link to='/cities' v-on:click="aboutpage">CITIES</router-link></li>
              <li><router-link to='/contact' v-on:click="aboutpage">CONTACT</router-link></li>
          </ul>
      </header>
  </div>    
</template>

<script>
export default {
  
  data () { 
    return {
      
    }
  }
  
}
</script>

<style scoped>
.router-link{
  text-decoration: none;
}

li{
  display: inline-block;
  margin-left: 30px;
  text-decoration: none;
}
.links{
  margin-left: 700px;
  margin-top: -50px;
  text-decoration: none;
}
.app-header{
  background-color: black;
  color: azure;
  padding: 15px;
}
#app{
  margin-left:30px;
  font-family:Georgia, 'Times New Roman', Times, serif;
}
a{
  text-decoration: none;
  color: white;
  font-size: 25px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
p{
  font-family:Brush Script MT, Brush Script Std, cursive;
  font-size: 30px;
}


</style>
