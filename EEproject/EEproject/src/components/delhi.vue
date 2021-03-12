<template>
  <div>
    <div class="hotel-bang" v-show="hola">
        <div class="bang-img1" id="q">
            <h3><u>Taj Palace</u></h3><br>
            <h4>Sardar Patel Marg, Chanakyapuri<br>110021 New Delhi, India</h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img2" id="q">
            <h3><u>bloomrooms @ Janpath</u></h3><br>
            <h4>1 Janpath Lane, Connaught Place<br>110001 New Delhi, India</h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img3" id="q">
            <h3><u>The Imperial</u></h3><br>
            <h4>Janpath, Connaught Place,<br> 110001 New Delhi, India </h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img4" id="q">
            <h3><u>Hotel Shivdev International</u></h3><br>
            <h4> Airport shuttle
              8522,<br> Arakashan Road Behind Sheila Cinema, Paharganj, Delhi,<br> Paharganj, 110055 New Delhi, India</h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img5" id="q">
            <h3><u> Maidens Hotel </u></h3><br>
            <h4>7, Sham Nath Marg, 110054 <br>New Delhi, India </h4>
            <button v-on:click="book">BOOK</button>
        </div>
    </div>
    <div v-show="!hola" v-if="hexa">
        <div class="form-group">
            <label>HOTEL NAME:</label>
            <select name="" id="" v-model="hello">
               <option value="Taj Palace">Taj Palace</option>
               <option value=" Maidens Hotel">IBIS HOTEL</option>
               <option value="Hotel Shivdev International">Hotel Shivdev International</option>
               <option value="The Imperial">The Imperial</option>
               <option value="bloomrooms @ Janpath">bloomrooms @ Janpath</option>
            </select>
        </div>
        <div class="form-group">
          <label for="name">NAME</label>
          <input type="text" name="name" id="name" v-model="name">
        </div>
        <div class="form-group">
          <label for="email">EMAIL</label>
          <input type="email" name="email" id="email" v-model="email">
        </div>
        <div class="form-group" id="m">
            <button v-on:click="confirm" class="m">CONFIRM BOOKING</button>
        </div>
    </div>
    <div v-show="!hexa">
        <p>CONFIRMED BOOKING &#9989;</p>
        <p>THANKYOU FOR BOOKING</p>
        <p>HOTEL BOOKED : {{ hello }}</p>
        <p>YOUR ID : {{ x }}</p>
        <p>PLEASE CHECK YOUR MAIL : {{ email }}</p>
    </div>
  </div>
</template>

<script>


export default {
 
  data () {
    return {
      hola:true,
      hexa:true,
      name:"",
      email:"",
      message:"",
      hello:[],
      x:Math.random(),
      
    }
  },
  methods:{
      book:function(){
          this.hola=false
      },
      confirm:function(){
          this.hexa=false
      }
  }
}
</script>

<style scoped>
.hotel-bang{
    display: flex;
    
}

.bang-img1{
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/365/36573971.jpg");
    background-position: left;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 420px;
    
}
h4{
    margin-top: -53px;
}
.bang-img2{
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/248/248707976.jpg");
    background-position: left;
    background-size: 100px;
    background-repeat: no-repeat;
    height: 420px;
    margin-right: 20px;
}
.bang-img3{
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/249/249988862.jpg");
    background-position: left;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 460px;
    
}
.bang-img4{
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/271/271097939.jpg");
    background-position: left;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 400px;
    margin-left: 20px;
}
.bang-img5{
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/320/32089146.jpg");
    background-position: left;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 420px;
    
}
h2{
    display: inline-block;
}
input{
    padding: 10px;
}
.form-group{
    margin-top: 20px;
    text-align: center;
}

#message{
    height:100px;
    width: 500px;
}
.m{
    padding: 0 20px;
    
}
#m{
    margin-left: 50px;
    margin-bottom: 20px;
}
</style>