// =========================
// GUITAR HQ MVP
// =========================

// -------------------------
// AFFICHAGE DES SECTIONS
// -------------------------

function hideAllSections() {
    document
        .querySelectorAll(".content-section")
        .forEach(section => {
            section.classList.add("hidden");
        });
}

function showDay(dayId) {
    hideAllSections();

    const section = document.getElementById(dayId);

    if (section) {
        section.classList.remove("hidden");
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function showSection(sectionId) {
    hideAllSections();

    const section = document.getElementById(sectionId);

    if (section) {
        section.classList.remove("hidden");
        section.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// -------------------------
// BOUTON ALÉATOIRE
// -------------------------

const practiceIdeas = [
    "🎸 Blues : Improviser en A mineur pendant 10 minutes.",
    "🎸 Blues : Travailler uniquement le vibrato.",
    "🎸 Blues : Pentatonique en E et notes cibles.",
    "🎵 The Cure : Jouer A Forest avec l'enregistrement.",
    "🎵 The Cure : Travailler les arpèges propres.",
    "🎵 The Cure : Débuter Just Like Heaven.",
    "🔥 The Cult : Jouer She Sells Sanctuary.",
    "🔥 The Cult : Travailler Rain.",
    "🔥 Doom : Composer un riff en C Standard.",
    "🔥 Doom : Composer un riff en B Standard.",
    "🔥 Doom : Créer une intro atmosphérique.",
    "🧠 Manche : Trouver tous les A.",
    "🧠 Manche : Trouver tous les C.",
    "🧠 Manche : Trouver tous les E.",
    "🧠 Manche : Révision corde de Mi.",
    "🧠 Manche : Révision corde de La."
];

function randomPractice() {

    const randomIndex =
        Math.floor(Math.random() * practiceIdeas.length);

    const idea =
        practiceIdeas[randomIndex];

    document
        .getElementById("randomText")
        .textContent = idea;

    document
        .getElementById("randomResult")
        .classList
        .remove("hidden");

    document
        .getElementById("randomResult")
        .scrollIntoView({
            behavior: "smooth"
        });
}

// -------------------------
// SAUVEGARDE CHECKBOX
// -------------------------

function saveCheckboxes() {

    const values = [];

    document
        .querySelectorAll("input[type='checkbox']")
        .forEach(cb => {
            values.push(cb.checked);
        });

    localStorage.setItem(
        "guitarhq_checkboxes",
        JSON.stringify(values)
    );
}

function loadCheckboxes() {

    const data =
        localStorage.getItem(
            "guitarhq_checkboxes"
        );

    if (!data) return;

    const values = JSON.parse(data);

    document
        .querySelectorAll("input[type='checkbox']")
        .forEach((cb, index) => {

            if (values[index] !== undefined) {
                cb.checked = values[index];
            }

        });
}

function attachCheckboxListeners() {

    document
        .querySelectorAll("input[type='checkbox']")
        .forEach(cb => {

            cb.addEventListener(
                "change",
                saveCheckboxes
            );

        });
}

// -------------------------
// RIFF NOTES
// -------------------------

function loadRiffNotes() {

    const notes =
        localStorage.getItem(
            "guitarhq_riffs"
        );

    const textarea =
        document.getElementById(
            "riffNotes"
        );

    if (!textarea) return;

    if (notes) {
        textarea.value = notes;
    }

    textarea.addEventListener(
        "input",
        () => {

            localStorage.setItem(
                "guitarhq_riffs",
                textarea.value
            );

        }
    );
}

// -------------------------
// CHARGEMENT GUITARES
// -------------------------

async function loadGuitars() {

    try {

        const response =
            await fetch(
                "data/guitars.json"
            );

        const guitars =
            await response.json();

        const container =
            document.getElementById(
                "guitars-container"
            );

        if (!container) return;

        guitars.forEach(guitar => {

            const card =
                document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <h3>${guitar.name}</h3>
                <p><strong>Accordage :</strong> ${guitar.tuning}</p>
                <p><strong>Mission :</strong> ${guitar.role}</p>
                <p><strong>Preset :</strong> ${guitar.preset}</p>
            `;

            container.appendChild(card);

        });

    } catch (error) {

        console.log(
            "Impossible de charger guitars.json"
        );

    }
}

// -------------------------
// CHARGEMENT PRESETS
// -------------------------

async function loadPresets() {

    try {

        const response =
            await fetch(
                "data/presets.json"
            );

        const presets =
            await response.json();

        const container =
            document.getElementById(
                "presets-container"
            );

        if (!container) return;

        presets.forEach(preset => {

            const card =
                document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <h3>${preset.name}</h3>
                <p>${preset.description}</p>
                <p><strong>Ampli :</strong> ${preset.amp}</p>
            `;

            container.appendChild(card);

        });

    } catch (error) {

        console.log(
            "Impossible de charger presets.json"
        );

    }
}

// -------------------------
// QUIZ MANCHE SIMPLE
// -------------------------

const fretboardQuestions = [
    "Trouve tous les A",
    "Trouve tous les C",
    "Trouve tous les E",
    "Trouve tous les G",
    "Trouve un F#",
    "Trouve un Bb",
    "Trouve un D",
    "Trouve toutes les fondamentales en A"
];

function getDailyFretboardQuestion() {

    const day =
        new Date().getDate();

    const question =
        fretboardQuestions[
            day % fretboardQuestions.length
        ];

    console.log(
        "Question du jour :",
        question
    );
}

// -------------------------
// PROGRESSION
// -------------------------

function calculateProgress() {

    const checkboxes =
        document.querySelectorAll(
            "input[type='checkbox']"
        );

    let checked = 0;

    checkboxes.forEach(cb => {

        if (cb.checked) {
            checked++;
        }

    });

    const total =
        checkboxes.length;

    const percent =
        Math.round(
            (checked / total) * 100
        );

    console.log(
        `Progression : ${percent}%`
    );
}

// -------------------------
// INITIALISATION
// -------------------------

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadCheckboxes();

        attachCheckboxListeners();

        loadRiffNotes();

        loadGuitars();

        loadPresets();

        getDailyFretboardQuestion();

        calculateProgress();

    }
);

