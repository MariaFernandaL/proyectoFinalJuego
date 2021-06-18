document.getElementById('player').addEventListener("mouseover",sumarPuntos);

var puntos=0;
var tiempo=30;
var puntosObjetivo=30;

function sumarPuntos(){
 puntos++;
 document.getElementById("score").innerHTML= "PUNTOS: <b>"+puntos+ "/"+puntosObjetivo+"</b>";
 let ranNum= Math.round(Math.random()*400);
 let ranNum2= Math.round(Math.random()*400);
 document.getElementById("player").style.marginTop=ranNum+"px";
 document.getElementById("player").style.marginLeft=ranNum2+"px";
 
 if(puntos==30){
     alert("Ganaste, y pasarás al siguiente nivel");
     alert("Este es el segundo nivel, el cual será con una cantidad menor de tiempo");
     tiempo=25;
    puntos=0;
    //document.getElementById("player").classList.add('player2');
}
}
function restarTiempo(){
    tiempo--;
    document.getElementById("time").innerHTML=" TIEMPO: <b>"+tiempo+ "</b>";
    if((tiempo==0) && (puntos<30)){
        document.getElementById("mensaje").innerHTML="GAME OVER";        
        tiempo=30;
        puntos=0;
}
}
setInterval(restarTiempo,1000);