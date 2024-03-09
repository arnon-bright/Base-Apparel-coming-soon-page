function validate() {
    const emailInput = document.getElementById('emailAddress');
    const errorMessage = document.querySelector('.errorMessage');
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email format
    const errorIcon = document.querySelector('.errorIcon');
  
    // Check if email is empty
    if (!email) {
      errorMessage.textContent = '';
    } else if (!emailRegex.test(email)) {
      errorMessage.textContent = 'Please provide a valid email';
    } else {
      // Email is valid, clear any previous error message
      errorMessage.textContent = '';
    }
  
    // Show/Hide error message based on validation
    errorMessage.style.display = (errorMessage.textContent) ? 'block' : 'none';
    errorIcon.style.display = (errorMessage.textContent) ? 'block' : 'none';
  }
  