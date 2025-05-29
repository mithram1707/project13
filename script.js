const bookingForm = document.getElementById('bookingForm');
const confirmationMessage = document.getElementById('confirmationMessage');

bookingForm.addEventListener('submit', function (e) {
  e.preventDefault();

  confirmationMessage.textContent = "✅ Booking submitted successfully! We’ll contact you shortly.";
  bookingForm.reset();

  // Simulate a delay
  setTimeout(() => {
    confirmationMessage.textContent = "";
  }, 5000);
});
