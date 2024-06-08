const body = document.body;
const lightModeButton = document.getElementById('lightModeButton');
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

lightModeButton.addEventListener('click', function() { // Light mode button
    
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'black';
        lightModeButton.innerText = 'Switch to Light Mode';
    } else {
        body.style.backgroundColor = 'white';
        lightModeButton.innerText = 'Switch to Dark Mode';
    }
  });

if (prefersDarkMode.matches) { // If user's browser appearance is set to dark/light, change to that
  document.body.backgroundColor === 'black';
  lightModeButton.innerText = 'Switch to Light Mode';
  console.log('Browser appearance is dark');
} else {
    body.style.backgroundColor = 'white';
    lightModeButton.innerText = 'Switch to Dark Mode';
    console.log('Browser appearance is light');
}