<template>
<div id="wrapper"><div class="column" v-for="(col,x) in grid">
    <div class="row" v-for="(row,y) in col" >
        <div v-if="row" @click="dieHere(x,y)">{{ row }}</div>
        <div v-else @click="dieHere(x,y)">&nbsp;</div>
    </div>
</div></div>
</template>

<script>
export default{
    emits:['put-die'],
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
        dieHere(x,y){
            this.$emit('put-die',[this.id,x,y])
        }
    }
}
</script>

<style lang="scss"> //TODO SASS
#wrapper{
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    gap: 5px;
}
.column{
    padding: 5%;
    background-color: darkred;
    border: solid;
    border-radius: 5px;
    transition: 0.3s ease;
}
.row{
    text-align: center;
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
