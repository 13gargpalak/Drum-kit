
var number = document.querySelectorAll(".drum").length;

for(var i=0; i<number ; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
 
        var buttonhtml =  this.innerHTML;
        makesound(buttonhtml);
        buttonanimation(buttonhtml);
        this.style.color = "white";
        
        
    
    });

}

document.addEventListener("keypress", function(event){
    makesound(event.key);
    buttonanimation(event.key);
})
 

function makesound(key){

    switch (key) {
        case "w":
            var audio = new Audio("sounds/sound1.mp3");
            audio.play();
            break;
        
        case "a":
            var audio = new Audio("sounds/sound2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/sound3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/sound4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/sound5.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/sound6.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/sound7.mp3");
            audio.play();
            break;
    
        default:
            break;
    }

}


function buttonanimation(currentkey){

   var butn =  document.querySelector("." + currentkey);
   butn.classList.add("pressed");

   setTimeout(function(){
    butn.classList.remove("pressed");
   }, 100)

}