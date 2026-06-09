function scrollToSection(id){
    document
    .getElementById(id)
    .scrollIntoView({
        behavior:'smooth'
    });
}

const professions = [
    "Artist 🎨",
    "Singer 🎤",
    "Lyricist ✍️",
    "Player ⚽",
    "Poet 🖋️",
    "Creator 🚀"
];

let index = 0;

const text =
document.getElementById("changing-text");

setInterval(() => {

    text.style.opacity = 0;

    setTimeout(() => {

        index =
        (index + 1)
        % professions.length;

        text.textContent =
        professions[index];

        text.style.opacity = 1;

    },500);

},2000);

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

    e.preventDefault();

    document.getElementById("message")
    .innerHTML =
    "Thank you for reaching out! ✨";

    this.reset();

});