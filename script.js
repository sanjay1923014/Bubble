var timer = 60;
var score=0;
var hitrn=0;

function score1(){
score += 10;
document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
  hitrn = Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent=hitrn;
}

function bubble(){

  var clutter = "";

  for(let i =0;i<=70;i++){
  var rn = Math.floor(Math.random()*100)
  
  clutter +=  `<div class="bubble">${rn}</div>`
  
  }
  
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer(){
  var time = setInterval(()=>{
if(timer>0){
  timer--;
  document.querySelector("#timer").textContent = timer;
}else{
  clearInterval(time);
  document.querySelector("#pbtm").innerHTML=`<h1>Game Over<h1/>`;
}
  },1000)
}

document.querySelector("#pbtm").addEventListener("click",function(data){
var clickednum= Number(data.target.textContent)
if(clickednum===hitrn){
  score1();
  bubble();
  getNewHit();
}
})

runtimer();
bubble();
getNewHit();
score1(); 