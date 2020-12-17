const STREET = 0;
const PLAYER1 = 1;
const PLAYER2 = 2;
const COINS = 3;
const WALLS = 4;


class Matrix{
    constructor(){
        this.maxScore = 0
        this.currentScore = 0
        this.rows = 0
        this.mat =[]
        this.cols =0
        this.plsCord = ['synchrozationData']
        this.playersScore = ['synchrozationData' , 0 ,0]
    }
    
    intilaizeMat(rows , cols){
        this.maxScore = 0
        this.currentScore = 0
        this.plsCord = ['synchrozationData']
        this.playersScore = ['synchrozationData' , 0 ,0]
        this.cols = cols
        this.rows = rows
        this.mat = []
        let tempLst
        for(let i=0 ; i < rows ; i++){
            tempLst =[]
            for( let j = 0 ; j<cols ; j++){
                tempLst.push(0)
            }
            this.mat.push(tempLst)
        }   
    }
    print(){
        let str
        for(let i=0 ; i < this.rows ; i++){
            str = ''
            for( let j = 0 ; j<this.cols ; j++){
                str += this.mat[i][j] + '     '
            }
            console.log(str)
        }   
    }

    _checkCordvalid(cord){
        if (cord[0]<0 || cord[1]<0 || cord[0]>=this.rows || cord[1]>=this.cols){
            return false
        }
        return true
    }

    addCords(gameMap){

        if( !this._checkCordvalid(gameMap.player1) || !this._checkCordvalid(gameMap.player2) ){
            console.log('error , player index out of range')
            return -1
        }
        this.plsCord.push(gameMap.player1)
        this.plsCord.push(gameMap.player2)
        this.mat[gameMap.player1[0]][gameMap.player1[1]] = 1
        this.mat[gameMap.player2[0]][gameMap.player2[1]] = 2
        let lst1 = gameMap.coinsCord
        let check
        this.maxScore = lst1.length
        for (let i =0 ; i< lst1.length ;i++ ){
            check = this.mat[lst1[i][0]][lst1[i][1]]
            if(check == 1 || check == 2){
                console.log('error you try to remove player')
                return -1;
            }
            if (this._checkCordvalid(lst1[i])){
                this.mat[lst1[i][0]][lst1[i][1]] = 3
            }
            else{
                consol.log('Warning ,index out of range!!')
            }
        }
        let lst2 = gameMap.walsCord
        for (let i =0 ; i< lst2.length ;i++ ){
            check = this.mat[lst2[i][0]][lst2[i][1]]
            if(check == 1 || check == 2){
                console.log('error you try to remove player')
                return -1;
            }
            if(check == 3){
                console.log('Warning , conflict with cords!')
            }
            if (this._checkCordvalid(lst1[i])){
                this.mat[lst2[i][0]][lst2[i][1]] = 4
            }
            else{
                consol.log('Warning ,index out of range!!')
            }
            
        }
        return 1
    }

    movePlayer( num , oriantion){
        let x =0;
        let y =0;
        if (oriantion == 'u'){
            x = -1;
            y = 0;
        }
        if (oriantion =='d'){
            x = 1;
            y = 0;
        }
        if (oriantion == 'r'){
            x = 0;
            y = 1;
        }
        if (oriantion == 'l'){
            x = 0;
            y = -1;
        }
        if (this._checkCordvalid([this.plsCord[num][0]+x , this.plsCord[num][1]+y])){
            let tybe = this.mat[this.plsCord[num][0]+x][this.plsCord[num][1]+y]
            if (tybe == 4 || tybe == 2 || tybe == 1 ){
                return -1
            }
            if( tybe == 3){
                this.currentScore++
                this.playersScore[num] += 10
            }
            this.mat[this.plsCord[num][0]+x][this.plsCord[num][1]+y] = num
            this.mat[this.plsCord[num][0]][this.plsCord[num][1]] = 0
            this.plsCord[num] = [this.plsCord[num][0]+x , this.plsCord[num][1]+y];
            return 1
        }
        return -1

    }




}


dummyData={
    player1: [0,0],
    player2: [4,4],
    coinsCord:[[1,1],[1,2] ,[3,4] , [3,3] ,[4,0] ],
    walsCord: [[2,2] ,[2,3],[4,3],[2,2] , [3,2]]
}

// mat = new Matrix()
// mat.intilaizeMat(5 ,5)
// console.log(mat.addCords(dummyData))
// mat.print()
// mat.movePlayer(1,'r')
// console.log()
// mat.print()



// module.exports = Matrix