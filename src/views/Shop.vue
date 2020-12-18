<template>
<div class="w3-container w3-center" style="margin-top:40px">
            <h1>{{ title }}</h1>
            <!-- products -->
            <div class="w3-row-padding">

                <!-- single product -->
                <div v-for="(product, index) in products" :key="index" class="w3-col l4 m6 w3-padding">
                    <img :src="product.hovered === null ? product.image : product.image2" @mouseover="product.hovered = index" @mouseout="product.hovered = null" width="100%" style="cursor: pointer" />
                    <div class="w3-container w3-center w3-border">
                        <h3>{{ product.name }}</h3>
                        <h4>{{ product.price }} €</h4>
                        <p v-if="product.stock==0">OUT OF STOCK</p>
                        <p v-else><strong>{{ product.stock }}</strong> items in stock</p>
                        <p>
                            <span v-for="(value, name) in product.tags" :key="name"><strong>{{ name }}:</strong>{{ value }} </span>
                        </p>
                        <p><button v-on:click="addToCart( product )">ADD TO CART</button></p>
                    </div>
                </div>
                
            </div>
        </div>
</template>

<script>

export default {
    name: 'Shop',
   
        data(){
        return {
            title:"My Simple Shop",
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
    
    methods:{
        addToCart( product ){
            this.$emit("addEmit", product)
        },
        animate(){
            this.display = !this.display;
        }
    },
    computed:{

    }
}
</script>

<style scoped>
    img{
        width:100%;
    }
</style>