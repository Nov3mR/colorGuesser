let canvas = document.querySelector('#canvas');
let guess = document.querySelector('#guess');

let colors = ['#ff8392','#badc27','#be02aa','#abcdef','#112293','#123456'];

let start = 60;
let time = document.querySelector('#time');


let score = document.querySelector('#score');
let points = 0;

let final = document.querySelector('#final');
let point = document.querySelector('#points');


let btn = document.querySelector('.btn');


var toggle = {
  light : {
    bg:'white',
    fg:'black'
  },

  dark : {
    bg: 'black',
    fg: 'white'
  },
}

let light = document.querySelector('#light');
let dark = document.querySelector('#dark');
let background = document.querySelector('#background');



light.addEventListener('click',function(){
  background.style.backgroundColor = toggle.light.bg
  background.style.Color = toggle.light.fg

  
})


dark.addEventListener('click',function(){
  background.style.backgroundColor = toggle.dark.bg
  background.style.Color = toggle.dark.fg

  
})


function makeBubbles(){
  for (var i = 0 ; i < 59 ; i++){
    let randomNumber = Math.floor(Math.random() * colors.length);
    canvas.innerHTML += `<div class = "bubble" style = "background-color:${colors[randomNumber]}";> </div>`
  }
    
}

makeBubbles();

function guessColor(){
  let randomColorIndex = Math.floor(Math.random() * colors.length);
  guess.style.backgroundColor = colors[randomColorIndex];
}

guessColor();

function timer(){
  if (start>0){
    start--;
    time.innerHTML = start
    
  }

  else {
    canvas.style.display = 'none';
    final.style.display = 'block';
    point.innerHTML = points;

    canvas.style.backgroundColor = "fefefe";
    
  }
  
}

setInterval(timer,1000);


canvas.addEventListener('click', function(e) {

  let num = e.target.style.backgroundColor;
  console.log(num)

  if (num == guess.style.backgroundColor){
    points = points + 1;

    score.innerHTML = points;
    canvas.innerHTML = "";
    makeBubbles();
    guessColor();

    
  }
  
});


btn.addEventListener('click', function(){
  location.reload();
});