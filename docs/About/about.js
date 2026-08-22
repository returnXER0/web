const cards = document.querySelector(".cards");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

let currentCard = 0;

nextBtn.addEventListener("click", () => {
    if (currentCard < 3) {
        currentCard++;

        cards.style.transform = `translateX(-${currentCard * 100}%)`;
    }
});

prevBtn.addEventListener("click", () => {
    if (currentCard > 0) {
        currentCard--;

        cards.style.transform = `translateX(-${currentCard * 100}%)`;
    }
});
