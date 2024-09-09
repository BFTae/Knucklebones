<template>
<div id="layout">
<roll :enabled="enabled1" :id="id0" @roll="reciveRoll"/>
<br>
<player-board :grid="grid1" :id="id0" @put-die="onPutDie"/>
<br>
<column-points :columns="points1"/>
<hr>
<column-points :columns="points2"/>
<br>
<player-board :grid="grid2" :id="id1" @put-die="onPutDie"/>
<br>
<roll :enabled="enabled2" :id="id1" @roll="reciveRoll"/>
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
            id1:1,
            enabled1:true,
            enabled2:false
        }
    },
    methods:{
        onPutDie(pos){
            console.log("grid"+pos[0]+" col"+pos[1]+" row"+pos[2])
        },
        reciveRoll(data){
            console.log(data[1]+' for player '+data[0])
        }
    }
}
</script>

<style lang="scss"> //TODO SASS

#layout{
    display: block;
}
</style>
