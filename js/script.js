const imageArray = [
    {
        name: "ReactJs",
        image:
            "https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-512.png",
    },
    {
        name: "HTML",
        image:
            "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png",
    },
    {
        name: "CSS",
        image:
            "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png",
    },
    {
        name: "NodeJs",
        image:
            "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-512.png",
    },
    {
        name: "Js",
        image:
            "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/187_Js_logo_logos-512.png",
    },
    {
        name: "Angular",
        image: "https://cdn3.iconfinder.com/data/icons/logos-3/250/angular-512.png",
    },
];

const parentDiv = document.querySelector("#card-section");

const combinedArray = imageArray.concat(imageArray);

const randomGameCard = Array.from(combinedArray).sort(
    () => 0.5 - Math.random()
);

let clickCount = 0;
let firstCard = "";
let secondCard = "";

const matchedCard = () => {
    let selectedCard = document.querySelectorAll('.card-selected');

    selectedCard.forEach((event) => {
        event.classList.add('card-matched')
        console.log(event.classList);
    })
}

const resetGame = () => {
    clickCount = 0;
    firstCard = "";
    secondCard = "";
    let selectedCard = document.querySelectorAll('.card-selected');

    selectedCard.forEach((event) => {
        event.classList.remove('card-selected')
    })
}

parentDiv.addEventListener("click", (event) => {
    clickCount++;

    let currentCard = event.target;
    if (currentCard.id === "card-section") {
        return false;
    }
    if (clickCount < 3) {
        if (clickCount === 1) {
            firstCard = currentCard.parentNode.dataset.name;
            currentCard.parentNode.classList.add("card-selected");
        } else {
            secondCard = currentCard.parentNode.dataset.name;
            currentCard.parentNode.classList.add("card-selected");
        }

        if (firstCard !== "" && secondCard !== "") {
            if (firstCard === secondCard) {
                // currentCard.classList.add("card-matched");
                setTimeout(() => {
                    matchedCard();
                    resetGame();
                }, 1000)

            } else {
                setTimeout(() => {
                    resetGame();

                }, 1000)

            }
        }
    }
});

for (let i = 0; i < randomGameCard.length; i++) {
    const childDiv = document.createElement("div");
    childDiv.classList.add("card");
    childDiv.dataset.name = randomGameCard[i].name;
    // childDiv.style.backgroundImage = `url(${randomGameCard[i].image})`;

    const frontDiv = document.createElement("div");
    frontDiv.classList.add("card-front");

    const backDiv = document.createElement("div");
    backDiv.classList.add("card-back");
    backDiv.style.backgroundImage = `url(${randomGameCard[i].image})`;

    parentDiv.appendChild(childDiv);
    childDiv.appendChild(frontDiv)
    childDiv.appendChild(backDiv)
}
