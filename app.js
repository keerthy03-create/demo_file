function openBooking(packageName) {
  // Show booking section
  document.getElementById("booking").classList.remove("d-none");

  // Set selected package name
  document.getElementById("selectedPackage").innerText = packageName;

  // Scroll to booking section
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}

function confirmBooking(event) {
  event.preventDefault();

  alert("🎉 Booking Successful! Your trip has been confirmed.");

  // Hide booking section after success
  document.getElementById("booking").classList.add("d-none");
}
function showDestination(title, info, image) {
  document.getElementById("destinationTitle").innerText = title;
  document.getElementById("destinationInfo").innerText = info;
  document.getElementById("destinationImage").src = image;

  let modal = new bootstrap.Modal(document.getElementById("destinationModal"));
  modal.show();
}

