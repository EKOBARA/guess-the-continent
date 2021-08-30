// -------- The JS Code to display the HOW TO PLAY Modal --------

// Get Elements 
const open = document.getElementById('openModal');
const modal = document.getElementById('modal');
const close = document.getElementById('close');


//Event Listeners
open.addEventListener('click', () => {
	modal.style.display = 'block';
});

close.addEventListener('click', () => {
	modal.style.display = 'none'
});

// setTimeout(openModal, 5000);
