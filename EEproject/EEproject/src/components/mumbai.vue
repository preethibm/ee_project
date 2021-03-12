<template>
  <div>
    <div class="hotel-bang" v-show="hola">
        <div class="bang-img1" id="q">
            <h3><u>Taj Lands End </u></h3><br>
            <h4>Bandstand, Bandra West,<br> Maharashtra, Bandra, 400050 Mumbai, India </h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img2" id="q">
            <h3><u>Trident Nariman Point</u></h3><br>
            <h4>Nariman Point, 400021<br> Mumbai, India </h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img3" id="q">
            <h3><u>Sofitel Mumbai </u></h3><br>
            <h4>C-57, Bandra Kurla Complex, <br> Bandra, 400051 Mumbai, India</h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img4" id="q">
            <h3><u>Renaissance Mumbai</u></h3><br>
            <h4> 2 & 3B, Near Chinmayanand Ashram, <br> Powai, Powai, 400087 Mumbai, India</h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img5" id="q">
            <h3><u>The Orchid</u></h3><br>
            <h4>Nehru Road, Vile Parle (East),<br> Adjacent To Domestic Airport,<br> 400099 Mumbai, India </h4>
            <button v-on:click="book">BOOK</button>
        </div>
    </div>
    <div v-show="!hola" v-if="hexa">
        <div class="form-group">
            <label>HOTEL NAME:</label>
            <select name="" id="" v-model="hello">
               <option value="Taj Lands End ">Taj Lands End </option>
               <option value="The Orchid">The Orchid</option>
               <option value="Renaissance Mumbai">Renaissance Mumbai</option>
               <option value="Sofitel Mumbai">Sofitel Mumbai</option>
               <option value="Trident Nariman Point">Trident Nariman Point</option>
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
      x:Math.random()
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
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/138/13800549.jpg");
    background-position: left;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 420px;
    
}
h4{
    margin-top: -53px;
}
.bang-img2{
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/328/32810813.jpg");
    background-position: left;
    background-size: 220px;
    background-repeat: no-repeat;
    height: 420px;
    margin-right: 20px;
}
.bang-img3{
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/271/271473562.jpg");
    background-position: left;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 460px;
    
}
.bang-img4{
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/135/135186348.jpg");
    background-position: left;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 400px;
    
}
.bang-img5{
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/248/248811829.jpg");
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