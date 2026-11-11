
// ====================================
// GUITAR HQ
// APP.JS
// BLOC 1/3
// ====================================

let exercisesData = null;

// ====================================
// NAVIGATION
// ====================================

function hideAllSections() {

    document
        .querySelectorAll(".content-section")
        .forEach(section => {

            section.classList.add("hidden");

        });

}

function showDay(dayId) {

    hideAllSections();

    const section =
        document.getElementById(dayId);

    if (!section) return;

    section.classList.remove(
        "hidden"
    );

    section.scrollIntoView({
        behavior: "smooth"
    });

}

function showSection(sectionId) {

    hideAllSections();

    const section =
        document.getElementById(sectionId);

    if (!section) return;

    section.classList.remove(
        "hidden"
    );

    section.scrollIntoView({
        behavior: "smooth"
    });

}

// ====================================
// CHECKBOXES
// ====================================

function saveCheckboxes() {

    const values = [];

    document
        .querySelectorAll(
            "input[type='checkbox']"
        )
        .forEach(cb => {

            values.push(
                cb.checked
            );

        });

    localStorage.setItem(
        "guitarhq_checkboxes",
        JSON.stringify(values)
    );

    calculateProgress();

}

function loadCheckboxes() {

    const data =
        localStorage.getItem(
            "guitarhq_checkboxes"
        );

    if (!data) return;

    const values =
        JSON.parse(data);

    document
        .querySelectorAll(
            "input[type='checkbox']"
        )
        .forEach((cb, index) => {

            if (
                values[index] !==
                undefined
            ) {

                cb.checked =
                    values[index];

            }

        });

}

function attachCheckboxListeners() {

    document
        .querySelectorAll(
            "input[type='checkbox']"
        )
        .forEach(cb => {

            cb.addEventListener(
                "change",
                saveCheckboxes
            );

        });

}

// ====================================
// PROGRESSION
// ====================================

function calculateProgress() {

    const checkboxes =
        document.querySelectorAll(
            "input[type='checkbox']"
        );

    let completed = 0;

    checkboxes.forEach(cb => {

        if (cb.checked) {

            completed++;

        }

    });

    const total =
        checkboxes.length;

    const percent =
        total > 0
            ? Math.round(
                (completed / total) *
                100
            )
            : 0;

    const target =
        document.getElementById(
            "progressText"
        );

    if (target) {

        target.textContent =
            `${percent}% complété`;

    }

}

// ====================================
// RIFF NOTES
// ====================================

function loadRiffNotes() {

    const textarea =
        document.getElementById(
            "riffNotes"
        );

    if (!textarea) return;

    const saved =
        localStorage.getItem(
            "guitarhq_riffs"
        );

    if (saved) {

        textarea.value =
            saved;

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

// ====================================
// BLOC 2/3
// CHARGEMENT JSON
// ====================================

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

        container.innerHTML = "";

        guitars.forEach(guitar => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "card";

            card.innerHTML = `

                <h3>
                    ${guitar.name}
                </h3>

                <p>
                    <strong>Accordage :</strong>
                    ${guitar.tuning}
                </p>

                <p>
                    <strong>Mission :</strong>
                    ${guitar.role}
                </p>

                <p>
                    <strong>Preset :</strong>
                    ${guitar.preset}
                </p>

                <p>
                    <strong>Priorité :</strong>
                    ${guitar.priority}
                </p>

            `;

            container.appendChild(
                card
            );

        });

    }
    catch(error) {

        console.error(
            "Erreur guitars.json",
            error
        );

    }

}

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

        container.innerHTML = "";

        presets.forEach(preset => {

            const card =
                document.createElement(
                    "div"
                );

            card.className =
                "card";

            card.innerHTML = `

                <h3>
                    ${preset.name}
                </h3>

                <p>
                    ${preset.description}
                </p>

                <p>
                    <strong>Ampli :</strong>
                    ${preset.amp}
                </p>

                <p>
                    <strong>Gain :</strong>
                    ${preset.gain}
                </p>

                <p>
                    <strong>EQ :</strong>

                    B:${preset.bass}

                    M:${preset.mid}

                    T:${preset.treble}
                </p>

                <p>
                    <strong>Effets :</strong>

                    ${preset.effects.join(", ")}
                </p>

            `;

            container.appendChild(
                card
            );

        });

    }
    catch(error) {

        console.error(
            "Erreur presets.json",
            error
        );

    }

}

