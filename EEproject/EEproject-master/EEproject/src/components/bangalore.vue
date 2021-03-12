<template>
  <div>
    <div class="hotel-bang" v-show="hola">
        <div class="bang-img1" id="q">
            <h3><u>IBIS HOTEL</u></h3><br>
            <h4>No - 30, Rajaram Mohan Roy Road, Off,<br> Richmond Rd
             Bengaluru, Karnataka 560027</h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img2" id="q">
            <h3><u>HOTEL OBEROI</u></h3><br>
            <h4>37-39, Mahatma Gandhi Road<br>
                 Bengaluru - 560 001 India</h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img3" id="q">
            <h3><u>CIDETAL HOTEL</u></h3><br>
            <h4>No. 41, Seshadri Rd, Racecourse, Ananda Rao<br> Circle, Bengaluru, Karnataka 560009</h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img4" id="q">
            <h3><u>PRIDE HOTEL</u></h3><br>
            <h4># 93, Richmond Rd, Langford Gardens<br>, Bengaluru, Karnataka 560025</h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img5" id="q">
            <h3><u>SHERATON GRAND</u></h3><br>
            <h4>Prestige Shantiniketan, Whitefield Main Road<br> Hoodi, Bangalore - 560048</h4>
            <button v-on:click="book">BOOK</button>
        </div>
    </div>
    <div v-show="!hola" v-if="hexa">
        <div class="form-group">
            <label>HOTEL NAME:</label>
            <select name="" id="" v-model="hello">
               <option value="SHERATON GRAND">SHERATON GRAND</option>
               <option value="IBIS HOTEL">IBIS HOTEL</option>
               <option value="HOTEL OBEROI">HOTEL OBEROI</option>
               <option value="CIDETAL HOTEL">CIDETAL HOTEL</option>
               <option value="PRIDE HOTEL">PRIDE HOTEL</option>
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
    background-image: url("https://www.ahstatic.com/photos/6454_ho_00_p_1024x768.jpg");
    background-position: left;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 420px;
    
}
h4{
    margin-top: -53px;
}
.bang-img2{
    background-image: url("https://www.oberoihotels.com/-/media/oberoi-hotels/website-images/the-oberoi-bengaluru/overview/overview-banners/1920-x-819-new.jpg");
    background-position: left;
    background-size: 220px;
    background-repeat: no-repeat;
    height: 420px;
    margin-right: 20px;
}
.bang-img3{
    background-image: url("https://pix10.agoda.net/hotelImages/186634/-1/12b76f2822bf0d3e066d0fc7464a0998.jpg?s=1024x768");
    background-position: left;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 460px;
    
}
.bang-img4{
    background-image: url("https://res.cloudinary.com/simplotel/image/upload/x_0,y_216,w_4288,h_2411,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/pride-hotel-bengaluru/Hotel_Exterior_Bldg_qzx0kh");
    background-position: left;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 400px;
    
}
.bang-img5{
    background-image: url("https://content.jdmagicbox.com/comp/bangalore/j5/080pxx80.xx80.130418134329.z3j5/catalogue/sheraton-grand-bengaluru-whitefield-hotel-and-convention-center-hoodi-bangalore-5-star-hotels-18yxuavgm9.jpg");
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