// Author: Sean Barker
// Date:   July 12, 2019
// Description: Invert logo colors on hover

// Create the function to change the image on mouseover
function chngImg() {
  var theLogo = document.getElementById("logo-nav");
  theLogo.setAttribute("src", "assets/logo2.png");
}

// Change it back on mouseout
function chngImgBck() {
  var theLogo = document.getElementById("logo-nav");
  theLogo.setAttribute("src", "assets/logo.png");
}

// Set up event listeners
document.getElementById("logo-nav").addEventListener("mouseover", chngImg);
document.getElementById("logo-nav").addEventListener("mouseout", chngImgBck);
