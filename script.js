/* =========================
   CHANGE CALCULATOR
========================= */

function showCalculator(type) {

    document.querySelectorAll(".calculator-section").forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(type).classList.remove("hidden");
}


/* =========================
   BASIC CALCULATOR
========================= */

let basicDisplay = document.getElementById("basicDisplay");

function addBasic(value) {
    basicDisplay.value += value;
}

function clearBasic() {
    basicDisplay.value = "";
}

function deleteBasic() {
    basicDisplay.value = basicDisplay.value.slice(0, -1);
}

function calculateBasic() {

    try {

        let expression = basicDisplay.value;

        expression = expression.replace(/%/g, "/100");

        basicDisplay.value = eval(expression);

    } catch {

        basicDisplay.value = "Error";

    }
}


/* =========================
   SCIENTIFIC CALCULATOR
========================= */

let scientificDisplay =
    document.getElementById("scientificDisplay");

function addScientific(value) {
    scientificDisplay.value += value;
}

function clearScientific() {
    scientificDisplay.value = "";
}

function calculateScientific() {

    try {

        scientificDisplay.value =
            eval(scientificDisplay.value);

    } catch {

        scientificDisplay.value = "Error";

    }
}

function scientificFunction(type) {

    let value = parseFloat(scientificDisplay.value);

    if (type === "pi") {

        scientificDisplay.value = Math.PI;

    } else {

        if (isNaN(value)) {
            scientificDisplay.value = "Enter number";
            return;
        }

        if (type === "sin") {
            scientificDisplay.value =
                Math.sin(value * Math.PI / 180);
        }

        else if (type === "cos") {
            scientificDisplay.value =
                Math.cos(value * Math.PI / 180);
        }

        else if (type === "tan") {
            scientificDisplay.value =
                Math.tan(value * Math.PI / 180);
        }

        else if (type === "sqrt") {
            scientificDisplay.value =
                Math.sqrt(value);
        }

        else if (type === "log") {
            scientificDisplay.value =
                Math.log10(value);
        }

        else if (type === "ln") {
            scientificDisplay.value =
                Math.log(value);
        }

        else if (type === "square") {
            scientificDisplay.value =
                Math.pow(value, 2);
        }

        else if (type === "cube") {
            scientificDisplay.value =
                Math.pow(value, 3);
        }

        else if (type === "inverse") {
            scientificDisplay.value =
                1 / value;
        }

        else if (type === "exp") {
            scientificDisplay.value =
                Math.exp(value);
        }
    }
}


/* =========================
   CGPA CALCULATOR
========================= */

function addSubject() {

    const subjects = document.getElementById("subjects");

    const row = document.createElement("div");

    row.className = "subject-row";

    row.innerHTML = `

        <input type="text" placeholder="Subject Name">

        <select class="credit">

            <option value="1">1 Credit</option>
            <option value="2">2 Credits</option>
            <option value="3" selected>3 Credits</option>
            <option value="4">4 Credits</option>
            <option value="5">5 Credits</option>
            <option value="6">6 Credits</option>

        </select>

        <select class="gpa">

            <option value="4">4.0 - A</option>
            <option value="3.7">3.7 - A-</option>
            <option value="3.5">3.5 - B+</option>
            <option value="3">3.0 - B</option>
            <option value="2.7">2.7 - B-</option>
            <option value="2.5">2.5 - C+</option>
            <option value="2">2.0 - C</option>
            <option value="1.7">1.7 - C-</option>
            <option value="1">1.0 - D</option>
            <option value="0">0.0 - F</option>

        </select>

        <button class="remove-btn"
                onclick="removeSubject(this)">
            ×
        </button>
    `;

    subjects.appendChild(row);
}


function removeSubject(button) {

    const rows =
        document.querySelectorAll(".subject-row");

    if (rows.length > 1) {

        button.parentElement.remove();

    } else {

        alert("You need at least one subject.");

    }
}


function calculateCGPA() {

    const rows =
        document.querySelectorAll(".subject-row");

    let totalPoints = 0;
    let totalCredits = 0;

    rows.forEach(row => {

        const credit =
            parseFloat(row.querySelector(".credit").value);

        const gpa =
            parseFloat(row.querySelector(".gpa").value);

        totalPoints += credit * gpa;

        totalCredits += credit;
    });

    if (totalCredits === 0) {

        document.getElementById("cgpaResult").innerText = "0.00";
        return;
    }

    const cgpa = totalPoints / totalCredits;

    document.getElementById("cgpaResult").innerText =
        cgpa.toFixed(2);
}