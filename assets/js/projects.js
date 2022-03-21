var modal = document.getElementById("modal");
var modal_iframe = document.getElementById("modal_iframe");
var close_btn = document.getElementsByClassName("modal_x_button")[0];


function openPageWithModal(pageName) {
  modal.style.display = "block";
  modal_iframe.src = "modal_pages/" + pageName + ".html";
}

window.onclick = function(event) {
  if (event.target == modal) {
    document.getElementById("modal").classList.add("modal_content_out");
    setTimeout(hide_modal, 450);
  }
}

close_btn.onclick = function() {
    document.getElementById("modal").classList.add("modal_content_out");
    setTimeout(hide_modal, 450);
}

function hide_modal() {
    modal.classList.remove("modal_content_out");
    modal.style.display = "none";
}
