const textEditElement = document.querySelector(".textBoxId")
const resultDisplayElement = document.querySelector(".whatthefeck")

textEditElement.addEventListener("keypress", (e) => {
    console.log(`as ${textEditElement.textContent} `);
    resultDisplayElement.textContent = `You said ${textEditElement.textContent}`;
});
