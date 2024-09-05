<template>
<div id="background">
<roll/>
<br>
<player-board :grid="grid1" :id="id0" @put-die="reciveEmit"/>
<br>
<column-points :columns="points1"/>
<hr>
<column-points :columns="points2"/>
<br>
<player-board :grid="grid2" :id="id1" @put-die="reciveEmit"/>
<br>
<roll/>
</div>
</template>

<script>
export default{
    data(){
        return{
            grid1 : [[1,0,0],[0,1,0],[0,0,1]],
            grid2 : [[0,1,0],[1,0,0],[0,1,0]],
            points1 : [1,0,0],
            points2 : [0,0,1],
            id0:0,
            id1:1
        }
    },
    methods:{
        reciveEmit(pos){
            console.log("grid"+pos[0]+" col"+pos[1]+" row"+pos[2])
        }
    }
}
</script>

<style>
#background{
    display: block;
}
</style>
