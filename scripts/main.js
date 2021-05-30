let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lawrence-logo.jpeg'){
        myImage.setAttribute('src', 'images/tinder-logo.png');
    }else{
        myImage.setAttribute('src', 'images/lawrence-logo.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome, ' + myName;
    }
    }


if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
  }

myButton.onclick = function() {
    setUserName();
}