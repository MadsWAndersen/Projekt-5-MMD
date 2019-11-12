



let left = document.getElementById("leftcard");
let mid = document.getElementById("midcard");
let right = document.getElementById("rightcard");
// var editBtn = document.getElementById("edit-btn");


        function leftSort() {

            mid.classList.add("kort3");
          if(mid.classList.contains("kort3")){
            mid.classList.remove("kort2");

          }
          left.classList.add("kort2");
        	if (left.classList.contains("kort2")) {
        		left.classList.remove("kort1");



}
  right.classList.add("kort1");
if (right.classList.contains("kort1")) {
  right.classList.remove("kort3");
}
}

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
