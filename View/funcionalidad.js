function getRandomEmoji() {
    const emojis = ["⭐", "🎄", "🎅", "🎁"];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

function fillEmojiGrid() {
    const grid = document.getElementById("emojiGrid");
    grid.innerHTML = "";

    for (let i = 0; i < 4; i++) {
        const row = grid.insertRow(i);
        for (let j = 0; j < 4; j++) {
            const cell = row.insertCell(j);
            cell.classList.add("text-center");
            cell.textContent = getRandomEmoji();
        }
    }
}

function startGame(emoji) {
    const guessCount = parseInt(prompt("Ingrese la cantidad de veces que cree que aparece el emoji"), 10);

    document.getElementById("selectedEmoji").value = emoji;
    document.getElementById("guessCount").value = guessCount;
    document.getElementById("foundCount").value = 0; // Inicializar encontrados en 0
    document.getElementById("result").value = "";
    const randomEmoji = getRandomEmoji();
    document.getElementById("emojiDisplay").textContent = `Emoji aleatorio: ${randomEmoji}`;
    fillEmojiGrid();

    // Actualizar los valores directamente en la interfaz
    document.getElementById("foundCountDisplay").textContent = 0; // Inicializar visualmente encontrados en 0
    document.getElementById("resultDisplay").textContent = "";

    // Devolver los valores
    return {
        guessCount: guessCount,
        foundCount: 0,
        result: "",
        randomEmoji: randomEmoji
    };
}

function checkGuess() {
    const selectedEmoji = document.getElementById("selectedEmoji").value;
    const guessCount = parseInt(document.getElementById("guessCount").value, 10);

    let count = 0;
    const grid = document.getElementById("emojiGrid");

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const cell = grid.rows[i].cells[j];
            if (cell.textContent === selectedEmoji) {
                count++;
            }
        }
    }

    // Actualizar los valores directamente en la interfaz
    document.getElementById("foundCount").value = count;
    document.getElementById("result").value = count === guessCount ? "¡Correcto!" : "Incorrecto";

    // Actualizar visualmente los valores encontrados y resultado
    document.getElementById("foundCountDisplay").textContent = count;
    document.getElementById("resultDisplay").textContent = count === guessCount ? "¡Correcto!" : "Incorrecto";

    // Evitar que el formulario se envíe
    return false;
}

function resetGame() {
    document.getElementById("selectedEmoji").value = "";
    document.getElementById("guessCount").value = "";
    document.getElementById("foundCount").value = "";
    document.getElementById("result").value = "";
    document.getElementById("emojiDisplay").textContent = "?";
    fillEmojiGrid();
}