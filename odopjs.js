// Smooth scrolling to section
function scrollToSection(id) {
  const section = document.getElementById(id);
  section.scrollIntoView({ behavior: 'smooth' });
}

// Contact form submission handling
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const customAlert = document.getElementById('customAlert');

  if (form && customAlert) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevents the default form submission

      // Show custom alert (baby pink box)
      customAlert.style.display = 'block';

      // Reset form fields
      form.reset();

      // Hide the custom alert message after 5 seconds
      setTimeout(() => {
        customAlert.style.display = 'none';
      }, 5000);
    });
  }
});

// Dropdown interaction – only one open at a time
document.querySelectorAll('details.dropdown').forEach((dropdown) => {
  dropdown.addEventListener('toggle', function () {
    if (this.open) {
      document.querySelectorAll('details.dropdown').forEach((other) => {
        if (other !== this) other.removeAttribute('open');
      });
    }
  });
});


