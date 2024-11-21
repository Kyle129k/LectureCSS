let characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna']

for (let i = 0; i < characters.length; i++) {
  console.log(characters[i]);}


let firstname = 'Harry'
let house = 'Gryffindor'
let greeting = `Welcome, ${firstname} of ${house}!`;
console.log(greeting);

let character = 'Hermione'
console.log(character.toUpperCase(character));
console.log(character.toLowerCase(character));

let spell = 'Expelliarmus'
console.log(spell.trim(spell));

let quote = 'I solemnly swear that I am up to no good'
console.log(quote.slice(11, 17));

let firstName = 'Ron'
let lastName = 'Weasely'

let combined = firstName.concat(" ", lastName);
console.log(combined);

let sentence = 'Draco is a good wizard'
let replacedStr = sentence.replace("good","bad");
console.log(replacedStr);

let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw']
houses.push ('Slytherin');
houses.pop ()
console.log(houses)

let spells = ['Alohomora', 'Lumos', 'Nox']
spells.unshift('Accio');
spells.shift()
console.log(spells)

let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid']
let a = professors.slice(1,2);
let b = professors.slice(2,3);
console.log(a.concat(b))

let students = ['Neville', 'Seamus', 'Dean', 'Parvati']
students.splice(1,2);
console.log(students)

let phrase = ['Mischief Managed']
phrase.trim
phrase.toLowerCase;
phrase.concat('Harry')
console.log(phrase)

let wizards = ['Harry', 'Hermione', 'Ron']
wizards.push('Luna','Draco') 
console.log(wizards)

let message = ['Welcome to Hogwarts School of Witchcraft and Wizardry']
console.log(message.slice(11, 15));