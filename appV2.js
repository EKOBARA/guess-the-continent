// Keep track of all asked questions and their answers
const correct = []; // Correct answers
const player = []; // Player answers
const countries = []; // Given Countries

/*----- cached element references -----*/
const form = document.querySelector('form');
const input = document.querySelector('input');
const qNumber = document.querySelector('h3');
const question = document.querySelector('h5');
const section = document.querySelector('section');
const div = document.querySelector('div');
const results = document.getElementById('results');
const listCountries = document.querySelector('#countries');
const listCorrect = document.getElementById('correct');
const listPlayer = document.getElementById('player');


/*----- API -----*/
const url = 'https://restcountries.eu/rest/v2/all';

/*----- functions -----*/

let num = 0; // Count number of questions
// Begins game with first question 
function start(){
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
        let country = Math.floor(Math.random() * 250);
        qNumber.innerText = `Question ${num+=1}`;
        question.innerText = `In what region is ${res[country].name} located?`;
        correct.push(res[country].region);
		player.push(input.value);
        countries.push(res[country].name);
    })
}
// Loads game once the webpage loads
start();

// Listens for player input then prompts following questions
form.addEventListener('submit', (event) => {
	event.preventDefault();
	fetch(url)
    .then((res) => res.json())
    .then((res) => {
        // Max 10 questions
        if (num != 10){
            // Selects random cpuntry
            let country = Math.floor(Math.random() * 250); 
                qNumber.innerText = `Question ${num+=1}`;
                question.innerText = `In what region is ${res[country].name} located?`;

                // logs correct answer and player answer
                correct.push(res[country].region);
                player.push(input.value);
                countries.push(res[country].name);
                
                input.value = ''; // Clears input field
        } 
        else {    // when max questions are given
            player.push(input.value);
	        div.style.display = 'none'; // Clears browser
	        section.style.display = 'flex';

            // Compares player answer to correct answers 
	        let score = 0;
	        for (let i = 0; i < correct.length; i++) {
                if (correct[i] === player[i + 1]) {
                    score++;
		        }
	        }
            // Elemets for 'Restart' button and score
	        let restart = document.createElement('button');
	        let showScore = document.createElement('h1');
            section.appendChild(showScore);
            
            for (let i = 0; i < countries.length; i++) {
                let li = document.createElement('p');
                li.classList = 'names';
                li.innerText = countries[i];
                listCountries.appendChild(li)
            }
            for (let i = 0; i < correct.length; i++) {
				let li = document.createElement('p');
				li.innerText = correct[i];
                li.classList = 'names';
				listCorrect.appendChild(li);
			}
            for (let i = 0; i < player.length; i++) {
				let li = document.createElement('p');
				li.innerText = player[i];
                li.classList = 'names';
				listPlayer.appendChild(li);
			}

	        section.appendChild(restart);
            // Displays 'Restart' button and player Score
	        showScore.innerText = `${score}/${num}`;
	        restart.innerHTML = "<a href='index.html'>PLAY AGAIN</a>";
            restart.classList = "submit again";
        }
            
    });
});