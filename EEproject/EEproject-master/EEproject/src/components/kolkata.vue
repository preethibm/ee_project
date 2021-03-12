<template>
  <div>
    <div class="hotel-bang" v-show="hola">
        <div class="bang-img1" id="q">
            <h3><u>Taj Bengal</u></h3><br>
            <h4>34B, Belvedere Road, <br> Alipore Kolkata 700027, <br> 400003 Kolkata, India</h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img2" id="q">
            <h3><u>JW Marriott Hotel </u></h3><br>
            <h4>4A, J.B.S. Haldane Avenue,<br> 700105 Kolkata, India</h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img3" id="q">
            <h3><u>Hyatt Regency </u></h3><br>
            <h4>JA-1 Sector III, Salt Lake City,<br> 700098 Kolkata, India</h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img4" id="q">
            <h3><u>Vivanta Kolkata </u></h3><br>
            <h4>1930, Rajdanga Main Road,<br> Kasba,, 700107<br> Kolkata, India</h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img5" id="q">
            <h3><u>Hotel The Westin Kolkata </u></h3><br>
            <h4>Plot No. CBD/2, 700156 <br> Kolkata, India </h4>
            <button v-on:click="book">BOOK</button>
        </div>
    </div>
    <div v-show="!hola" v-if="hexa">
        <div class="form-group">
            <label>HOTEL NAME:</label>
            <select name="" id="" v-model="hello">
               <option value="Taj Bengal">Taj Bengal</option>
               <option value="HOTELHotel The Westin Kolkata ">Hotel The Westin Kolkata </option>
               <option value="Hyatt Regency">Hyatt Regency</option>
               <option value="JW Marriott Hotel">JW Marriott Hotel</option>
               <option value="Vivanta Kolkata">Vivanta Kolkata </option>
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
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/176/176691961.jpg");
    background-position: left;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 420px;
    
}
h4{
    margin-top: -53px;
}
.bang-img2{
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/235/235321204.jpg");
    background-position: left;
    background-size: 150px;
    background-repeat: no-repeat;
    height: 420px;
    margin-right: 20px;
}
.bang-img3{
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/131/131386249.jpg");
    background-position: left;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 350px;
    
}
.bang-img4{
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/222/222493550.jpg");
    background-position: left;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 400px;
    
}
.bang-img5{
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/178/178774236.jpg");
    background-position: left;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 340px;
    
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