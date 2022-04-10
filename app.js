// Challenge: 1. Write a script, which outputs numbers from 1 to 100. Instead of multiples of 3 write “Three”, instead of multiples of 5 write “Five”.

var output = [];

function numbrsGenerator() {
  for (i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      output.push("Three");
    } else if (i % 5 === 0) {
      output.push("Five");
    } else {
      output.push(i);
    }
  }
}
numbrsGenerator();

console.log(output.join("\n"));

// -------------------------------------------------------------------------------------------------------
//Challenge:2. Fix below code so the index is correctly output each iteration with a 200ms timeout:

function indexDisplay() {
  var index,
    length = 20;

  for (index = 0; index < length; index++) {
    setTimeout(function () {
      console.log(index);
    }, 200);
  }
}

indexDisplay();

// ----------------------------------------------------------------------------------------------------
//Challenge:3. Fix below code so the alert is only shown in IE7:

$(document).ready(function () {
  alert("I'm a pop-up alert");
});

// -----------------------------------------------------------------------------------------------------
//Challenge: 4. Fix below code so the methods can be chained (single-statement):

var object = {
  alert: function (txt) {
    this.result = alert(txt);
    return this;
  },
  confirm: function (txt) {
    this.result = confirm(txt);
    return this;
  },
};

object
  .alert("Warning: you are about to delete this item!")
  .confirm("Are you sure?");

console.log(object.result);

// ---------------------------------------------------------------------------------------------------
//Challenge: 5. Write a script which outputs a “mousemove” event for each nested div:

const element1 = document.querySelector("#element1");
const element2 = document.querySelector("#element2");
const element3 = document.querySelector("#element3");

element1.addEventListener("mousemove", printMouseOver);
element2.addEventListener("mousemove", printMouseOver);
element3.addEventListener("mousemove", printMouseOver);

function printMouseOver(e) {
  e.stopPropagation();
  console.log(e.target.dataset.id);
}
