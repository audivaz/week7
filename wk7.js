// 1

var heading = document.querySelector("h1");
console.log(heading);

var ul = document.querySelector("ul");

var form = document.querySelector("form");

// 2

document.querySelector("h1").innerHTML = "Generic Heading";

//! You already declared your h1 element into var heading on line 6, so you could write
//! this in a much more efficient way by just using heading.innerHTML = 'Generic Heading';
//! You could also use .textContent instead of .innerHTML for just putting text in. Remember
//! .innerHTML ONLY works on an element that has inner HTML.

// 3

var paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

//! using const instead of var here is better practice, but this is fine.

// 4

paragraphs.forEach(function (item) {
  console.log(item);
  item.style.backgroundColor = "blue";
  item.style.color = "white";
});

//! Good job using a foreach since you used querySelectorAll to get a node list. You can use an arrow function instead to make the code a bit cleaner, I'll show you below. You were given a .css file with classes to use for the styling of the paragraphs. If you remember back to the log-in form project, we can use item.classList.add('blue') to apply a css class to all of the item's (p's) instead of using .style It's better practice to use .classList or .className in conjunction with your .css file. It cleans up the code and makes it easier to stay consistent. This code works fine, but here is a better solution:

/*
     paragraphs.forEach (p => {
         p.classList.add('blue');
     });
*/

// 5
let para = document.createElement("p");
var node = document.createTextNode("new paragraph");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);
console.log(para);

//! This is good use of different methods here, especially the appendChild(). You could clean up lines 66-68 by just using this: document.getElementById('div1').appendChild(para); No need to make a new variable element here. Another, shorter and better way of doing this is the following:

//!  const para = document.querySelector('div');
//!  para.innerHTML += `<p>New Paragraph</p>`;  --- This is using innerHTML to just append another <p></p> to the div.

// 6

const hobbies = ["movies", "pizza", "airsoft", "gym"];
console.log(hobbies);

//! Good job!

// 7

for (var i = 0; i < hobbies.length; i++) {
  var newLi = document.createElement("li");
  var text = document.createTextNode(hobbies[i]);
  newLi.appendChild(text);
  ul.appendChild(newLi);
  console.log(newLi);
}

//! Good job here Audi! This is a perfectly fine way of doing this, but you could do it with much less code using a for..of loop for iterating through arrays, combined with some innerHTML

/* 
    for(hobby of hobbies) {
         ul.innerHTML += `<li>${hobby}</li>`;
    }
*/

// 8

form.go.addEventListener("click", function () {
  alert("thundercats hoooo!");
  e.preventDefault();
});

form.stop.addEventListener("click", function () {
  alert("I gotta go");
  e.preventDefault();
});

//! You did a great job getting these alerts to pop when each button is clicked. You also did good in handling event delegation. However, you were supposed to apply css classes using the classList.add() to each button. I will show you the correct answer below. We can go over this any time if you have any questions.

/*  
    form.addEventListener('click', e => {
         e.preventDefault();    
         if(e.target.id === 'go') {
            e.target.classList.add('go');
         } else if (e.target.id === 'stop') {
             e.target.classList.add('stop');
         }
    });
*/
