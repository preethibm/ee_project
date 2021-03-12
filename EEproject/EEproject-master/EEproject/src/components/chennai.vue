<<template>
  <div>
    <div class="hotel-bang" v-show="hola">
        <div class="bang-img1" id="q">
            <h3><u>Trident Chennai</u></h3><br>
            <h4>1/24 G.S.T Road, 600027<br>Chennai, India</h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img2" id="q">
            <h3><u>Hotel Supreme Residency</u></h3><br>
            <h4> 25 Muthurangam Road, T - Nagar,<br> 600017 Chennai, India</h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img3" id="q">
            <h3><u>FabExpress B Zone</u></h3><br>
            <h4>New 21,old10, Krishna St, Lake Area Nungambakkam<br> Chennai Nungambakkam, 600034 Chennai, India</h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img4" id="q">
            <h3><u>S Hotels Chennai</u></h3><br>
            <h4>42 Thanikachalam Road T. Nagar<br> T - Nagar, 600017 Chennai, India</h4>
             <button v-on:click="book">BOOK</button>
        </div>
        <div class="bang-img5" id="q">
            <h3><u>Taj Connemara</u></h3><br>
            <h4> No 2 Binny Road<br> 600002 Chennai, India</h4>
            <button v-on:click="book">BOOK</button>
        </div>
    </div>
    <div v-show="!hola" v-if="hexa">
        <div class="form-group">
            <label>HOTEL NAME:</label>
            <select name="" id="" v-model="hello">
               <option value="Trident Chennai">Trident Chennai</option>
               <option value="Taj Connemara">Taj Connemara</option>
               <option value="S Hotels Chennai">S Hotels Chennai</option>
               <option value="Hotel Supreme Residency">Hotel Supreme Residency</option>
               <option value="FabExpress B Zone">FabExpress B Zone</option>
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
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/315/31551005.jpg");
    background-position: left;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 420px;
    
}
h4{
    margin-top: -53px;
}
.bang-img2{
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/273/273716272.jpg");
    background-position: left;
    background-size: 150px;
    background-repeat: no-repeat;
    height: 420px;
    margin-left: 20px;
}
.bang-img3{
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/249/249162851.jpg");
    background-position: left;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 460px;
    
}
.bang-img4{
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/248/248449219.jpg");
    background-position: left;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 400px;
    margin-right: 20px;
}
.bang-img5{
    background-image: url("https://cf.bstatic.com/images/hotel/max1024x768/161/161087679.jpg");
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