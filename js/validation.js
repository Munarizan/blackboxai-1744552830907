// Input validation functions can be added here

function validatePhoneNumber(phone) {
    const phonePattern = /^[0-9]{10,15}$/; // Example pattern for phone numbers
    return phonePattern.test(phone);
}

// Example usage
document.getElementById('payment-form').addEventListener('submit', function(event) {
    const phone = document.getElementById('phone').value;
    if (!validatePhoneNumber(phone)) {
        alert('Sila masukkan nombor telefon yang sah.');
        event.preventDefault();
    }
});
