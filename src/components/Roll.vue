<template>
<button @click="roll()">ROLL</button>
<div id="rolled"><span v-if="rolled">{{rolled}}</span>
<span v-else>&nbsp;</span></div>
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
            if (this.enabled){
                this.rolled=Math.floor(Math.random()*6+1)
                this.$emit('roll',[this.id,this.rolled])
            }
            
        }
    }
    }
</script>

<style lang="scss"> //TODO SASS
#rolled{
    width: 30%;
    float: right;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 270%;
    border: 1px solid black;
    background-color: darkred;
}
button{
    width: 60%;
    font-size: 300%;
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