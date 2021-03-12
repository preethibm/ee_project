
import b from './components/contact.vue'
import c from './components/about.vue'
import d from './components/cities.vue'
import f from './components/bangalore.vue'
import g from './components/delhi.vue'
import h from './components/chennai.vue'
import i from './components/mumbai.vue'
import j from './components/kolkata.vue'

export default[
    
    {path : '/about' , component : c},
    {path : '/cities' , component : d},
    {path : '/contact' , component : b},
    {path : '/cities/bangalore', component: f},
    {path : '/cities/delhi', component: g},
    {path : '/cities/chennai', component: h},
    {path : '/cities/mumbai', component: i},
    {path : '/cities/kolkata', component: j}
]