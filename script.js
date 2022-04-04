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

// form

$("#open-form").click(function() {
  $("#form-section").toggle();
});

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

