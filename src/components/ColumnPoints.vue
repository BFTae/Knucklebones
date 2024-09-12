<template>
<div id="wrapper">
    <div class="points" v-for="colpoints in columns">
        <span v-if="colpoints" >{{ colpoints }}</span>
        <span v-else>&nbsp;</span>
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
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto;
    gap: 5%;
}
.points{
    text-align: center;
    font-size: 200%;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
</style>
