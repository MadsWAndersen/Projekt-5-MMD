
var hejsa = document.getElementById("inp1", "inp2", "inp3");
var noread = document.getElementById("inp1", "inp2", "inp3");

function readonly(){
	noread.readOnly=true;
}

function editInput() {
hejsa.classList.add("active");
		if (hejsa.classList.contains("active")) {
		hejsa.readOnly=false;
	}
}
