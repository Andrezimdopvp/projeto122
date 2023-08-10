x = 0;
y = 0;


screenWidth = 0;
screenHeight = 0;
var apple = "";
var speakData = "";
var toNumber = "";
drawApple = "";

function preload()
{
  apple = loadImage("apple.png");
}
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
  toNumber = Number(content);
  if(Number.isInteger(toNumber)){
    document.getElementById("status").innerHTML = "A maçã começou a ser desenhada: ";
    drawApple = "set"
  } else{
    document.getElementById("status").innerHTML = "O número não foi reconhecido ";
  }
   

}

function setup() {
 screenWidth = window.innerWidth;
 screenHeight = window.innerHeight;

 var canvas = createCanvas(screenWidth, screenHeight-150)
 canvas.position(0,150) 
}

function draw() {
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
    for(var i = 1; i <= to_number; i++)
    {
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + " maçãs desenhadas";
    speakData = toNumber + "maçãs desenhadas";
    speak();
    drawApple = '';
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