async function loadExercises() {

    try {

        const response =
            await fetch(
                "data/exercises.json"
            );

        exercisesData =
            await response.json();

        loadSongs();

        loadGoals();

        loadFretboardProgram();

        generateFretboardQuiz();

    }
    catch(error) {

        console.error(
            "Erreur exercises.json",
            error
        );

    }

}

// ====================================
// BLOC 3/3
// EXERCICES
// ====================================

function loadSongs() {

    const container =
        document.getElementById(
            "songs-container"
        );

    if (
        !container ||
        !exercisesData
    ) return;

    container.innerHTML = "";

    exercisesData.songs.forEach(song => {

        const card =
            document.createElement(
                "div"
            );

        card.className =
            "card";

        card.innerHTML = `

            <h3>${song.name}</h3>

            <p>${song.artist}</p>

            <p>
                <strong>Statut :</strong>
                ${song.status}
            </p>

            <p>
                <strong>Phase :</strong>
                ${song.phase}
            </p>

        `;

        container.appendChild(
            card
        );

    });

}

function loadGoals() {

    const container =
        document.getElementById(
            "goals-container"
        );

    if (
        !container ||
        !exercisesData
    ) return;

    container.innerHTML = "";

    exercisesData.weeklyGoals.forEach(goal => {

        const card =
            document.createElement(
                "div"
            );

        card.className =
            "card";

        let html =
            `<h3>Semaine ${goal.week}</h3><ul>`;

        goal.goals.forEach(item => {

            html +=
                `<li>${item}</li>`;

        });

        html += "</ul>";

        card.innerHTML =
            html;

        container.appendChild(
            card
        );

    });

}

function loadFretboardProgram() {

    const container =
        document.getElementById(
            "fretboard-container"
        );

    if (
        !container ||
        !exercisesData
    ) return;

    container.innerHTML = "";

    const weeks = [

        ...exercisesData.fretboardFocus.weeks1to4,

        ...exercisesData.fretboardFocus.weeks5to8,

        ...exercisesData.fretboardFocus.weeks9to12

    ];

    weeks.forEach(item => {

        const card =
            document.createElement(
                "div"
            );

        card.className =
            "card";

        card.innerHTML = `

            <h3>
                Semaine ${item.week}
            </h3>

            <p>
                ${item.focus}
            </p>

        `;

        container.appendChild(
            card
        );

    });

}

function generateFretboardQuiz() {

    if (!exercisesData) return;

    const pool = [];

    exercisesData.randomIdeas.forEach(item => {

        const lower =
            item.toLowerCase();

        if (

            lower.includes("note") ||

            lower.includes("octave") ||

            lower.includes("quinte") ||

            lower.includes("tierce") ||

            lower.includes("fondamentale")

        ) {

            pool.push(item);

        }

    });

    if (pool.length === 0) {

        pool.push(
            "Trouve tous les A",
            "Trouve tous les C",
            "Trouve tous les E",
            "Trouve tous les G"
        );

    }

    const question =
        pool[
            Math.floor(
                Math.random() *
                pool.length
            )
        ];

    const target =
        document.getElementById(
            "quizQuestion"
        );

    if (target) {

        target.textContent =
            question;

    }

}

function randomPractice() {

    if (
        !exercisesData ||
        !exercisesData.randomIdeas
    ) return;

    const ideas =
        exercisesData.randomIdeas;

    const idea =
        ideas[
            Math.floor(
                Math.random() *
                ideas.length
            )
        ];

    document
        .getElementById(
            "randomText"
        )
        .textContent =
            idea;

    document
        .getElementById(
            "randomResult"
        )
        .classList
        .remove("hidden");

}

document.addEventListener(
    "DOMContentLoaded",
    async () => {

        loadCheckboxes();

        attachCheckboxListeners();

        loadRiffNotes();

        await loadGuitars();

        await loadPresets();

        await loadExercises();

        calculateProgress();

        console.log(
            "🎸 Guitar HQ chargé"
        );

    }
);
