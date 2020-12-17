<template>

<div class="w3-top">
  <div class="w3-row w3-padding w3-black">
    <div class="w3-col s2">
      <router-link to="/" class="w3-button w3-block w3-black">HOME</router-link>
    </div>
    <div class="w3-col s2">
      <router-link to="/about" class="w3-button w3-block w3-black">ABOUT</router-link>
    </div>
    <div class="w3-col s2">
      <router-link to="/menu" class="w3-button w3-block w3-black">MENU</router-link>
    </div>
    <div class="w3-col s2">
      <router-link :to="{name: 'Where'}" class="w3-button w3-block w3-black">WHERE</router-link>
    </div>
    <div class="w3-col s2">
      <router-link :to="{name: 'Shop'}" class="w3-button w3-block w3-black">SHOP</router-link>
    </div>
    
    <div class="w3-col s2">
                <a href="#" class="w3-right w3-button w3-bar-item" @click="animate()">({{cart.length}}) <i class="fa fa-shopping-cart"></i>  SHOPPING CART</a>
            </div>

            <!-- cart -->
            <transition name="slide" >
            <div class="w3-right w3-border" v-show="display">
                <table class="w3-table w3-white">
                    <tr>
                        <th>Product</th>
                        <th>Price
                            <a href="#" class="w3-right w3-button" @click="animate()"><i class="fa fa-close"></i></a>
                        </th>
                    </tr>
                    <tr v-for="item in cart" :key="item">
                        <td>{{item.name}}</td>
                        <td>{{item.price}} €</td>
                    </tr>
                    <tr>
                        <td>Discount Code</td>
                        <td><input v-model="discount_code" placeholder="You have a code ?" /></td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <th v-if="discount_code === 'myDiscount'">
                            <span style="color:grey; text-decoration: line-through">{{totalPrice}} €</span><span>(-5€) {{ totalPrice - 5 }} €</span>
                        </th>
                        <th v-else>{{totalPrice}} €</th>
                    </tr>
                </table>
            </div>
        </transition>
  </div>
</div>
<Header />
<div class="w3-sand w3-grayscale w3-large">
    <router-view @addEmit="addToCart($event)" />
</div>
<Footer />
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
   data(){
        return {
            title:"My Simple Shop",
            display: false,
            products: [
                {
                    name: "Moustache Mask",
                    price: 18,
                    image: "../assets/masque-moustache.jpg",
                    image2: "../assets/masque-moustache-2.jpg",
                    hovered: null,
                    stock: 1,
                    tags: {
                        Type:"Funny",
                        For: "Mens"
                    }
                },
                {
                    name: "Christmas Sweater",
                    price: 35,
                    image: "../assets/christmas-sweater.jpg",
                    image2: "../assets/christmas-sweater-2.jpg",
                    hovered: null,
                    stock: 10,
                    tags: {
                        Size:"S,M,L,XL",
                        Material: "Wool"
                    }
                },
                {
                    name: "Tetris Lamp",
                    price: 27,
                    image: "../assets/tetris-lamp.jpg",
                    image2: "../assets/tetris-lamp-2.jpg",
                    hovered: null,
                    stock: 12,
                    tags: {
                        Mood:"Retro",
                        For: "Geeks"
                    }
                }
            ], 
            cart: [],
            totalPrice: 0,
            discount_code:"",
            displayCart: false
        }
    },
  components: {
    Header,
    Footer
  },
  methods:{
        
        addToCart( product ){
            this.cart.push( product );
            this.totalPrice += product.price;
            this.displayCart = true;
            console.log('Total Price: ',this.totalPrice );
        },
        animate(){
            this.display = !this.display;
        }
    }
}

</script>

<style>
@import url("https://www.w3schools.com/w3css/4/w3.css");
@import url("https://fonts.googleapis.com/css?family=Lato");
@import url("https://fonts.googleapis.com/css?family=Inconsolata");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
body,h1,h2,h3,h4,h5,h6 {font-family: "Lato", sans-serif;}
body, html {
  height: 100%;
  font-family: "Inconsolata", sans-serif;
}

.bgimg {
  background-position: center;
  background-size: cover;
  background-image: url("https://w3schools.com/w3images/coffeehouse.jpg");
  min-height: 75%;
}

.menu {
  display: none;
}
</style>
