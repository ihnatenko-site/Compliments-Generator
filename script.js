let result = document.querySelector('.result');
let start = document.querySelector('.start-btn');

function randomCompliment () {
let animal = [
    'обезьяны',
    'крокодила',
    'бегемота',
    'коровы',
    'осла',
    'коня',
    'бабуина',
    'орангутанга'
]

let animalPart = [
    'морду',
    'жопу',
    'шкуру',
    'сраку'
]

let humanPart = [
    'Твоё лицо',
    'Твоя губа',
    'Твоя кожа',
    'Твой вид',
    'Твоя улыбка'
];


let humanPartRandom = Math.floor(Math.random() * humanPart.length);
let animalRandom = Math.floor(Math.random() * animal.length);
let animalPartRandom = Math.floor(Math.random() * animalPart.length);


let result = (humanPart[humanPartRandom] + ' напоминает ' + animalPart[animalPartRandom] + ' ' + animal[animalRandom]);

return result;
}

start.addEventListener('click', function() {
    let compliment = randomCompliment();
     result.textContent = compliment;
})