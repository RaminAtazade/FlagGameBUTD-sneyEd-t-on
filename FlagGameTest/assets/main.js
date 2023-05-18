
// fetch('https://api.disneyapi.dev/character')
// .then(response => response.json())
// .then(data => {
//     const flagpicElement = document.getElementById('flagpic');
//     const randomIndex = Math.floor(Math.random() * data.length);

//     flagpicElement.src = randomCharacter.imageUrl;
// })

fetch('https://api.disneyapi.dev/character')
.then(response => response.json())
.then(data => {
    const randomCharacter = data.data[Math.floor(Math.random() *data.data.length)];
    document.getElementById('characterpic').src = randomCharacter.imageUrl;
    
    document.getElementById('characterName').textContent = randomCharacter.name;
})

// function kontrolInput() {
//     var yazilan = document.getElementById('oyun-input').value;
//     var karaktersiz = document.getElementById('characterName').textContent;
  
//     if (yazilan === karaktersiz) {
//       alert("Oha hardan bildin");
//     } else {
//       alert("Heyatdida, get oyren gel");
//     }
//   }
function Yoxla() {
    var Yazilan = document.getElementById('oyun-input').value;
    var Karaktersiz = document.getElementById('characterName').textContent;
  
    if (Yazilan === Karaktersiz && Yazilan.length > 0) {
      alert("Oha hardan bildin");
    } else if (Yazilan.length > 0) {
      alert("Heyatdida, get oyren gel");
    }
  }