const characters = [
    {
      id: 1,
      name: "Mr. Cute",
      image:"https://th.bing.com/th/id/OIP.0BedXR-WWm4p_o2xZfHS5wHaEK?pid=ImgDet&rs=1",
      votes: 0,
    },
    {
        "id": 2,
        "name": "Mx. Monkey",
        "image":"https://th.bing.com/th/id/OIP._lYxAOn-jTyXGKIW0CrDagHaFF?pid=ImgDet&rs=1" ,
        "votes": 0
      },
      {
        "id": 3,
        "name": "Ms. Zebra",
        "image": "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
        "votes": 0
      },
      {
        "id": 4,
        "name": "Dr. Lion",
        "image": "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
        "votes": 0
      },
      {
        "id": 5,
        "name": "Mme. Panda",
        "image": "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
        "votes": 0
      }
    ];
  
  // Variables to keep track of the selected character and elements
  let selectedCharacter = null;
  const characterList = document.getElementById("animal-list");
  const characterDetails = document.getElementById("animal-details");
  
  // Function to display the details of a character
  function showCharacterDetails(character) {
    characterDetails.innerHTML = `
      <h2>Animal Details</h2>
      <img src="${character.image}" alt="${character.name}">
      <h3>${character.name}</h3>
      <p>Votes: <span id="votes-count">${character.votes}</span></p>
      <button id="vote-button">Vote for ${character.name}</button>
    `;
  
    // Event listener for voting
    const voteButton = document.getElementById("vote-button");
    voteButton.addEventListener("click", () => {
      character.votes += 1;
      const votesCount = document.getElementById("votes-count");
      votesCount.textContent = character.votes;
    });
  }
  
  // Function to populate the animal list
  function populateAnimalList(characters) {
    characterList.innerHTML = "";
    characters.forEach((character) => {
      const li = document.createElement("li");
      li.textContent = character.name;
      li.dataset.id = character.id;
      characterList.appendChild(li);
  
      // Event listener for clicking on a character in the list
      li.addEventListener("click", () => {
        selectedCharacter = character;
        showCharacterDetails(selectedCharacter);
      });
    });
  }
  
  // Initial display (all characters in the list)
  populateAnimalList(characters);
  
  // Display details for the first character initially
  if (characters.length > 0) {
    selectedCharacter = characters[0];
    showCharacterDetails(selectedCharacter);
  }