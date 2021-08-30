// Keep track of all asked questions and their answers
const results = [];
const answers = [];

/*----- cached element references -----*/
const form = document.querySelector('form');
const input = document.querySelector('input');
const qNumber = document.querySelector('h3');
const question = document.querySelector('h5');
const section = document.querySelector('section');
// const play = document.getElementById('play');

/*----- event listeners -----*/


/*----- functions -----*/
/*----- API -----*/

let num = 1;

form.addEventListener('submit', (event) => {
	event.preventDefault();
	// console.log(event);
	const url = 'https://restcountries.eu/rest/v2/all';
	fetch(url)
    .then((res) => res.json())
    .then((res) => {
        let country = Math.floor(Math.random() * 250);
        qNumber.innerText = `Question ${num+=1}`;
            question.innerText = `What region is ${res[country].name} located?`;
                if (num < 11){
			        question.innerText = `What region is ${res[country].name} located?`;
                    let newDict = {[res[country].name]:res[country].region};
                    results.push(newDict);
                    answers.push(input.value);
                    console.log(results);
                    console.log(answers);
                    input.value = '';
                } else {
                    document.body.classList.add('game-over');
                    section.classList.add('game-over');
                    let score = 0;
                    for (let i of answers) {
                        if (answers[i] === Object.values(results[i])) {
                            score++;
                        }
                    }
                    console.log(score);       
                }
            })
        })
//                     let newDiv = document.createElement('div');
// 					let button = document.createElement('button');

//                     newDiv.classList.add('div');
//                     countriesLi.append.innerText(Object.keys(results));
//                     answers.forEach(element => {
//                         regionsLi.append.innerText(element);
//                     }); 
                        
        
// 		}
// });
// console.log(answers);
// complaints.innerHTML = ''

    //     res.forEach((complaint) => {
    //         let li = document.createElement('li')
    //         let span = document.createElement('span')
    //         let button = document.createElement('button')
    //         let p = document.createElement('p')
    //         let div = document.createElement('div')
