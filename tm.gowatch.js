const darkModeToggle = document.getElementById('tm');
const body = document.body;

// Check if dark mode is enabled in localStorage
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Set initial dark mode state based on localStorage
if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Toggle dark mode and save the preference in localStorage
darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
});
