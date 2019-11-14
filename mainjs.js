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
let dropExp = document.getElementById("dropdownExp");
let expColor = document.getElementById("ddContent");

function expand(){
  dropExp.style.height = "400px";
  dropExp.style.marginTop = "40%";
  expColor.style.backgroundColor = "#000";
}


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
// let arrayEksempel = ["en", "to", "tre", "fire"];
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
