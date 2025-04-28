
    function setThemeBasedOnTime() {
        const hour = new Date().getHours();
        const body = document.body;

        // Remove any existing theme class
        body.classList.remove('morning', 'afternoon', 'evening', 'night');

        // Apply the correct theme based on the hour
        if (hour >= 6 && hour < 12) {
            body.classList.add('morning');
        } else if (hour >= 12 && hour < 18) {
            body.classList.add('afternoon');
        } else if (hour >= 18 && hour < 21) {
            body.classList.add('evening');
        } else {
            body.classList.add('night');
        }
    }

    // Run the function when the page loads
    window.onload = setThemeBasedOnTime;

    // Optional: Update the theme every hour (3600000 ms = 1 hour)
    setInterval(setThemeBasedOnTime, 3600000);
