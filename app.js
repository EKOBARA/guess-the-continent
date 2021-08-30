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

play.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(event);
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
    .then(res => res.json())
    .then(res => {
        
        let country = Math.floor(Math.random()*250);
        // console.log(res[country]);
        qNumber.innerText = `On what continent is ${res[country].name} located?`;
        results[res[country].name] = res[country].region;
        qNumber.innerText = `Question ${num}`;
        question.innerText = `On what continent is ${res[country].name} located?`;
        play.style.display = 'none';
        // console.log(results)
    });
});
       
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
                if (num <= 10){
			        question.innerText = `On what continent is ${res[country].name} located?`;
                    results[res[country].name] = res[country].region;
                    answers.push(input.value);
                    console.log(results);
                    console.log(answers);
                    input.value = '';
                } else {
                    
                    let li = document.createElement('li');
                    let span = document.createElement('span');
					let button = document.createElement('button');


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
