// Characters storage structure. Currently 78 in rows of 12 max, may change that.
const CHARS = Object.freeze([
    "Leon Belmont", "Sonia Belmont", "Trevor Belmont", "Christopher Belmont", "Soleiyu Belmont", "Desmond Belmont", "Simon Belmont", "Juste Belmont", "Richter Belmont", "Julius Belmont", "Kokoro Belmont", "Sepia Belmont",
    "Grant Danasty", "Sypha Belnades", "Alucard", "Hector", "Maxim Kischine", "Maria Renard", "Shanoa", "Albus", "Nathan Graves", "Cornell", "Reinhardt Schneider", "Carrie Fernandez",
    "Quincy P. Morris", "John Morris", "Eric Lecarde", "Jonathan Morris", "Charlotte Aulin", "Stella Lecarde", "Loretta Lecarde", "Soma Cruz", "Genya Arikado", "Yoko Belnades", "Kid Dracula", "Rinaldo Gandolfi",
    "Sara Trantoul", "Lisa", "Julia Laforeze", "Saint Germain", "Lydie Erlanger", "Merchant", "Annette", "Master Librarian", "Jacob", "Laura", "Hugh Baldwin", "Maurice Baldwin",
    "Charlie Vincent", "Rosa", "Vincent Dorin", "Mina Hakuba", "Hammer", "Aeon", "Joachim Armster", "Walter Bernhard", "Death", "Mathias Cronqvist", "Dracula Vlad Tepes", "Carmilla", 
    "Count Olrox", "Shaft", "Succubus", "Barlowe", "Actrise", "Gilles de Rais", "Malus", "Elizabeth Bartley", "Brauner", "Graham Jones", "Celia Fortner",
    "Dmitrii Blinov", "Dario Bossi", "Spear Knight", "Skeleton Biker"
])


// On load, randomly select player's character and update text/img.
window.addEventListener("load", () => {
    // Char name for display, and reformatted to match file naming.
    let randChar = CHARS[Math.floor(Math.random() * CHARS.length)]
    let filename = "assets/Char_" + randChar.replace(/[\s.]/g, "") + ".png";
    // Replace text and image via getElementById.
    document.getElementById("player-char").textContent = randChar;
    document.getElementById("player-char-img").src = filename;
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