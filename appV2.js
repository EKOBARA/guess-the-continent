// Keep track of all asked questions and their answers
const results = []; // Correct answers
const answers = []; // Player answers

/*----- cached element references -----*/
const form = document.querySelector('form');
const input = document.querySelector('input');
const qNumber = document.querySelector('h3');
const question = document.querySelector('h5');
const section = document.querySelector('section');
const div = document.querySelector('div');


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
        question.innerText = `What region is ${res[country].name} located?`;
        results.push(res[country].region);
		answers.push(input.value);
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
                question.innerText = `What region is ${res[country].name} located?`;

                // logs correct answer and player answer
                results.push(res[country].region);
                answers.push(input.value);
                // console.log(results);
                // console.log(answers);
                input.value = ''; // Clears input field
        } 
        else {    // when max questions are given
            answers.push(input.value);
	        div.style.display = 'none'; // Clears browser
	        section.style.display = 'block';

            // Compares player answer to correct answers 
	        let score = 0;
	        for (let i = 0; i < results.length; i++) {
                if (results[i] === answers[i + 1]) {
                    score++;
		        }
	        }
            // Elemets for 'Restart' button and score
	        let restart = document.createElement('button');
	        let showScore = document.createElement('h1');
            
	        section.appendChild(showScore);
	        section.appendChild(restart);
            // Displays 'Restart' button and player Score
	        showScore.innerText = `Your total points: ${score}/${num}!`;
	        restart.innerHTML = "<a href='index.html'>Restart</a>";
            
            // console.log(score);
        }
            
    });
});