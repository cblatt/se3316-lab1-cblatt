// creating an array of the pokemon in the unordered list
var pokeList = document.getElementById('pokemon').childNodes;
var pokeArray = [];
for(var i=1; i<41; i+=2){
    var num = pokeList[i];
    pokeArray.push(num);
}


// array to hold the pokemon names
const pokeName = ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 
                'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate'];

// Array to hold the pokemon numbers
const pokeNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Array to hold the pokemon generation
const pokeGen = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// Array to hold the pokemon region
const pokeReg = ['Wild', 'Wild', 'Wild', 'Wild', 'Wild', 'Wild', 'Wild', 'Wild', 'Wild', 'Wild', 'Wild', 'Wild', 'Wild', 'Wild', 'Wild', 'Wild', 'Wild', 'Wild', 'Wild', 'Wild'];

// Array to hold the pokemon rarity
const pokeRar = [4, 5, 6, 4, 5, 6, 4, 5, 6, 1, 3, 4, 1, 3, 4, 1, 3, 4, 1, 4];

// search for pokemon by number
var numText = document.getElementById('pNum');
var numBtn = document.getElementById('numBtn');
function numFunc(){
    if(isNaN(numText.value) || numText.value<1 || numText.value>20){
        alert("Invalid input");
    }
    else{
        alert("Name: " + pokeName[numText.value-1] + "\nNumber: " + pokeNum[numText.value-1] + "\nGeneration: " + pokeGen[numText.value-1] + "\nRegion: " + pokeReg[numText.value-1] + "\nRarity: " + pokeRar[numText.value-1]);
    }
}
numBtn.addEventListener('click', numFunc); // submit button event for number textbox
// enter button event for number textbox
numText.addEventListener('keydown', function(event){
    if(event.code == 'Enter'){
        numBtn.click();
    }
}) 


// search for pokemon by name
var nameText = document.getElementById('pName');
var nameBtn = document.getElementById('nameBtn');

console.log(nameText.value);

function nameFunc(){
    if(/^[a-zA-Z]+$/.test(nameText.value)){
        var names = "";
        for(var i=0; i<20; i++){
            if(pokeName[i].includes(nameText.value)){
               names += "Name: " + pokeName[i] + "\nNumber: " + pokeNum[i] + "\nGeneration: " + pokeGen[i] + "\nRegion: " + pokeReg[i] + "\nRarity: " + pokeRar[i] + "\n\n";
            }
        }
        if(names.length === 0){
            alert("No pokemon found");
        }
        else{
            alert(names);
        }
    }
    else{
        alert("Invalid input");
    }
    
    

}
nameBtn.addEventListener('click', nameFunc); // submit button event for name textbox
// enter button event for name textbox
nameText.addEventListener('keydown', function(event){
    if(event.code == 'Enter'){
        nameBtn.click();
    }
})    

// NEED TO IGNORE CASE SENSITIVITY

