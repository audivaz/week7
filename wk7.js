


// 1

var heading = document.querySelector('h1'); 
    console.log(heading);

var ul = document.querySelector('ul');


var form = document.querySelector('form');






// 2

document.querySelector('h1').innerHTML = 'Generic Heading';





// 3

var paragraphs = document.querySelectorAll('p');
    console.log(paragraphs);







// 4

paragraphs.forEach(function(item){

    console.log(item);
    item.style.backgroundColor = 'blue'; 
    item.style.color = 'white';
})







// 5
let para = document.createElement('p');
var node = document.createTextNode('new paragraph');
para.appendChild(node);
    

var element = document.getElementById("div1");
element.appendChild(para);
    console.log(para);








// 6


const hobbies = ['movies', 'pizza', 'airsoft', 'gym'];
    console.log(hobbies);






// 7

for (var i=0; i < hobbies.length; i++) {
    var newLi = document.createElement('li');
    var text = document.createTextNode(hobbies[i]);
    newLi.appendChild(text);
    ul.appendChild(newLi);
    console.log(newLi);
}







// 8


form.go.addEventListener('click', function() {
    alert("thundercats hoooo!");
    e.preventDefault();
})

form.stop.addEventListener('click', function() {
    alert("I gotta go");
    e.preventDefault();
})



