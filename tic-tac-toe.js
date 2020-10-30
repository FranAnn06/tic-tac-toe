class TicTacToe {
    constructor() {
        this.Player = 'x';
        this.arr=[[0,0,0],[0,0,0],[0,0,0]];
        this.win = "null";
    }
    getCurrentPlayerSymbol() {
      console.log("Ход: "+ this.Player);
    }
    nextTurn(rowIndex, columnIndex) {
      if (this.arr[rowIndex][columnIndex] =="0") {
        this.arr[rowIndex][columnIndex] = this.Player;
        if (this.arr[0][0]!="0" && this.arr[0][0] == this.arr[0][1] && this.arr[0][0] == this.arr[0][2] ){
            this.win = this.Player;
            console.log(this.win);
            // this.arr[0][0].style.color='red';
        }
        else if (this.arr[0][0]!="0" && this.arr[0][0] == this.arr[1][0] && this.arr[0][0] == this.arr[2][0] ){
            this.win = this.Player;
            console.log(this.winner);}
       else if (this.arr[0][0]!="0" && this.arr[0][0] == this.arr[1][1] && this.arr[0][0] == this.arr[2][2] ){
            this.win = this.Player;
            console.log(this.win);}

       else if (this.arr[2][2]!="0" && this.arr[2][2] == this.arr[1][2] && this.arr[2][2] == this.arr[0][2] ){
            this.win = this.Player;
            console.log(this.win);}
       else if (this.arr[2][2]!="0" && this.arr[2][2] == this.arr[2][1] && this.arr[2][2] == this.arr[2][0] ){
            this.win = this.Player;
            console.log(this.win);}
       else if (this.arr[2][2]!="0" && this.arr[2][2] == this.arr[1][1] && this.arr[2][2] == this.arr[0][0] ){
            this.win = this.Player;
            console.log(this.win);}

       else if (this.arr[1][0]!="0" && this.arr[1][0] == this.arr[1][1] && this.arr[1][0] == this.arr[1][2] ){
            this.win = this.Player;
            console.log(this.win);}
       else if (this.arr[0][1]!="0" && this.arr[0][1] == this.arr[1][1] && this.arr[0][1] == this.arr[2][1] ){
            this.win = this.Player;
            console.log(this.win);}
            else{console.log(this.win);}

        if (this.Player =='o' ) {
          this.Player = 'x';
        } else {
          this.Player = 'o';
        }
        this.turns++;
      } 
    }

    isFinished() {
        if (this.arr[0][0]!="0" && this.arr[0][1]!="0" && this.arr[0][2]!="0" && this.arr[1][0]!="0" && this.arr[1][1]!="0" && this.arr[1][2]!="0" && this.arr[2][0]!="0" && this.arr[2][1]!="0" && this.arr[2][2]!="0" && this.win){
            return true;
        }
    }

    getWinner() {
      if (this.win == "null") {
        return null;
      } else {
        return this.win;
      }
    }

    noMoreTurns() {
        if (this.arr[0][0]!="0" && this.arr[0][1]!="0" && this.arr[0][2]!="0" && this.arr[1][0]!="0" && this.arr[1][1]!="0" && this.arr[1][2]!="0" && this.arr[2][0]!="0" && this.arr[2][1]!="0" && this.arr[2][2]!="0"){
            return true;
        }
    }

    isDraw() {
        if (this.arr[0][0]!="0" && this.arr[0][1]!="0" && this.arr[0][2]!="0" && this.arr[1][0]!="0" && this.arr[1][1]!="0" && this.arr[1][2]!="0" && this.arr[2][0]!="0" && this.arr[2][1]!="0" && this.arr[2][2]!="0" && this.win=="null"){
            return true;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        
        if (this.arr[rowIndex][colIndex] == "0") {
            return null;
          } else {
            return this.arr[rowIndex][colIndex];
          }
        }
    }
module.exports = TicTacToe;