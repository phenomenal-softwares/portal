
function saveData(){
  let bizName = document.getElementById('bizName').value;
  let bizCategory = document.getElementById('bizCategory').value;
  let bizType = document.getElementById('bizType').value;
  let bizExample = document.getElementById('bizExample').value;
  let bizPhone = document.getElementById('bizPhone').value;
  let personalPhone = document.getElementById('personalPhone').value;
  let bizLocation = document.getElementById('bizLocation').value;

localStorage.name = bizName;
localStorage.category = bizCategory;
localStorage.type = bizType;
localStorage.example = bizExample;
localStorage.work = bizPhone;
localStorage.mobile = personalPhone;
localStorage.address = bizLocation;
}

function saveData2(){
  let ministry = document.getElementById('ministry').value;
  let programme = document.getElementById('programme').value;
  let theme = document.getElementById('theme').value;
  let venue = document.getElementById('venue').value;
  let date = document.getElementById('date').value;
  let starting = document.getElementById('starting').value;
  let ending = document.getElementById('ending').value;
  let guest = document.getElementById('guest').value;
  let phone = document.getElementById('phone').value;

localStorage.ministry = ministry;
localStorage.programme = programme;
localStorage.theme = theme;
localStorage.venue = venue;
localStorage.date = date;
localStorage.starting = starting;
localStorage.ending = ending;
localStorage.guest = guest;
localStorage.phone = phone;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 9000);    
}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}