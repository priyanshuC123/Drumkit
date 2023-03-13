//
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
//
//     document.querySelectorAll(".drum")[i].addEventListener("click",pressDetect);
// }
//
// document.addEventListener("keydown", function(e){
//   pressDetect(e);
// });
//
// function pressDetect(e){
//   var button = this.textContent;
//   var pressKey = e.key;
//
//   switch (pressKey || button) {
//
//     case "w":
//     case "W":
//
//       var crash = new Audio("sounds/crash.mp3");
//       crash.play();
//       break;
//
//     case "a":
//       case "A":
//
//       var kick = new Audio("sounds/kick-bass.mp3");
//       kick.play();
//       break;
//
//     case "s":
//     case "S":
//
//       var snare = new Audio("sounds/snare.mp3");
//       snare.play();
//       break;
//
//     case "d":
//     case "D":
//     var tom1 = new Audio("sounds/tom-1.mp3");
//     tom1.play();
//
//       break;
//
//     case "j":
//     case "J":
//     var tom2 = new Audio("sounds/tom-2.mp3");
//     tom2.play();
//
//       break;
//
//     case "k":
//     case "K":
//     var tom3 = new Audio("sounds/tom-3.mp3");
//     tom3.play();
//       break;
//
//     case "l":
//     case "L":
//     var tom4 = new Audio("sounds/tom-4.mp3");
//     tom4.play();
//       break;
//
//
//     default: console.log(pressKey);
//    }
// };
//
//

//  for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//
//   document.querySelectorAll(".drum")[i].addEventListener("click",pressDetect);
// }
//
//   document.addEventListener("keydown", function(e){
//
//       pressDetect(e);
//
//   });
// function pressDetect(e){
//
//   var button = this.textContent;
//   var pressKey = e.key;
//
//     switch (pressKey || button) {
//
        // case "w":
        //    case "W":
        // var crash = new Audio("sounds/crash.mp3");
        //   crash.play();
        // break;
        //
        // case "a":
        //    case "A":
        // var kick = new Audio("sounds/kick-bass.mp3");
        //  kick.play();
        // break;
        //
        // case "s":
        //    case "S";
        // var snare = new Audio("sounds/snare.mp3");
        //   snare.play();
        // break;
        //
        // case "d":
        //    case "D";
        // var tom1 = new Audio("sounds/tom-1.mp3");
        //   tom1.play();
        // break;
        //
        // case "j":
        //    case "J";
        // var tom2=new Audio("sounds/tom-2.mp3");
        // tom2.play();
        // break;
        //
        // case "k":
        //    case "K";
        // var tom3=new Audio("sounds/tom-3.mp3");
        // tom3.play();
        // break;
        //
        // case "l":
        //    case "L";
        // var tom4=new Audio("sounds/tom-4.mp3");
        // tom4.play();
        // break;

//       default:console.log(pressKey);
//
//     }
// };
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", hehesound);
    function hehesound() {
        var letter = this.innerHTML;
        makeSound(letter);
        changeStyle(letter);

    }
}

document.addEventListener("keydown",fun);
     function fun(event)
    {
    makeSound(event.key) ;
    changeStyle(event.key);
    //here event is the name we given to the object which keydown returns when any key is pressed
    // and .key returns the key we pressed like attribute name
    }

 function makeSound(letter){
    switch(letter){
      case "w":
      
      var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;

      case "a":

      var kick = new Audio("sounds/kick-bass.mp3");
       kick.play();
      break;

      case "s":

      var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;

      case "d":

      var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;

      case "j":

      var tom2=new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

      case "k":

      var tom3=new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

      case "l":

      var tom4=new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;


    }
 }
 function changeStyle(keyvalue)
 {
    var pressedEle = document.querySelector("."+keyvalue);
    pressedEle.classList.add("pressed");
    setTimeout(removeClass,100,pressedEle);//100 milli seconds = 0.1 sec
    // and pressedEle in settimeout is like sending argument to removeClass
 }

 function removeClass(pressedEle){
     pressedEle.classList.remove("pressed");
 }
