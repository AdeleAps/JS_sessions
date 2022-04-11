function hideTab() {
  let tab = document.getElementsByClassName("event-tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].style.display = "none";
  }
};

function hideImage() {
  let tab = document.getElementsByClassName("tab-img");
  for (i = 0; i < tab.length; i++) {
    tab[i].style.display = "none";
  }
};

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
  $("#form-section").toggle("medium");
  $("#form-section").css("display", "flex");
  $("#open-form").toggleClass("btn-active");
});

(function() {
'use strict';
window.addEventListener('load', function() {
  let forms = document.getElementsByClassName('needs-validation');
  let validation = Array.prototype.filter.call(forms, function(form) {
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

// person selector in the form

let substract = function() {
let input = $("#person-input").text();
let number = parseInt(input.charAt(0));
let newNumber = number - 1;

$('#plus').css("pointerEvents", "auto");
$("#person-input").text(newNumber + " people");
if (newNumber == 1) {
  $("#person-input").text(newNumber + " person");
  $('#minus').css("pointerEvents", "none");
}
}

let add = function() {
let input = $("#person-input").text();
let number = parseInt(input.charAt(0));
let newNumber = number + 1;

$('#minus').css("pointerEvents", "auto");
$("#person-input").text(newNumber + " people");
if (newNumber == 1) {
  $("#person-input").text(newNumber + " person")
}
else if (newNumber == 8) {
  $('#plus').css("pointerEvents", "none");
}
}

$("#plus").click(add);
$("#minus").click(substract);


// $("#choice").change(function () {
//   if($(this).val() == "0") $(this).addClass("empty");
//   else $(this).removeClass("empty")
// });

// $("#choice").change();


