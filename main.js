// TODO: on left click, grey out / light up character
// TODO: name entry page -> random character choice -> main screen

/* Characters: Rinaldo Pumpkin Sara Grant Sypha Alucard Lisa Hector Julia Saint Germain Maxim Maria Tera Iris Annette Nathan Hugh Morris Cornell Reinhardt Carrie Henry Shanoa Albus Quincy John Eric Jonathan Charlotte Stella Loretta Soma Mina Yoko Hammer Arikado Kid Dracula Aeon Joachim Walter Death Mathias Dracula Isaac Carmilla Olrox Galamoth Shaft Gilles de Rais Actrise Malus Barlowe Elizabeth Brauner Graham Celia Dmitrii Dario Spear Knight Skeleton Biker Creaking Skull Talos Legion Balore Getsu Fuma Old Axe Armor Master Librarian HoD Merchant Vincent Gabriel */
const CHARS = Object.freeze([
    "Leon Belmont", "Sonia Belmont", "Trevor Belmont", "Christopher Belmont", "Soleiyu Belmont", "Desmond Belmont", "Simon Belmont", "Juste Belmont", "Richter Belmont", "Julius Belmont", "Kokoro Belmont", "Sepia Belmont"

])


/* On load, randomly select player's character. */
window.addEventListener("load", () => {
    let randChar = CHARS[Math.floor(Math.random() * CHARS.length)]

    document.getElementById("player-char").textContent = randChar;
});

/* Make character images clickable, and toggle between 
colour and greyscale (or brightness, might change this...) */
document.getElementById("char-imgs").addEventListener("click", function(event) {
  if (event.target.tagName === "IMG") {
    if (event.target.style.filter === "grayscale(100%)") {
      event.target.style.filter = "none";
    } else {
      event.target.style.filter = "grayscale(100%)";
    }
  }
});