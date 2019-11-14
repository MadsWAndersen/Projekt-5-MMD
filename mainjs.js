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
}


left.addEventListener("click", leftSort);
mid.addEventListener("click", midSort);
right.addEventListener("click", rightSort);


let homeModal = document.getElementById("homeModal");
let homeBtn = document.getElementById("homeBtn");
let homeClose = document.getElementsByClassName("homeClose")[0];

homeBtn.onclick = function() {
  homeModal.style.display = "block";
};

homeClose.onclick = function() {
  homeModal.style.display = "none";
};

window.addEventListener("click", function(event) {
  if (event.target == homeModal) {
    homeModal.style.display = "none";
  }
});


// SCHOOL
let schoolModal = document.getElementById("schoolModal");
let schoolBtn = document.getElementById("schoolBtn");
let schoolClose = document.getElementsByClassName("schoolClose")[0];

schoolBtn.onclick = function() {
  schoolModal.style.display = "block";
};

schoolClose.onclick = function() {
  schoolModal.style.display = "none";
};

window.addEventListener("click", function(event) {
  if (event.target == schoolModal) {
    schoolModal.style.display = "none";
  }
});



// WORK
let workModal = document.getElementById("workModal");
let workBtn = document.getElementById("workBtn");
let workClose = document.getElementsByClassName("workClose")[0];

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
