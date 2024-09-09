<template>
<button @click="roll()" v-show="enabled">ROLL</button>
<div id="rolled"><span v-if="rolled">{{rolled}}</span></div>
</template>

<script>
export default{
    emits:['roll'],
    props:{
        enabled:{
            type:Boolean,
            default:true
        },
        id:{
            type:Number,
            Required:true
        }
    },
    data(){
        return{
            rolled:0,
        }
    },
    methods:{
        roll(){
            this.rolled=Math.floor(Math.random()*6+1)
            this.$emit('roll',[this.id,this.rolled])
        }
    }
    }
</script>

<style lang="scss"> //TODO SASS
#rolled{
    width: 33%;
    height: 100px;
    float: right;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 500%;
    border: 1px solid black;
    background-color: darkred;
}
button{
    width: 64%;
    height: 100px;
    margin-left: 7px;
    margin-bottom: 10px;
    font-size: 400%;
    background-color: rgb(252, 82, 82);
    transition: 0.3s;
    border: 0px white;
    border-radius: 15px;
}
button:hover{
    border: solid white 1px;
    box-shadow: 0px 0px 20px white;
}
</style>