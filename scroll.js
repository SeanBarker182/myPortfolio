// Author: Sean Barker
// Date:   July 12, 2019
// Description: Portfolio scroll on Nav

$("a").click(function() {
  var pageId = $(this).attr("data-page");
  $("html, body").animate({ scrollTop: $("#" + pageId).offset().top }, 1000);
});

function clickedIt() {
  var canSee = $("#navbarSupportedContent").is(":visible");
  if (canSee != true) {
    document.getElementById("head-info").style.visibility = "hidden";
  } else {
    document.getElementById("head-info").style.visibility = "visible";
  }
}

document.getElementById("navBut").addEventListener("click", clickedIt);
