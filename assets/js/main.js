var i = 0;
var typewriteText = 'Software Engineering + Web Development + Game Development';
var txt = '';
var showScrollTip = true;

function pageLoadScript() {
  document.getElementById("subtitle_text").innerHTML = "";
  start_subtitle();
  setTimeout(scroll_tip, 10000);
}

window.onscroll = (e) => {  
  showScrollTip = false; 
  var element = document.getElementById("scroll_tip_text");
  element.classList.remove("show");
}


function start_subtitle() {
  document.getElementById("subtitle_text").innerHTML = "|";
  setTimeout(blink_subtitle, 500);
}

function blink_subtitle() {
  document.getElementById("subtitle_text").innerHTML = "";
  setTimeout(typewrite_subtitle, 500);
}

function typewrite_subtitle() {
  if (i < typewriteText.length) {
    txt += typewriteText.charAt(i);
    document.getElementById("subtitle_text").innerHTML = txt + "|";
    i++;
    setTimeout(typewrite_subtitle, 50);
  }
  else {
    setTimeout(highlight_subtitle, 200);
  }
}

function highlight_subtitle() {
  document.getElementById("subtitle_text").innerHTML = "<mark>"+typewriteText+" </mark>";
  setTimeout(finish_subtitle, 400);
}

function finish_subtitle() {
  document.getElementById("subtitle_text").innerHTML = "Information and Communication Engineer";
}


function scroll_tip() {
  if(showScrollTip) {
    var element = document.getElementById("scroll_tip_text");
    element.classList.add("show");
  }
}


function toggleBackgroundTint() {
  document.getElementById("background_tint").classList.toggle("hide");
  document.getElementById("background_text").classList.toggle("hide");
}