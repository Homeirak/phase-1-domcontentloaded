// Your code goes here
//The DOMContentLoaded event is the browser's built-in way to indicate when a page's html is loaded into the DOM.

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    document.getElementById("text").textContent = "This is really cool!";
});

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");


//another way to code line 6 using querySelector would be:
// document.querySelector("#text").textContent = "This is really cool!"
//you can use textContent or innerHTML