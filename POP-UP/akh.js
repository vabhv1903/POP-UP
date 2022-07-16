$(document).ready(() => {
    $(".clickme").on("click", function () {
      $("#popup").toggleClass("show");
    });
    $(".close").on("click", function () {
      $("#popup").removeClass("show");
      $("#popup").addClass("closing");
      $("#popup").on("animationend", () => {
        $("#popup").removeClass("closing");
      });
    });
    $("#submit-button").click((e) => {
      let usernameValid = false;
      let emailValid = false;
      let username = $("#username").val();
      if (username.length < 5) {
        usernameValid = false;
        $("#invalid-username").text("Username provided is invalid");
      } else {
        usernameValid = true;
        $("#invalid-username").text("");
      }
      let email = $("#email").val();
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        emailValid = false;
        $("#invalid-email").text("Email id provided is invalid");
      } else {
        emailValid = true;
        $("#invalid-email").text("");
      }
      if (!(usernameValid && emailValid)) {
        return false;
      }
      else{
          $("popup").removeClass("show")
          $("popup").addClass("closing")
      }
    });
  });