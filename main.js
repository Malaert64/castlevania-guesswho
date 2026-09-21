// Characters storage structure. Currently 78 in rows of 12 max, may change that.
const CHARS = Object.freeze([
    "Leon Belmont", "Sonia Belmont", "Trevor Belmont", "Christopher Belmont", "Soleiyu Belmont", "Desmond Belmont", "Simon Belmont", "Juste Belmont", "Richter Belmont", "Julius Belmont", "Kokoro Belmont", "Sepia Belmont",
    "Grant Danasty", "Sypha Belnades", "Alucard", "Hector", "Maxim Kischine", "Maria Renard", "Shanoa", "Albus", "Nathan Graves", "Cornell", "Henry Oldrey", "Reinhardt Schneider",
    "Carrie Fernandez", "John Morris", "Eric Lecarde", "Jonathan Morris", "Charlotte Aulin", "Loretta Lecarde", "Stella Lecarde", "Old Axe Armor", "Soma Cruz", "Yoko Belnades", "Kid Dracula", "Aeon", 
    "Rinaldo Gandolfi", "Sara Trantoul", "Lisa", "Lyudmil", "Julia Laforeze", "Saint Germain", "Lydie Erlanger", "Merchant", "Annette", "Master Librarian", "Jacob", "Laura",
    "Hugh Baldwin", "Morris Baldwin", "Charlie Vincent", "Rosa", "Quincy P. Morris", "Vincent Dorin", "Mina Hakuba", "Genya Arikado", "Hammer", "Joachim Armster", "Walter Bernhard", "Death",
    "Mathias Cronqvist", "Dracula Vlad Tepes", "Isaac", "Carmilla", "Count Olrox", "Shaft", "Succubus", "Barlowe", "Actrise", "Gilles de Rais", "Malus", "Elizabeth Bartley", 
    "Brauner", "Graham Jones", "Celia Fortner", "Dmitrii Blinov", "Dario Bossi", "Spear Knight", "Skeleton Biker", "Pumpkin"
])


// On load, randomly select player's character and update text/img.
window.addEventListener("load", () => {
    // Char name for display, and reformatted to match file naming.
    let randChar = CHARS[Math.floor(Math.random() * CHARS.length)]
    let filename = "assets/Char_" + randChar.replace(/[\s.]/g, "") + ".png";
    // Replace text and image via getElementById.
    document.getElementById("player-char").textContent = randChar;
    document.getElementById("player-char-img").src = filename;
    document.getElementById("player-char-img").title = randChar;
    document.getElementById("player-char-img").alt = randChar;

    const charContainer = document.getElementById("char-imgs");

    Object.values(CHARS).forEach(char => {
      const charImg = document.createElement('img');
      charImg.src = "assets/Char_" + char.replace(/[\s.]/g, "") + ".png";
      charImg.alt = char;
      charImg.title = char;
      charContainer.appendChild(charImg);
    });
});

/* Make character images inside the char-imgs div clickable, 
and toggle between colour and greyscale (or brightness, might change this...) */
document.getElementById("char-imgs").addEventListener("click", function(event) {
  if (event.target.tagName === "IMG") {
    // If the img has full greyscale in its filter tag, clear it. 
    if (event.target.style.filter === "grayscale(100%)") {
      event.target.style.filter = "none";
    // Otherwise, add the greyscale.
    } else {
      event.target.style.filter = "grayscale(100%)";
    }
  }
});