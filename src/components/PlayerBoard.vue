<template>
<div id="wrapper"><div class="column" v-for="(col,x) in grid">
    <div class="row" v-for="(row,y) in col" >
        <div v-if="row" @click="hello(x,y)">{{ row }}</div>
        <div style="height: 100%;width: 100%;" v-else @click="hello(x,y)"></div>
    </div>
</div></div>
</template>

<script>
export default{
    props:{
        grid : {
            type: Array,
            required : true
        },
        id:{
            type: Number,
            required:true
        }
    },
    methods:{
        hello(x,y){
            console.log("siema"+this.id+x+y)
        }
    }
}
</script>

<style>
#wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
}
.column{
    padding: 20px;
    background-color: darkred;
    border: solid;
    border-radius: 5px;
    margin: 5px;
    transition: 0.3s ease;
}
.row{
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 7px;
    width: 70px;
    height: 70px;
    color: black;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 350%;
    border: solid;
    border-radius: 15px;
    
    
}
.column:hover{
    box-shadow: 0px 0px 20px white;
    border: white solid;
}
.row:hover{
    box-shadow: 0px 0px 20px white;
    border: white solid;
}
</style>
