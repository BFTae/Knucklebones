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
    emits:['clear-die'],
    props:{
        id:{
            type: Number,
            required:true
        },
        die:{
            type:Array,
            default:[-1,0]
        },
        enabled:{
            type:Boolean,
            default:false
        },
        destroy:{
            type:Array,
            default:[-1,-1]
        }
    },
    data(){
        return{
            grid:[[0,0,0],[0,0,0],[0,0,0]],
        }
    },
    watch:{
        destroy(destroy_data,old){
            if (this.enabled){
                console.log(this.id, destroy_data,old)
                for (let index = 0; index < 3; index++) {
                    if (this.grid[destroy_data[0]][index]==destroy_data[1]){
                        this.grid[destroy_data[0]][index]=0
                    }
                     
                }
            }
        }
        
    },
    methods:{
        dieHere(x,y){
            if (this.die[0]==this.id){
                if (this.grid[x][y]!=0) console.log("A die is already here")
                else{
                    this.grid[x][y]=this.die[1]
                    console.log(x)
                    this.$emit('clear-die',x)
                }
            }
            
        },

    }
}
</script>

<style lang="scss"> //TODO SASS
#wrapper{
    display: grid;
    gap: 5px;
}
.column{
    padding: 5px;
    background-color: darkred;
    border: solid;
    border-radius: 5px;
    transition: 0.3s ease;

}
.row{
    text-align: center;
    color: black;
    font-family: monospace;
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
