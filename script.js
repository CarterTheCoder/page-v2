const body = document.body;
const lightModeButton = document.getElementById('lightModeButton');
let modeCookie = document.cookie;

lightModeButton.addEventListener('click', function() { // Light mode button
    
    if (body.style.backgroundColor === 'white') {
        document.cookie = 'mode=dark';
        body.style.backgroundColor = 'black';
        lightModeButton.innerText = 'Switch to Light Mode';
    } else {
        document.cookie = 'mode=light';
        body.style.backgroundColor = 'white';
        lightModeButton.innerText = 'Switch to Dark Mode';
    }
});

if (modeCookie == 'mode=dark') { // Check what the user last set their light/dark mode to
  body.style.backgroundColor = 'black';
  lightModeButton.innerText = 'Switch to Light Mode';
  console.log('Mode cookie is dark');
} else {
  body.style.backgroundColor = 'white';
  lightModeButton.innerText = 'Switch to Dark Mode';
  console.log('Mode cookie is white');
}