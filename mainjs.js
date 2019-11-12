let left = document.getElementById("leftcard");
let mid = document.getElementById("midcard");
let right = document.getElementById("rightcard");

// var editBtn = document.getElementById("edit-btn");


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
style.cssText ="-webkit-transition: all 0.5s ease-in-out;";
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

style.cssText ="-webkit-transition: all 0.5s ease-in-out;";


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


style.cssText ="-webkit-transition: all 0.5s ease-in-out;";


}
left.addEventListener('click', leftSort);
mid.addEventListener('click', midSort);
right.addEventListener('click', rightSort);
// function midSort() {
//
//     mid.classList.add("kort2");
//   if(mid.classList.contains("kort2")){
//     mid.classList.remove("kort3");
//
//   }
//   left.classList.add("kort2");
//   if (left.classList.contains("kort2")) {
//     left.classList.remove("kort1");
//
//
//
// }
// right.classList.add("kort1");
// if (right.classList.contains("kort1")) {
// right.classList.remove("kort3");
// }
// }
//
// window.alert();


// let leftCard
//
// function cardSort() {
// kort1.classList.add("active");
// 		if (hejsa.classList.contains("active")) {
// 		hejsa.readOnly=false;
//
// hejsa2.classList.add("active");
// 		if (hejsa2.classList.contains("active")) {
// 		hejsa2.readOnly=false;
//
// hejsa3.classList.add("active");
// 		if (hejsa3.classList.contains("active")) {
// 		hejsa3.readOnly=false;
// 	}
// 	}
// 	}
// }
