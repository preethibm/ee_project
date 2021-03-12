<template>
  <div>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
      <section id="contact-form">
    <div class="container">
      <h1 class="l-heading"><span class="text-primary">CONTACT </span>  US </h1>
      <div v-show="x">
        <p>{{ title }} </p>
        <div class="form-group">
          <label for="name">NAME</label>
          <input type="text" name="name" id="name" v-model="name">
        </div>
        <div class="form-group">
          <label for="email">EMAIL</label>
          <input type="email" name="email" id="email" v-model="email">
        </div>
        <div class="form-group">
          <label for="message">MESSAGE</label>
          <textarea name="message" id="message" v-model="message"></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="btn" v-on:click="hurray">SUBMIT</button>
        </div>
      </div>  
    </div>
    <div v-show="!x" class="id">
      <h2>{{ title }}</h2>
      <p><b>YOUR RESPONSE HAS BEEN SUCCEESSFULLY UPDATED <span id="l">&#9989;</span></b></p>
      <p>NAME : {{ name }}</p>
      <p>EMAIL : {{ email }}</p>
      <p>FEEDBACK : {{ message }}</p>
    </div>
  </section>  
  <section id="contact-info" class="bg-light">
    <div class="container">
      <div class="box">
        <i class="fas fa-hotel fa-3x"></i>
        <h3>Location</h3>
        <p>428, Los Angeles , street colony,<br>
          Andres , London </p>
      </div>
      <div class="box">
        <i class="fas fa-phone fa-3x"></i>
        <h3>Phone Number</h3>
        <p>(656) 354 5446 </p>
      </div>
      <div class="box">
        <i class="fas fa-envelope fa-3x"></i>
        <h3>Email</h3>
        <p>Tripjao@gmail.com</p>
      </div>
    </div>
  </section>
    <div class="clr"></div>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      title:"PLEASE FILL THE FORM TO CONTACT US",
      name:"",
      email:"",
      message:"",
      x:true
    }
  },
  methods:{
    hurray:function(){
      
        this.x=false
        this.title="THANKS FOR FILLING THIS FORM"
      
    }
  }
}
</script>

<style scoped>
*{
  
  box-sizing: border-box;
}

#l{
  font-size: 40px;
}
.id{
  text-align: center;
}
.container{
  margin: auto;
  max-width: 900px;
  padding: 0 20px;
}
.text-primary{
  color: orangered;
}

.btn{
  color: white;
  background-color:black;
  font-size: 18px;
  padding: 13px 20px;
  text-decoration: none;
}
.btn:hover{
  background-color: orangered;
  color:black;
}

.bg-light{
  background-color: tomato;
}
.clr{
  clear: both;
}

.l-heading{
  font-size: 40px;
}



.box{
  float: left;
  width: 33.3%;
  padding: 50px;
  text-align: center;
}
.box i{
  margin-bottom: 20px;
}


#contact-form .form-group{
  margin-bottom: 20px;
}
#contact-form .form-group label,
#contact-form .form-group input,
#contact-form .form-group textarea{
  display: block;
  width: 100%;
  margin: 2px;
  padding: 10px;
}
#contact-form .form-group textarea{
  height: 200px;
}
#contact-form h1{
  margin-top: 20px;
}
#contact-form p{
  font-size: 20px;
}

#contact-form .form-group label{
  font-size: 20px;
}
#contact-form input:focus,
#contact-form textarea:focus{
  outline: none;
  border-color: yellow;
}
 a:hover,
 a.current{
  background-color: gray;
  color: blanchedalmond;
  padding: 15px;
}





</style>
