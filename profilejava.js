
let hejsa = document.getElementById("inp1");
let hejsa2 = document.getElementById("inp2");
let hejsa3 = document.getElementById("inp3");
let editBtn = document.getElementById("edit-btn");

let bob = [hejsa, hejsa2, hejsa3];
console.log(bob[2]);

document.getElementById("inp1").readOnly=true;
document.getElementById("inp2").readOnly=true;
document.getElementById("inp3").readOnly=true;


function editInput() {
	editBtn.classList.add("editable");
	if (editBtn.classList.contains("editable")) {
		editBtn.classList.remove("editable-btn");

hejsa.classList.add("active");
		if (hejsa.classList.contains("active")) {
		hejsa.readOnly=false;

hejsa2.classList.add("active");
		if (hejsa2.classList.contains("active")) {
		hejsa2.readOnly=false;

hejsa3.classList.add("active");
		if (hejsa3.classList.contains("active")) {
		hejsa3.readOnly=false;
	}
	}
	}
}
}







//var hejsa = document.getElementById("inp1", "inp2", "inp3");
//var noread = document.getElementById("inp1", "inp2", "inp3");
//
//function readonly(){
//	noread.readOnly=true;
//}
//
//function editInput() {
//hejsa.classList.add("active");
//		if (hejsa.classList.contains("active")) {
//		hejsa.readOnly=false;
//	}
//}
