console.log("what's up gamer");
async function main() {
    window.addEventListener("focus", _ => {
        try {
            const a = document.querySelector(`[role="textbox"]`);
            a.addEventListener("keypress", _ => { text_checker(a); });
        } catch (error) {
            console.log(`MULTI_TOOL [ERROR] ${e}`)
        }
    });
}

const banned_topics = ["speedrunner"];

function text_checker(a) {
    console.log(`MULTI_TOOL [LOG]: ${a.textContent} `);
    for (const banned_word of banned_topics) {
        if (a.textContent.toLowerCase().indexOf(banned_word) > -1) {
            console.log(`you are about to open a can of worms w ${banned_word}`);
        }
    }
}

main();