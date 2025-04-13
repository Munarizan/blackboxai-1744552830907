// Form submission handler
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Collect form data
    const studentName = document.getElementById('student-name').value;
    const className = document.getElementById('class').value;
    const studentCategory = document.getElementById('student-category').value;
    const parentName = document.getElementById('parent-name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const paymentType = document.getElementById('payment-type').value;
    const uploadSlip = document.getElementById('upload-slip').files[0];

    // Validate inputs (basic example)
    if (!studentName || !className || !studentCategory || !parentName || !address || !phone || !paymentType) {
        alert('Sila isi semua maklumat yang diperlukan.');
        return;
    }

    // Process the payment (this can be expanded)
    alert('Pembayaran telah dihantar!');

    // Reset the form
    this.reset();
});
