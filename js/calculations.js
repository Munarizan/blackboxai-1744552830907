// Fee calculation functions can be added here

function calculateTotalFee(paymentType, studentCategory) {
    let totalFee = 0;

    switch (paymentType) {
        case 'bulanan':
            totalFee = 15;
            break;
        case 'setengah-tahun':
            totalFee = 75;
            break;
        case 'setahun':
            totalFee = 165;
            break;
        default:
            totalFee = 0;
    }

    if (studentCategory === 'baru') {
        totalFee += 10; // Registration fee for new students
    }

    return totalFee;
}

// Example usage
document.getElementById('payment-type').addEventListener('change', function() {
    const paymentType = this.value;
    const studentCategory = document.getElementById('student-category').value;
    const totalFee = calculateTotalFee(paymentType, studentCategory);
    console.log('Total Fee:', totalFee);
});
