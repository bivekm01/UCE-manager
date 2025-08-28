document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');
    const modal = document.getElementById('message-modal');
    const modalMessage = document.getElementById('modal-message');
    const closeModalBtn = document.querySelector('.close-btn');

    // Function to show the modal with a message
    const showModal = (message) => {
        modalMessage.textContent = message;
        modal.style.display = 'flex';
    };

    // Function to hide the modal
    const hideModal = () => {
        modal.style.display = 'none';
    };

    // Event listener for form submission
    registrationForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // In a real application, you would send this data to a server
        // For this example, we will just show a success message
        const message = `Thank you, ${name}! You have successfully registered for the event. A confirmation has been sent to ${email}.`;
        showModal(message);

        // Optional: clear the form fields after successful registration
        registrationForm.reset();
    });

    // Event listener to close the modal
    closeModalBtn.addEventListener('click', hideModal);

    // Event listener to close the modal if clicked outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });
});
