<template>
<div id="layout">
<div id="p0">
    <roll :enabled="enabled0" :id=0 @roll="reciveRoll"/>

    <player-board :destroy="destroy" :enabled="enabled0" :die="die" :id=0 @clear-die="clearDie" />

    <column-points :columns="points0"/>
</div>

<div id="p1">
    <column-points :columns="points1"/>

    <player-board :destroy="destroy" :enabled="!enabled0" :die=die :id=1 @clear-die="clearDie" />

    <roll :enabled="!enabled0" :id=1 @roll="reciveRoll"/>
</div>
</div>
</template>

<script>
export default{
    data(){
        return{
            points0 : [1,0,0],
            points1 : [0,0,1],
            enabled0:true, //if the player on top is active
            die:[-1,0], // index 0: player id
            destroy:[0,0] // index 0: column num
        }
    },
    methods:{
        reciveRoll(data){
            console.log(data[1]+' for player '+data[0])
            this.die=[data[0],data[1]]
            
        },
        clearDie(x){
            console.log(x)
            this.destroy=[x,this.die[1]]
            this.die=[-1,0]
            this.enabled0=!this.enabled0
        }
    }
}
</script>

<style lang="scss"> //TODO SASS
#layout{
    width: 320px;
    height: 100%;
    display: grid;
    align-content: space-between;
}
#p1{
    margin-bottom: 10px;
}
#p0{
    margin-top: 10px;
}
</style>
