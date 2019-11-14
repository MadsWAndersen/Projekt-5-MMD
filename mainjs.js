let left = document.getElementById("leftcard");
let mid = document.getElementById("midcard");
let right = document.getElementById("rightcard");
let one = document.getElementById("btnOne");
let two = document.getElementById("btnTwo");
let three = document.getElementById("btnThree");



function leftSort() {
  function leftCheck() {
    document.getElementById("input1").checked = true;
    one.classList.remove("invis");
    two.classList.add("invis");
    three.classList.add("invis");
  }

  leftCheck();
  right.classList.add("kort1");
  if (right.classList.contains("kort1")) {
    right.classList.remove("kort2", "kort3");
  }

  left.classList.add("kort2");
  if (left.classList.contains("kort2")) {
    left.classList.remove("kort1", "kort3");
  }

  mid.classList.add("kort3");
  if (mid.classList.contains("kort3")) {
    mid.classList.remove("kort1", "kort2");
  }
  // left.cssText = "-webkit-transition: all 0.8s ease-in-out;";
}



function midSort() {
  function midCheck() {
    document.getElementById("input2").checked = true;
    one.classList.add("invis");
    two.classList.remove("invis");
    three.classList.add("invis");
  }
  midCheck();
  left.classList.add("kort1");
  if (left.classList.contains("kort1")) {
    left.classList.remove("kort2", "kort3");
  }

  mid.classList.add("kort2");
  if (mid.classList.contains("kort2")) {
    mid.classList.remove("kort1", "kort3");
  }

  right.classList.add("kort3");
  if (right.classList.contains("kort3")) {
    right.classList.remove("kort1", "kort2");
  }

  // mid.cssText = "-webkit-transition: all 0.8s ease-in-out;";
}


function rightSort() {
  function rightCheck() {
    document.getElementById("input3").checked = true;
    one.classList.add("invis");
    two.classList.add("invis");
    three.classList.remove("invis");
  }

  rightCheck();
  mid.classList.add("kort1");
  if (mid.classList.contains("kort1")) {
    mid.classList.remove("kort2", "kort3");
  }

  right.classList.add("kort2");
  if (right.classList.contains("kort2")) {
    right.classList.remove("kort1", "kort3");
  }

  left.classList.add("kort3");
  if (left.classList.contains("kort3")) {
    left.classList.remove("kort1", "kort2");
  }

  // right.cssText = "transition: all 1.8s ease-in-out;";
}



left.addEventListener('click', leftSort);
mid.addEventListener('click', midSort);
right.addEventListener('click', rightSort);

// let dropdown = document.getElementById('dropdown')
//
// function showMenu(){
//  dropdown.classList.toggle("invis")
// }
//
// one.addEventListener('click', showMenu);
// two.addEventListener('click', showMenu);
// three.addEventListener('click', showMenu);

// Man kan også lave transition på den her måde, men så går den ikke væk automatisk. Se focus:within.
// let dropExp = document.getElementById("dropdownExp");
// let expColor = document.getElementById("ddContent");
//
// function expand(){
//   dropExp.style.height = "400px";
//   dropExp.style.marginTop = "40%";
//   expColor.style.backgroundColor = "#000";
// }


// Get the modal
var homeModal = document.getElementById("homeModal");

// Get the button that opens the modal
var homeBtn = document.getElementById("homeBtn");

// Get the <span> element that closes the modal
var homeClose = document.getElementsByClassName("homeClose")[0];

// When the user clicks on the button, open the modal
homeBtn.onclick = function() {
  homeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
homeClose.onclick = function() {
  homeModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == homeModal) {
    homeModal.style.display = "none";
  }
});


// SCHOOL
// SCHOOL
// SCHOOL
// SCHOOL
// SCHOOL
// SCHOOL
// SCHOOL
// SCHOOLSCHOOL
// SCHOOL
// SCHOOL

// Get the modal
var schoolModal = document.getElementById("schoolModal");

// Get the button that opens the modal
var schoolBtn = document.getElementById("schoolBtn");

// Get the <span> element that closes the modal
var schoolClose = document.getElementsByClassName("schoolClose")[0];

// When the user clicks on the button, open the modal
schoolBtn.onclick = function() {
  schoolModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
schoolClose.onclick = function() {
  schoolModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == schoolModal) {
    schoolModal.style.display = "none";

  }
});



// WORK
// WORK
// WORK
// WORK
// WORK
// WORK
// WORK
// WORK
// WORKWORK
// WORK
// WORK
// WORK
// WORK
// WORK

var workModal = document.getElementById("workModal");
var workBtn = document.getElementById("workBtn");
var workClose = document.getElementsByClassName("workClose")[0];

workBtn.onclick = function() {
  workModal.style.display = "block";
};

workClose.onclick = function() {
  workModal.style.display = "none";
};

window.addEventListener("click", function(event) {
  if (event.target == workModal) {
    workModal.style.display = "none";
  }
});






// ADDNEW
// ADDNEW
// ADDNEW
// ADDNEW
// ADDNEW
// ADDNEW
// ADDNEWADDNEW
// ADDNEW
// ADDNEW
// ADDNEW
// ADDNEW
// ADDNEWADDNEW
// ADDNEW
// ADDNEW
// ADDNEW
// ADDNEWADDNEW
// ADDNEW




var addModal = document.getElementById("addModal");
var addBtn = document.getElementById("addBtn");
var addClose = document.getElementsByClassName("addClose")[0];

addBtn.onclick = function() {
  addModal.style.display = "block";
};

addClose.onclick = function() {
  addModal.style.display = "none";
};

window.addEventListener("click", function(event) {
  if (event.target == addModal) {
    addModal.style.display = "none";
  }
});


















// two.addEventListener('click', showMenu);
// three.addEventListener('click', showMenu);

//
//   function editTwo() {
//
//     if (radioTwo.checked == true) {
//       one.classList.add("invis");
//       two.classList.remove("invis");
//       three.classList.add("invis");
//     }
//
//     function editThree() {
//
//       if (radioThree.checked == true) {
//         one.classList.add("invis");
//         two.classList.add("invis");
//         three.classList.remove("invis");
//       }
// }




//
// let arrayEksempel = ["hest", "ko", "kat", 26];
//
// for(let i = 0; i < arrayEksempel.length; i++){
//
//    console.log(arrayEksempel[i]);
//
// }

/* Outputs:
one
two
three
four
*/
