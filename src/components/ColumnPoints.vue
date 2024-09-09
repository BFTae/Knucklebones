<template>
<div id="wrapper">
    <div class="points" v-for="colpoints in columns">
        <span v-if="colpoints" >{{ colpoints }}</span>
    </div>
</div>
</template>

<script>
export default{
    props:{
        columns:{
            type: Array,
            required : true
        }
    }
}
</script>

<style lang="scss"> //TODO SASS
#wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
}
.points{
    background-color: rgb(211, 32, 32);
    text-align: center;
    font-size: 400%;
    padding: 5px;
    width: 80px;
    height: 80px;
    margin: auto;
    border: solid 4px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
</style>
