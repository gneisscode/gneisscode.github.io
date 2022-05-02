alert('click the image below and see what happens!');

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/em.jpg') {
      myImage.setAttribute('src','images/emm.jpg');
    } else {
      myImage.setAttribute('src','images/em.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Poetry is cool, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Poetry is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
