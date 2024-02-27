const toggle = document.getElementById("toggle");
const mainContent = document.querySelector('.main_content');
const sidebar = document.querySelector('.sidebar');
console.log('Script is running');

// Function to set dark mode state
function setDarkMode(enabled) {
    if (enabled) {
        mainContent.classList.add('gray');
        sidebar.classList.add('dark');
        localStorage.setItem('darkModeEnabled', 'true');
        console.log('Dark mode is enabled. Adding classes...');
    } else {
        mainContent.classList.remove('gray');
        sidebar.classList.remove('dark');
        localStorage.setItem('darkModeEnabled', 'false');
        console.log('Dark mode is disabled. Removing classes...');
    }

}

// Check if dark mode was enabled previously
const darkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
console.log('Dark mode status in local storage:', localStorage.getItem('darkModeEnabled'));
toggle.checked = darkModeEnabled; // Set switch state
setDarkMode(darkModeEnabled);

// Event listener for dark mode toggle
toggle.addEventListener('change', () => {
    setDarkMode(toggle.checked);
});
