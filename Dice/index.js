function randomGen(){
    var r = Math.random()*6;
    r= r+1;
    r = Math.floor(r);
    return r;
}
var r1 = randomGen();
var r2 = randomGen();
var pic1 = "images/dice"+r1+".png";
var pic2 = "images/dice"+r2+".png";

if(r1>r2){
    document.querySelector("h1").innerHTML="Player1 Win";
}
else if(r2>r1){
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "DRAW";
}
document.getElementsByClassName("img1")[0].setAttribute("src",pic1)
document.getElementsByClassName("img2")[0].setAttribute("src",pic2)
