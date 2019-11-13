let left = document.getElementById("leftcard");
let mid = document.getElementById("midcard");
let right = document.getElementById("rightcard");



function leftSort() {
  function leftCheck() {
    document.getElementById("input1").checked = true;
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
  left.cssText = "-webkit-transition: all 0.5s ease-in-out;";
}



function midSort() {
  function midCheck() {
    document.getElementById("input2").checked = true;
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

  mid.cssText = "-webkit-transition: all 0.5s ease-in-out;";
}


function rightSort() {
  function rightCheck() {
    document.getElementById("input3").checked = true;
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

  right.cssText = "-webkit-transition: all 0.5s ease-in-out;";
}

left.addEventListener('click', leftSort);
mid.addEventListener('click', midSort);
right.addEventListener('click', rightSort);



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
