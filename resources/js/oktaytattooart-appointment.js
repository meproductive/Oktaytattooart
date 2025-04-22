document.getElementById('uploadfile').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const maxSize = 5 * 1024 * 1024;
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
            
    if (file) {
        if (!allowedTypes.includes(file.type)) {
            alert('Only JPG, JPEG and PNG images are allowed.');
            event.target.value = '';
        } else if (file.size > maxSize) {
            alert('File size must be under 5MB.');
            event.target.value = '';
        }
    }
});


document.querySelector('input[type="tel"]').addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});

// Appointment Page JS
document.addEventListener("DOMContentLoaded", function () {
// Flatpickr for Birthday
flatpickr("#birthday", {
    altInput: true,
    enableTime: false,
    dateFormat: "Y-m-d", 
    altFormat: "F j, Y",  
    maxDate: "today",
    disableMobile: true,
    onChange: function(selectedDates, dateStr, instance) {
        const birthDate = selectedDates[0];
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        const d = today.getDate() - birthDate.getDate();

        const isUnder18 = m < 0 || (m === 0 && d < 0) ? age - 1 < 18 : age < 18;

        const warningEl = document.getElementById('birth-warning');

        if (isUnder18) {
            warningEl.textContent = "You must be at least 18 years old. If you are 16 or 17 please contact via WhatsApp with your parent.";
            instance.clear();
        } else {
            warningEl.textContent = "";
        }
    }         
});

// Flatpickr for Appointment
flatpickr("#appointment", {
    enableTime: true,
    altInput: true,
    altFormat: "F, j, Y (h:i K)",
    dateFormat: "Y-m-d\\TH:i",
    minDate: "today",
    minTime: "10:00",
    maxTime: "19:00",
    time_24hr: false, 
    disableMobile: true
});
});
// Pointer style for all Flatpickr inputs
document.querySelectorAll('.flatpickr').forEach(input => {
    input.style.cursor = 'pointer';
});

// Select2 dropdowns
$(document).ready(function() {
    $('.select2').select2({
        width: '100%'
    });
});