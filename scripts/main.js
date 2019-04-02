var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

/*
document.querySelector('html').onclick = function(){
 alert('Ouch! Stop poking me!');
}
*/


var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc == 'images/firefox.jpeg'){
        myImage.setAttribute('src','images/fox.jpeg');
    }
    else{
        myImage.setAttribute('src','images/firefox.jpeg');  
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

//using webStorage API

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Mozilla is cool, '+myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "Mozilla is cool, "+storedName;
}

myButton.onclick = function(){
    setUserName();
}

document.getElementById('media-load').onclick=function(){
var mediaElem = document.getElementById("my-media-element");
mediaElem.load();
}

document.getElementById('media-load').onclick=function(){
var mediaElem = document.getElementById("my-media-element2");
mediaElem.load();
}