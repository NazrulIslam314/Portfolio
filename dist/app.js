$(document).ready(function () {
    $(".nav-toggler").each(function (_, navToggler) {
      var target = $(navToggler).data("target");
      $(navToggler).on("click", function () {
        $(target).animate({
          height: "toggle",
        });
      });
    });
  });
 const sentBtn = document.getElementById("sent");
 const showArea = document.getElementById("showArea");
 sentBtn.addEventListener("click", () => {
  showArea.innerHTML = ("sent Success 🏅");
 } );