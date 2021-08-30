// Keep track of all asked questions and their answers
const results = {};
const answers = [];

/*----- cached element references -----*/
const form = document.querySelector('form');
const input = document.querySelector('input');
const qNumber = document.querySelector('h3');
const question = document.querySelector('h5');
// const play = document.getElementById('play');

/*----- event listeners -----*/


/*----- functions -----*/
/*----- API -----*/

let num = 1;

form.addEventListener('submit', (event) => {
	event.preventDefault();
	// console.log(event);
    qNumber.innerText = `Question ${num+=1}`;
	const url = 'https://restcountries.eu/rest/v2/all';
	fetch(url)
		.then((res) => res.json())
		.then((res) => {
            let country = Math.floor(Math.random() * 250);
			// console.log(res[country]);
            // let go = true;
            // while (go){
                if (num <= 3){
			        question.innerText = `On what continent is ${res[country].name} located?`;
                    results[res[country].name] = res[country].region;
                    answers.push(input.value);
                    console.log(results);
                    console.log(answers);
                    input.value = '';
                } else {

                    let countriesLi = document.createElement('li');
                    let regionsLi = document.createElement('li');
                    let newDiv = document.createElement('div');
					let button = document.createElement('button');

                    newDiv.classList.add('div');
                    countriesLi.append.innerText(Object.keys(results));
                    answers.forEach(element => {
                        regionsLi.append.innerText(element);
                    }); 
                        
                    document.body.display = 'none';

                    
                }
            
		});

});
console.log(answers);
// complaints.innerHTML = ''

    //     res.forEach((complaint) => {
    //         let li = document.createElement('li')
    //         let span = document.createElement('span')
    //         let button = document.createElement('button')
    //         let p = document.createElement('p')
    //         let div = document.createElement('div')
