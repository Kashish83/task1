// Show alert when "Learn More" button is clicked
function showMessage() {
    alert("Thank you for your interest! Explore our services below.");
}

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if(name && email && message) {
        formMessage.style.color = 'green';
        formMessage.textContent = "Thank you, " + name + "! We'll get back to you soon.";
        this.reset();
    } else {
        formMessage.style.color = 'red';
        formMessage.textContent = "Please fill in all fields.";
    }
});

