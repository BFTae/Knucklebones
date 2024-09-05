<template>
<button @click="roll()">ROLL</button>
</template>

<script>
export default{
    methods:{
        roll(){
            
        }
    }
}
</script>

<style>
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