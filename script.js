function hideTab() {
    let tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
    tab[i].style.display = "none";
}};

function hideImage() {
    let tab = document.getElementsByClassName("tab-img");
    for (i = 0; i < tab.length; i++) {
    tab[i].style.display = "none";
}};

$("#gathering-btn").click(function() {
   hideTab();
   hideImage();
  $("#gathering").fadeIn();
  $("#gathering-pic").fadeIn();
});

$("#events-btn").click(function() {
   hideTab();
   hideImage();
  $("#events").fadeIn();
  $("#events-pic").fadeIn();
});

$("#social-btn").click(function() {
   hideTab();
   hideImage();
  $("#social").fadeIn();
  $("#social-pic").fadeIn();
});


