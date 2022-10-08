
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
var numText = document.getElementById('pNum'); // getting textbox
var numBtn = document.getElementById('numBtn'); // getting button
function numFunc(){
    if(isNaN(numText.value) || numText.value<1 || numText.value>20){ // making sure that the input is a number between 0-20
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
var nameText = document.getElementById('pName'); // getting textbox
var nameBtn = document.getElementById('nameBtn'); // getting btuton

function nameFunc(){
    if(/^[a-zA-Z]+$/.test(nameText.value)){ // making sure input is only a-z and A-Z
        var names = ""; // empty string to hold the pokemon info
        for(var i=0; i<20; i++){ // looping through pokeNames array and checking if the elements include the textbox input
            if(pokeName[i].toLowerCase().includes(nameText.value.toLowerCase())){
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

// add to list
var pokemonList = document.getElementById("pokemon");
function nameFunc2(){
    for(var i=0; i<20; i++){
        if(/^[a-zA-Z]+$/.test(nameText.value)){
            if(pokeName[i].toLowerCase().includes(nameText.value.toLowerCase())){

                var lineBreak = document.createElement("br");
                
                var image = document.createElement('img');
                image.src = 'pokemon/' + (i+1) + '.png';
                pokemonList.appendChild(image);
                
                var nameNode = document.createTextNode("Name: " + pokeName[i]);
                pokemonList.appendChild(nameNode);
                

                var numNode = document.createTextNode(", Number: " + pokeNum[i]);
                pokemonList.appendChild(numNode);
                

                var genNode = document.createTextNode(", Generation: " + pokeGen[i]);
                pokemonList.appendChild(genNode);

                var regNode = document.createTextNode(", Region: " + pokeReg[i]);
                pokemonList.appendChild(regNode);

                var rarNode = document.createTextNode(", Rarity: " + pokeRar[i]);
                pokemonList.appendChild(rarNode); 
                pokemonList.appendChild(lineBreak);
                

                
            }
        }
        }
    }

// function to clear list after every key press
function clearList(){
    while(pokemonList.firstChild){
        pokemonList.removeChild(pokemonList.firstChild);
    }
}
nameText.addEventListener('keyup', clearList);
nameText.addEventListener('keyup', nameFunc2);





// this is how you dynamically check for pokemon with textbox (runs every time you press a key)
//nameText.addEventListener('keyup', nameFunc);

/*
var pokemonList = document.getElementById("pokemon"); // getting the unordered list that we will add pokemon to
function newFunc(){
    if(/^[a-zA-Z]+$/.test(nameText.value)){ // making sure input is only a-z and A-Z
        var names = ""; // empty string to hold the pokemon info
        for(var i=0; i<20; i++){ // looping through pokeNames array and checking if the elements include the textbox input
            if(pokeName[i].toLowerCase().includes(nameText.value.toLowerCase())){
               names += "Name: " + pokeName[i] + "\nNumber: " + pokeNum[i] + "\nGeneration: " + pokeGen[i] + "\nRegion: " + pokeReg[i] + "\nRarity: " + pokeRar[i] + "\n\n";
            }
        }
        if(names.length === 0){
            alert("No pokemon found");
        }
        else{
            var node = document.createElement("li");
            var attribute = document.createAttribute("img");
            attribute.value = "pokemon/19.png"
            node.setAttributeNode(attribute);
            pokemonList.appendChild(node);
        }
    }
    else{
        alert("Invalid input");
    }
}
nameBtn.addEventListener('click', newFunc);
*/
