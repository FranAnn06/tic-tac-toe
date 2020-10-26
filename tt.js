var turn=document.getElementById("turn");
function SelectWin(box1,box2,box3){
    box1.style.background='red'; 
    box2.style.background='red';  
    box3.style.background='red';
    turn.innerHTML=box1 + " Won ";  
    isFinished();
}


function getWinner() {
var column1=document.getElementById("column1");
var column2=document.getElementById("column2");
var column3=document.getElementById("column3");
var column4=document.getElementById("column4");
var column5=document.getElementById("column5");
var column6=document.getElementById("column6");
var column7=document.getElementById("column7");
var column8=document.getElementById("column8");
var column9=document.getElementById("column9");

if(column1.innerHTML !== "" && column1.innerHTML === column2.innerHTML && column1.innerHTML ===column3.innerHTML){
    SelectWin(column1.innerHTML,column2.innerHTML,column3.innerHTML);
    console.log(column1.innerHTML);
}
else if(column1.innerHTML !== "" && column1.innerHTML === column4.innerHTML && column1.innerHTML ===column7.innerHTML){
    SelectWin(column1.innerHTML,column4.innerHTML,column7.innerHTML);
    console.log(column1.innerHTML);
}
else if(column1.innerHTML !== "" && column1.innerHTML === column4.innerHTML && column1.innerHTML ===column7.innerHTML){
    SelectWin(column1.innerHTML,column4.innerHTML,column7.innerHTML);
    console.log(column1.innerHTML);
}
else if(column7.innerHTML !== "" && column7.innerHTML === column8.innerHTML && column7.innerHTML ===column9.innerHTML){
    SelectWin(column7.innerHTML,column8.innerHTML,column9.innerHTML);
    console.log(column7.innerHTML);
}
else if(column3.innerHTML !== "" && column3.innerHTML === column6.innerHTML && column3.innerHTML ===column9.innerHTML){
    SelectWin(column3.innerHTML,column6.innerHTML,column9.innerHTML);
    console.log(column3.innerHTML);
}
else if(column2.innerHTML !== "" && column2.innerHTML === column5.innerHTML && column2.innerHTML ===column8.innerHTML){
    SelectWin(column2.innerHTML,column5.innerHTML,column8.innerHTML);
    console.log(column2.innerHTML);
}
else if(column4.innerHTML !== "" && column4.innerHTML === column5.innerHTML && column4.innerHTML ===column6.innerHTML){
    SelectWin(column4.innerHTML,column5.innerHTML,column6.innerHTML);
    console.log(column4.innerHTML);
}
else if(column1.innerHTML !== "" && column1.innerHTML === column5.innerHTML && column1.innerHTML ===column9.innerHTML){
    SelectWin(column1.innerHTML,column5.innerHTML,column9.innerHTML);
    console.log(column1.innerHTML);
}
else if(column3.innerHTML !== "" && column3.innerHTML === column5.innerHTML && column3.innerHTML ===column7.innerHTML){
    SelectWin(column3.innerHTML,column5.innerHTML,column3.innerHTML);
    console.log(column3.innerHTML);
}
else{console.log(null);}

}

var box=document.querySelectorAll('#gameCanvas div'),x_or_0=0;
for(var i=0;i<box.length;i++){
    box[i].onclick=function(){
        if(this.innerHTML!=="x" && this.innerHTML!=="0"){
        if(x_or_0%2===0){
            this.innerHTML="x";
            turn.innerHTML="0 turn now";
            getWinner();
            noMoreTurns();
            x_or_0+=1;
        }
        else{
            this.innerHTML="0";
            turn.innerHTML="x turn now";
            getWinner();
            noMoreTurns();
            x_or_0+=1;
        }
    }
}
}
function replay(){
    for(var i=0;i<box.length;i++){
        // box[i].style.background="";
    box[i].innerHTML="";
    turn.innerHTML="play";

    }
}

function noMoreTurns(){
var colum1=document.getElementById("column1");
var colum2=document.getElementById("column2");
var colum3=document.getElementById("column3");
var colum4=document.getElementById("column4");
var colum5=document.getElementById("column5");
var colum6=document.getElementById("column6");
var colum7=document.getElementById("column7");
var colum8=document.getElementById("column8");
var colum9=document.getElementById("column9");
    if(colum1.innerHTML !=="" && colum2.innerHTML !=="" && colum3.innerHTML !=="" && colum4.innerHTML !=="" && colum5.innerHTML !=="" && colum6.innerHTML !=="" && colum7.innerHTML !=="" && colum8.innerHTML !=="" && colum9.innerHTML !==""){
        console.log("noMoreTurns true");
        replay();
    }
}
function isFinished(){
        console.log("isFinished true");
}
function stop(){

}
