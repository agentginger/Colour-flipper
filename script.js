const green = document.querySelector(".green");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const rand = document.querySelector(".rand")
const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");


green.addEventListener("click", greenSwap);
function greenSwap() {
    body.removeAttribute("class")
    body.classList.add("bgGreen")
    
};

red.addEventListener("click", redSwap);
function redSwap() {
    body.removeAttribute("class")
    body.classList.toggle("bgRed");
    
};


blue.addEventListener("click", blueSwap);
function blueSwap() {
    body.removeAttribute("class")
    body.classList.toggle("bgBlue");
    
}




/*
generate random number
If number is 0.1-0.3 then green
If number is 0.4-0.7 then red
If number is > 0.8 then blue
*/


/* 
Adds an event listener to the random button, generates a random num 1-10. Depending on result bg col changes. 
Before classes are added all classes are removed so Body can only have one class at a time.
*/

rand.addEventListener("click", randNum);
function randNum() {
    const numGen = Math.floor(Math.random() * 10) + 1;
    console.log(numGen)
    body.removeAttribute("class")
    if(numGen <= 3) {
        body.classList.add("bgGreen");
    } else if(numGen <= 6) {
        body.classList.add("bgRed");
    } else {
        body.classList.add("bgBlue");
    }
}



/*
 Any button press will delete all classes from buttons then assign a class based on bounds of a randomly generated number.
 The names of the buttons themselves bear no meaning.

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        console.log("you clicked a button")
        body.removeAttribute("class")
        const randNum = Math.floor(Math.random() * 10) + 1;
        console.log(randNum);
        if (randNum <= 3) {
            body.classList.add("bgBlue")
        } else if (randNum <= 6) {
            body.classList.add("bgRed")
        } else {
            body.classList.add("bgGreen")
        }
    })
})
*/





// const varName = document.querySelector("");
// varName.addEventListener("click", myFunction);
// function myFunction() {
//     varName.classList.add("")
// }