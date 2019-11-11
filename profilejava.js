
var hejsa = document.getElementById("inp1");
var hejsa2 = document.getElementById("inp2");
var hejsa3 = document.getElementById("inp3");

var bob = [hejsa, hejsa2, hejsa3];
console.log(bob[2]);

document.getElementById("inp1").readOnly=true;
document.getElementById("inp2").readOnly=true;
document.getElementById("inp3").readOnly=true;


function editInput() {
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
