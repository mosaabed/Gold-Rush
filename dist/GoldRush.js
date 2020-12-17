// const matrix = require('./Matrix.js');
// const maps = require('./maps.json');
class GoldRush{
    constructor(){
        this.winner = null
        this.map =[] // maps
        this.board = new Matrix() // matrix()
    }

    async synchrozatinFunc(){
        let mapsdata = []//maps.mapsList[1]
        let num
        while(mapsdata.length == 0){
            num = Math.floor(Math.random() * 10);
            mapsdata = await $.get(`/getmap/${num}`)//maps.mapsList[1]
        }
        return mapsdata
    }

    async newGame(){
        let mapCord
        let mapvalidChecker = true
        let mapsdata
        while(mapvalidChecker){
            // should to choose map
            mapCord = {
                player1: null,
                player2: null,
                coinsCord:[],
                walsCord: []
            }
            mapvalidChecker = false
            
            mapsdata = await this.synchrozatinFunc()//maps.mapsList[1]
            this.map = mapsdata[mapsdata.length-1].map
            this.board.intilaizeMat(this.map.mapSize[0] ,this.map.mapSize[1])
            let mat = this.map.mapShape
            for(let i = 0 ; i < this.map.mapSize[0] ; i++){
                for(let j = 0 ; j < this.map.mapSize[1] ; j++){
                    if (mat[i][j] == 1){
                        if(mapCord.player1 != null){
                            mapvalidChecker = true
                        }else{
                            mapCord.player1 = [i ,j]
                        }
                    }
                    if (mat[i][j] == 2){
                        if(mapCord.player2 != null){
                            mapvalidChecker = true
                        }else{
                            mapCord.player2 = [i ,j]
                        }
                    }
                    if (mat[i][j] == 3){
                        mapCord.coinsCord.push([i,j])
                    }
                    if (mat[i][j] == 4){
                        mapCord.walsCord.push([i,j])
                    }
                }
            }
            if (this.board.addCords(mapCord) == -1){
                mapvalidChecker = true
            }
        }
    }


    print(){
        this.board.print()
    }
    
    movePlayer(playerNum , oriantion){
        return this.board.movePlayer(playerNum , oriantion)
    }
    siGameOver(){
        if(this.board.maxScore == this.board.currentScore){
            return true
        }
        return false
    }
    gitWinner(){
        if( this.board.playersScore[1] > this.board.playersScore[2]){
            return 1
        }
        if( this.board.playersScore[1] < this.board.playersScore[2]){
            return 2
        }
        return 0
    }
    gitMatrix(){
        return this.board.mat
    }
}

