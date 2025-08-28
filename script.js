document.addEventListener('DOMContentLoaded', () => {
    const notificationList = document.getElementById('notification-list');
    const showAddFormBtn = document.getElementById('show-add-form-btn');
    const addNotificationModal = document.getElementById('add-notification-modal');
    const closeBtn = document.querySelector('#add-notification-modal .close-btn');
    const addNotificationForm = document.getElementById('add-notification-form');
    
    // Check if the page is the notifications page to run the logic
    if (notificationList) {
        // Load notifications from local storage, or use a default list
        let notifications = JSON.parse(localStorage.getItem('notifications')) || [
            { id: 1, title: 'Welcome to AI Copilot!', message: 'We are excited to have you as part of our community. Explore clubs and events!', date: 'July 15, 2024' },
            { id: 2, title: 'Club Fair next week!', message: 'Don\'t miss the annual club fair on campus next Friday. Find your new passion!', date: 'July 14, 2024' }
        ];

        // Function to render notifications
        const renderNotifications = () => {
            notificationList.innerHTML = '';
            notifications.forEach(notification => {
                const card = document.createElement('div');
                card.classList.add('notification-card');
                card.innerHTML = `
                    <h3>${notification.title}</h3>
                    <p>${notification.message}</p>
                    <span class="date">${notification.date}</span>
                `;
                notificationList.appendChild(card);
            });
        };

        // Show the modal when the button is clicked
        showAddFormBtn.addEventListener('click', () => {
            addNotificationModal.classList.remove('hidden');
        });

        // Hide the modal when the close button is clicked
        closeBtn.addEventListener('click', () => {
            addNotificationModal.classList.add('hidden');
        });

        // Hide modal when clicking outside
        window.addEventListener('click', (event) => {
            if (event.target === addNotificationModal) {
                addNotificationModal.classList.add('hidden');
            }
        });

        // Handle form submission to add a new notification
        addNotificationForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const title = document.getElementById('notification-title').value;
            const message = document.getElementById('notification-message').value;
            const newNotification = {
                id: notifications.length + 1,
                title: title,
                message: message,
                date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
            };
            
            // Add the new notification to the beginning of the array
            notifications.unshift(newNotification);

            // Save the updated list to local storage
            localStorage.setItem('notifications', JSON.stringify(notifications));

            // Re-render the notifications list
            renderNotifications();

            // Hide the modal
            addNotificationModal.classList.add('hidden');
            addNotificationForm.reset();
        });

        // Initial render of notifications
        renderNotifications();
    }
});
