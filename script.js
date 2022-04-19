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

function appendData() {
let input = $("#person-input").text();
let number = parseInt(input.charAt(0));
let persons = $("#persons");
persons.val(number);
}

(function() {
'use strict';
window.addEventListener('load', function() {
  let forms = document.getElementsByClassName('needs-validation');
  let validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      appendData();
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

$(window).resize(function() {
  if ($(window).width() >= 1025)
  {
    $("#form-section").attr("style", "display: flex !important");
  } else {

    if (!$("#open-form").hasClass("btn-active")) {   
    $("#form-section").attr("style", "display: none")}
    else {
    $("#form-section").attr("style", "display: flex")};
}});

// popup

  $('.popup-close').click(function(e) {
    $('.popup-wrap').fadeOut(500);
    $('.popup-box').removeClass('transform-in').addClass('transform-out');

    e.preventDefault();
});


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('popup')) {
  $('.popup-wrap').fadeIn(500);
  $('.popup-box').removeClass('transform-out').addClass('transform-in');
  const newURL = window.location.href.split("?")[0];
  window.history.pushState("object", document.title, newURL)
}





