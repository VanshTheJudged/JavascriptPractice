var numberOfDrums =document.querySelectorAll(".drum").length; 
for(var i = 0;i<numberOfDrums;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
    document.addEventListener("keydown",function(event){
        var keyboard = event.key;
        makeSound(keyboard);
        buttonAnimation(keyboard);
    });
    function makeSound(key){
        switch(key){
            case "w":
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
                break;

            case "d":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;

            case "j":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;

            case "k":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;

            case "l":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
        }
    };
    function buttonAnimation(currentKey){
        var activeButton = document.querySelector("."+currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

//Function associated with an object
// var bellBoy1 = {
//     name: "timmy",
//     age: 19,
//     hasWorkPermit: true,
//     languages: ["French","English"],
//     moveSuitcase: function(){
//         alert("May I take your suitcase");
//         pickUpSuitcase();
//         move();
//     }
// }
// Here now to call this function movesuitcase we need to combine it with
// a object thus it becomes a method and not a function

// bellBoy1.moveSuitcase();

// //Here a variable is assoicated with another variable
// var houseKeeper = {
//     yearsOfExperience: 12,
//     name: "Jane" 
// }

// //A Constructor Function
// function houseKeeper(yearsOfExperience,name){
//     this.yearsOfExperience = yearsOfExperience;
//     this.name= name;
// }

// //Initialising A Object
// var houseKeeper1 = new houseKeeper(2,"fkMeUp");