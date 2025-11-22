document.addEventListener("DOMContentLoaded", () => {

    let askedName = prompt("Введіть своє ім'я:", "");
    let playerName = askedName?.trim() || "Гість";
    document.getElementById("user").textContent = playerName;

    const btn = document.getElementById("=generate");
    const tryElem = document.getElementById("try");
    const totalElem = document.getElementById("total");
    const slotsElem = document.getElementById("slots");

    let tries = 0;
    const MAX_TRIES = 3;
    let totalWins = 0;

    const reelsList = document.querySelectorAll('.reel');

    const icon_height = 78;
    const num_icons = 9;
    const time_per_icon = 100;

    let indexes = [0, 0, 0];

    const roll = (reel, offset = 0) => {

        const delta = (offset + 2) * num_icons + Math.round(Math.random() * num_icons);

        return new Promise(resolve => {
            const style = getComputedStyle(reel);
            const backgroundPositionY = parseFloat(style["background-position-y"]);
            const target = backgroundPositionY + delta * icon_height;
            const normalized = target % (num_icons * icon_height);

            setTimeout(() => {
                reel.style.transition = `background-position-y ${(8 + delta) * time_per_icon}ms cubic-bezier(.41,-0.01,.63,1.09)`;
                reel.style.backgroundPositionY = `${target}px`;
            }, offset * 150);

            setTimeout(() => {
                reel.style.transition = "none";
                reel.style.backgroundPositionY = `${normalized}px`;

                resolve(delta % num_icons);

            }, (8 + delta) * time_per_icon + offset * 150);
        });
    };

    function spin() {
        if (tries >= MAX_TRIES) return;

        tries++;
        tryElem.textContent = tries;

        btn.disabled = true;

        Promise.all([...reelsList].map((reel, i) => roll(reel, i)))
            .then(deltas => {

                deltas.forEach((delta, i) => {
                    indexes[i] = (indexes[i] + delta) % num_icons;
                });

                // Перевірка виграшних умов
                const a = indexes[0], b = indexes[1], c = indexes[2];

                if (a === b && b === c) {
                    totalWins++;
                    totalElem.textContent = totalWins;

                    slotsElem.classList.add("win2");
                    setTimeout(() => slotsElem.classList.remove("win2"), 1500);
                }

                if (tries < MAX_TRIES) btn.disabled = false;
                else setTimeout(showFinal, 600);
            });
    }

    function showFinal() {
        if (totalWins > 0)
            alert(`Вітаю, ${playerName}!! 🎉`);
        else
            alert(`Гемблінг не удався 😐`);
    }

    btn.addEventListener("click", spin);
});

