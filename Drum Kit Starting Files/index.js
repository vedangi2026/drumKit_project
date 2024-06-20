// to add event listner to all the buttons 
for(var i=0;i< document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var button_HTML=this.innerHTML;
        makeSound(button_HTML);
        btnAnimation(button_HTML);
        






          
    });
// for keyboard presses 

}
document.addEventListener("keydown",function(event){
    // event let me tap in 
    makeSound(event.key);
    btnAnimation(event.key);

});
// function  to make sound 
function makeSound(key){
    switch (key) {
        case "w":
            var audio =new Audio("./sounds/crash.mp3");
            audio.play();

            
            break;
        
        case "a":
            var audio =new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio =new Audio("./sounds/snare.mp3");
            audio.play();
            break; 
        case "d":
            var audio =new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;    
        case "j":
            var audio =new Audio("./sounds/tom-2.mp3");
            audio.play();
            break; 
        case "k":
            var audio =new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;    
        case "l":
            var audio =new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;         

        default:
            break;
    }


}
// function to add animations to the buttons that got clicked 
function btnAnimation(current_key){
    // now to  know which key is pressed 
    var activeBtn=document.querySelector("."+current_key);
    // now i got to add class to this active btn using css by adding the calss pressed to it 
    document.querySelector("."+current_key).classList.add("pressed");
    // introduce delay 
    setTimeout(function(){
        // i need to remove pressed clas 
        document.querySelector("."+current_key).classList.remove("pressed");


    },100)


}
