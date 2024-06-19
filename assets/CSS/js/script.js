// Code used from knowledge of learning JavaScript through code institute and W3 Schools.
document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Hide booking modal
    $("#bookNowModal").modal("hide");
    // Show the "Thank You" modal
    $("#thankYouModal").modal("show");
    // Resets the form
    this.reset();
  });
