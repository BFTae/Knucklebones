<template>
<div id="background">
<br>
<player-board :grid="grid1" :id="id0"/>
<br>
<column-points :columns="points1"/>
<hr>
<column-points :columns="points2"/>
<br>
<player-board :grid="grid2" :id="id1"/>
<br>
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
    }
}
</script>

<style>
#background{
    display: block;
}
</style>
