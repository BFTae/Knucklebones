<template>
<div id="layout">
<roll :enabled="enabled0" :id="id0" @roll="reciveRoll"/>
<br>
<player-board :grid="grid0" :id="id0" @put-die="onPutDie"/>
<br>
<column-points :columns="points0"/>
<hr>
<column-points :columns="points1"/>
<br>
<player-board :grid="grid1" :id="id1" @put-die="onPutDie"/>
<br>
<roll :enabled="enabled1" :id="id1" @roll="reciveRoll"/>
</div>
</template>

<script>
export default{
    data(){
        return{
            grid0 : [[1,0,0],[0,1,0],[0,0,1]],
            grid1 : [[0,1,0],[1,0,0],[0,1,0]],
            points0 : [1,0,0],
            points1 : [0,0,1],
            id0:0,
            id1:1,
            enabled0:true,
            enabled1:false,
            die:[-1,0]
        }
    },
    methods:{
        onPutDie(pos){
            console.log("grid"+pos[0]+" col"+pos[1]+" row"+pos[2])
            console.log(this.die)
            if (pos[0]==0 && this.die[0]==0){
                if (this.grid0[pos[1]][pos[2]]!=0) console.log("A die is already here")
                else{
                    this.grid0[pos[1]][pos[2]]=this.die[1]
                    this.die=[-1,0]
                }
            }
            else if(pos[0]==1 && this.die[0]==1){
                if (this.grid1[pos[1]][pos[2]]!=0) console.log("A die is already here")
                else{
                    this.grid1[pos[1]][pos[2]]=this.die[1]
                    this.die=[-1,0]
                }
            }
            
        },
        reciveRoll(data){
            console.log(data[1]+' for player '+data[0])
            this.die=[data[0],data[1]]


            if (data[0]==0) {
                this.enabled0=false
                this.enabled1=true
            }
            else {
                this.enabled1=false
                this.enabled0=true
            }
        }
    }
}
</script>

<style lang="scss"> //TODO SASS

#layout{
    display: block;
}
</style>
