<template>
<div class="bgimg">
    <h1 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">The Cafe</span></h1>
    <div class="w3-display-right w3-padding-48" name="fade"> <img class="imgheader" v-show="count % 2" :src="slides[index].src"> </div>
    <h2 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">Open from 6am to 5pm</span></h2>
    <h2 class="w3-center w3-padding-48"><span class="w3-tag w3-wide">15 Adr street, 5015</span></h2>
</div>

</template>

<script>
export default {
    name: 'Header',

    data(){
        return{
title:"Caroussel",
        index:0,
        count:0,
        slides:[
            {
                src:"./assets/chat-roux-british-1560x1040.jpg"
            },
            {
                src:"./assets/ecureuil-noisette-1560x1040.jpg"
            },
            {
                src:"./assets/perroquet-1560x1040.jpg"
            },
            {
                src:"./assets/phoque-neige-banquise-1560x1040.jpg"
            },
            {
                src:"./assets/tortue-de-mer-2-1560x881.jpg"
            }
            
        ]
        }
    },
    methods:{

    },
    computed:{

    },
    mounted(){
        setInterval( ()=>{this.count++},1000 );
        setInterval( ()=>{
            if (this.index<this.slides.length - 1){
                this.index++
            } else {
                this.index = 0;
            }
        
        },1000 );
    }
}

</script>
<style scoped>
        .imgheader{
            width:300px;
        }
        .fade-enter-active{
            animation: fade-in .5s;
        }
        
        @keyframes fade-in{
            0%{
                opacity:0;
            }
            100%{
                opacity:1;
            }
        }
</style>