const baseURL = "http://localhost:3000/characters"

const allAnimals = document.querySelector(`#all_animals`);

const eachAnimal = document.querySelector(`#individual_animal`);

fetch("http://localhost:3000/characters")
   .then(response => response.json())
   .then( data => {    
     showAnimals(data);
   })
   .catch(error => console.log(error));

   function showAnimals(data) {
    data.forEach(character => {
      
      const animalbutton = document.createElement(`button`);
      animalbutton.textContent = character.name;
      animalbutton.classList.add(`animal_button`)
      animalbutton.addEventListener(`click` , () => showCharacters(character));
      allAnimals.appendChild(animalbutton);
      });

    }
   
      function showCharacters(character){
        eachAnimal.innnerHTML = `<h1>${character.name}</h1>
                                 <img src="${character.image}" alt="${character.name}">             
                                 <p id="increasevotes"> ${character.votes}</p>
                                 <button class= "votebtn" onclick="incrementVotes()">vote</button>`;
    
    }
    
function incrementVotes(){

  let element = document.getElementById("increasevotes");
  let value = parseInt(element.innnerHTML);
  ++value;
  console.log(value);
} 