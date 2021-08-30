// Keep track of all asked questions and their answers
const results = {};


/*----- cached element references -----*/
let form = document.querySelector('form');
let qNumber = document.querySelector('h3');
let question = document.querySelector('h5');
let play = document.getElementById('play');

/*----- event listeners -----*/


/*----- functions -----*/
/*----- API -----*/

let num = 1;

play.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(event);
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
    .then(res => res.json())
    .then(res => {
        
        let country = Math.floor(Math.random()*250);
        console.log(res[country]);
        qNumber.innerText = `On what continent is ${res[country].name} located?`;
        results[res[country].name] = res[country].region;
        qNumber.innerText = `Question ${num}`;
        question.innerText = `On what continent is ${res[country].name} located?`;
        play.style.display = 'none';
        console.log(results)
    });
});
       
form.addEventListener('submit', (event) => {
	event.preventDefault();
	// console.log(event);
    qNumber.innerText = `Question ${num++}`;
	const url = 'https://restcountries.eu/rest/v2/all';
	fetch(url)
		.then((res) => res.json())
		.then((res) => {
            let country = Math.floor(Math.random() * 250);
			console.log(res[country]);
			question.innerText = `On what continent is ${res[country].name} located?`;
            results[res[country].name] = res[country].region;
			
		});
});
// complaints.innerHTML = ''

    //     res.forEach((complaint) => {
    //         let li = document.createElement('li')
    //         let span = document.createElement('span')
    //         let button = document.createElement('button')
    //         let p = document.createElement('p')
    //         let div = document.createElement('div')
