
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

// search for pokemon by number (used for submit button)
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

// search for pokemon by name (used for submit button)
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

// function to clear list after every key press
function clearList(){
    while(pokemonList.firstChild){
        pokemonList.removeChild(pokemonList.firstChild);
    }
}

var pokemonList = document.getElementById("pokemon"); // variable to hold pokemon list

// dynamically change list for name text box
function numFunc2(){
    for(var i=0; i<20; i++){
        if(pokeNum[i] == numText.value){
                    
            // adding image to list
            var image = document.createElement('img');
            image.src = 'pokemon/' + (i+1) + '.png';
            image.style.width = '60px';
            image.style.height = '60px';
            pokemonList.appendChild(image);
                    
            // adding name to list
            var nameNode = document.createTextNode("Name: " + pokeName[i]);
            pokemonList.appendChild(nameNode);
                    
            // adding number to list
            var numNode = document.createTextNode(", Number: " + pokeNum[i]);
            pokemonList.appendChild(numNode);
                    
            // adding generation to list
            var genNode = document.createTextNode(", Generation: " + pokeGen[i]);
            pokemonList.appendChild(genNode);
    
            // adding region to list
            var regNode = document.createTextNode(", Region: " + pokeReg[i]);
            pokemonList.appendChild(regNode);
    
            // adding rarity to list
            var rarNode = document.createTextNode(", Rarity: " + pokeRar[i]);
            pokemonList.appendChild(rarNode); 

            // adding line break to list
            var lineBreak = document.createElement("br");
            pokemonList.appendChild(lineBreak);
        }
    }  
}

// event listeners for number text box
numText.addEventListener('keyup', clearList); // clear the list on each keypress
numText.addEventListener('keyup', numFunc2); // search for pokemon on each keypress

// dynamically change list for name text box
function nameFunc2(){
    for(var i=0; i<20; i++){
        if(/^[a-zA-Z]+$/.test(nameText.value)){
            if(pokeName[i].toLowerCase().includes(nameText.value.toLowerCase())){

                var lineBreak = document.createElement("br"); // line break element
                
                // adding image to list
                var image = document.createElement('img');
                image.src = 'pokemon/' + (i+1) + '.png';
                pokemonList.appendChild(image);
                
                // adding name to list
                var nameNode = document.createTextNode("Name: " + pokeName[i]);
                pokemonList.appendChild(nameNode);
                
                // adding number to list
                var numNode = document.createTextNode(", Number: " + pokeNum[i]);
                pokemonList.appendChild(numNode);
                
                // adding generation to list
                var genNode = document.createTextNode(", Generation: " + pokeGen[i]);
                pokemonList.appendChild(genNode);

                // adding region to list
                var regNode = document.createTextNode(", Region: " + pokeReg[i]);
                pokemonList.appendChild(regNode);

                // adding rarity to list
                var rarNode = document.createTextNode(", Rarity: " + pokeRar[i]);
                pokemonList.appendChild(rarNode); 
                pokemonList.appendChild(lineBreak);
                

                
            }
        }
        }
    }

// event listeners for name text box
nameText.addEventListener('keyup', clearList); // clear the list on each keypress
nameText.addEventListener('keyup', nameFunc2); // search for pokemon on each keypress





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
