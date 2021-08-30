// Keep track of all asked questions and their answers
const results = [];
const answers = [];

/*----- cached element references -----*/
const form = document.querySelector('form');
const input = document.querySelector('input');
const qNumber = document.querySelector('h3');
const question = document.querySelector('h5');
const section = document.querySelector('section');
const div = document.querySelector('div');

// const play = document.getElementById('play');

/*----- event listeners -----*/


/*----- functions -----*/
/*----- API -----*/
const url = 'https://restcountries.eu/rest/v2/all';

let num = 0;
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

start();

form.addEventListener('submit', (event) => {
	event.preventDefault();
	// console.log(event);
	fetch(url)
    .then((res) => res.json())
    .then((res) => {
        if (num != 10){
                let country = Math.floor(Math.random() * 250);
                qNumber.innerText = `Question ${num+=1}`;
                question.innerText = `What region is ${res[country].name} located?`;
            
                results.push(res[country].region);
                answers.push(input.value);
                console.log(results);
                console.log(answers);
                input.value = '';
        } 
        else {    
            answers.push(input.value);
	        div.style.display = 'none';
	        section.style.display = 'block';
	        let score = 0;
	        for (let i = 0; i < results.length; i++) {
                if (results[i] === answers[i + 1]) {
                    score++;
		        }
	        }
            
	        let restart = document.createElement('button');
	        let showScore = document.createElement('h1');
            
	        section.appendChild(showScore);
	        section.appendChild(restart);
            
	        showScore.innerText = `Your total points: ${score}/${num}!`;
	        restart.innerHTML = "<a href='index.html'>Restart</a>";
            
            console.log(score);
        }
            
    });
});


//                     newDiv.classList.add('div');
//                     countriesLi.append.innerText(Object.keys(results));
//                     answers.forEach(element => {
//                         regionsLi.append.innerText(element);
//                     }); 
                        
        
// 		}
// });
// // console.log(answers);
// // complaints.innerHTML = ''

//     //     res.forEach((complaint) => {
//     //         let li = document.createElement('li')
//     //         let span = document.createElement('span')
//     //         let button = document.createElement('button')
//     //         let p = document.createElement('p')
//     //         let div = document.createElement('div')
