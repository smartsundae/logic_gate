const gatePaths = {
    'AND': 'M 0,0 L 20,0 A 20,20 0 0,1 20,40 L 0,40 Z',
    'OR': 'M 0,0 C 15,0 25,10 40,20 C 25,30 15,40 0,40 Q 15,20 0,0 Z',
    'XOR': 'M 8,0 C 23,0 33,10 48,20 C 33,30 23,40 8,40 Q 23,20 8,0 Z M 0,0 Q 15,20 0,40'
};

const levels = {
    easy: [
        {
            stage: 1,
            expression: "(A AND B) OR C",
            question: "주어진 Input값으로 최종 Output F를 구하시오.",
            targetLabel: "F",
            answer: "1",
            gates: [{ id: "G1", type: "AND", x: 150, y: 30 }, { id: "G2", type: "OR", x: 250, y: 75 }],
            wires: [
                "M 50 40 L 150 40", "M 50 80 L 100 80 L 100 60 L 150 60",
                "M 190 50 L 220 50 L 220 85 L 255 85", "M 50 140 L 220 140 L 220 105 L 255 105",
                "M 290 95 L 350 95"
            ],
            labels: [{ text: "A = 1", x: 0, y: 45 }, { text: "B = 0", x: 0, y: 85 }, { text: "C = 1", x: 0, y: 145 }, { text: "F = [?]", x: 360, y: 100 }]
        },
    ],
    medium: [
        {
            stage: 1,
            expression: "(A XOR B) AND (C OR D)",
            question: "최종 Output F가 1이 되기 위해 필요한 Input C의 값은?",
            targetLabel: "C",
            answer: "1",
            gates: [{ id: "G1", type: "XOR", x: 150, y: 30 }, { id: "G2", type: "OR", x: 150, y: 130 }, { id: "G3", type: "AND", x: 270, y: 80 }],
            wires: [
                "M 50 40 L 100 40 L 100 40 L 158 40", "M 50 80 L 100 80 L 100 60 L 158 60",
                "M 50 140 L 150 140", "M 50 180 L 100 180 L 100 160 L 150 160",
                "M 198 50 L 235 50 L 235 90 L 270 90", "M 190 150 L 235 150 L 235 110 L 270 110",
                "M 310 100 L 370 100"
            ],
            labels: [{ text: "A = 1", x: 0, y: 45 }, { text: "B = 0", x: 0, y: 85 }, { text: "C = [?]", x: 0, y: 145 }, { text: "D = 0", x: 0, y: 185 }, { text: "F = 1", x: 380, y: 105 }]
        },
        {
            stage: 2,
            expression: "((A OR B) XOR C) XOR D",
            question: "주어진 Input값으로 최종 Output F를 구하시오.",
            targetLabel: "F",
            answer: "0",
            gates: [{ id: "G1", type: "OR", x: 120, y: 30 }, { id: "G2", type: "XOR", x: 220, y: 70 }, { id: "G3", type: "XOR", x: 320, y: 110 }],
            wires: [
                "M 50 40 L 120 40", "M 50 80 L 90 80 L 90 60 L 120 60",
                "M 160 50 L 190 50 L 190 80 L 228 80", "M 50 120 L 190 120 L 190 100 L 228 100",
                "M 268 90 L 290 90 L 290 120 L 328 120", "M 50 160 L 290 160 L 290 140 L 328 140",
                "M 368 130 L 410 130"
            ],
            labels: [{ text: "A = 0", x: 0, y: 45 }, { text: "B = 0", x: 0, y: 85 }, { text: "C = 1", x: 0, y: 125 }, { text: "D = 1", x: 0, y: 165 }, { text: "F = [?]", x: 420, y: 135 }]
        },
        {
            stage: 3,
            expression: "((A AND B) OR C) AND D",
            question: "최종 Output F가 1이 되기 위한 Input B의 값은?",
            targetLabel: "B",
            answer: "1",
            gates: [{ id: "G1", type: "AND", x: 120, y: 30 }, { id: "G2", type: "OR", x: 220, y: 70 }, { id: "G3", type: "AND", x: 320, y: 110 }],
            wires: [
                "M 50 40 L 120 40", "M 50 80 L 90 80 L 90 60 L 120 60",
                "M 160 50 L 190 50 L 190 80 L 220 80", "M 50 120 L 190 120 L 190 100 L 220 100",
                "M 260 90 L 290 90 L 290 120 L 320 120", "M 50 160 L 290 160 L 290 140 L 320 140",
                "M 360 130 L 410 130"
            ],
            labels: [{ text: "A = 1", x: 0, y: 45 }, { text: "B = [?]", x: 0, y: 85 }, { text: "C = 0", x: 0, y: 125 }, { text: "D = 1", x: 0, y: 165 }, { text: "F = 1", x: 420, y: 135 }]
        }
    ],
    hard: [
        {
            stage: 1,
            expression: "((A XOR B) AND C) XOR (D OR E)",
            question: "최종 Output F가 0이 되기 위한 Input E의 값은?",
            targetLabel: "E",
            answer: "1",
            gates: [{ id: "G1", type: "XOR", x: 120, y: 30 }, { id: "G2", type: "AND", x: 220, y: 60 }, { id: "G3", type: "OR", x: 120, y: 170 }, { id: "G4", type: "XOR", x: 320, y: 115 }],
            wires: [
                "M 40 40 L 128 40", "M 40 80 L 90 80 L 90 60 L 128 60",
                "M 168 50 L 195 50 L 195 70 L 220 70", "M 40 120 L 195 120 L 195 90 L 220 90",
                "M 40 180 L 120 180", "M 40 220 L 90 220 L 90 200 L 120 200",
                "M 260 80 L 290 80 L 290 125 L 328 125", "M 160 190 L 290 190 L 290 145 L 328 145",
                "M 368 135 L 430 135"
            ],
            labels: [{ text: "A = 1", x: 0, y: 45 }, { text: "B = 0", x: 0, y: 85 }, { text: "C = 1", x: 0, y: 125 }, { text: "D = 0", x: 0, y: 185 }, { text: "E = [?]", x: 0, y: 225 }, { text: "F = 0", x: 440, y: 140 }]
        },
        {
            stage: 2,
            expression: "((A AND B) OR (C XOR D)) XOR ((C XOR D) AND (E OR F))",
            question: "최종 Output이 0이 되기 위한 Input F_in의 값은?",
            targetLabel: "F_in",
            answer: "1",
            gates: [
                { id: "G1", type: "AND", x: 80, y: 30 }, { id: "G2", type: "XOR", x: 80, y: 110 }, { id: "G3", type: "OR", x: 80, y: 190 },
                { id: "G4", type: "OR", x: 210, y: 60 }, { id: "G5", type: "AND", x: 210, y: 160 }, { id: "G6", type: "XOR", x: 340, y: 110 }
            ],
            wires: [
                "M 45 40 L 80 40", "M 45 80 L 60 80 L 60 60 L 80 60",
                "M 45 120 L 88 120", "M 45 160 L 60 160 L 60 140 L 88 140",
                "M 45 200 L 80 200", "M 45 240 L 60 240 L 60 220 L 80 220",
                "M 120 50 L 170 50 L 170 70 L 210 70", "M 128 130 L 170 130",
                "M 170 130 L 170 90 L 210 90", "M 170 130 L 170 170 L 210 170",
                "M 120 210 L 170 210 L 170 190 L 210 190",
                "M 250 80 L 300 80 L 300 120 L 348 120", "M 250 180 L 300 180 L 300 140 L 348 140",
                "M 388 130 L 430 130"
            ],
            labels: [
                { text: "A = 1", x: 0, y: 45 }, { text: "B = 1", x: 0, y: 85 }, { text: "C = 0", x: 0, y: 125 }, 
                { text: "D = 1", x: 0, y: 165 }, { text: "E = 0", x: 0, y: 205 }, { text: "F_in=[?]", x: 0, y: 245 }, { text: "F_Out = 0", x: 440, y: 135 }
            ]
        },
{
    stage: 3,
    expression: "((A XOR B) AND (C OR D)) XOR ((E AND F) OR G)",
    question: "최종 Output F_Out이 0이 되기 위한 Input B의 값은?",
    targetLabel: "B",
    answer: "0",

    gates: [
        { id: "G1", type: "XOR", x: 100, y: 20 },
        { id: "G2", type: "OR",  x: 100, y: 100 },
        { id: "G3", type: "AND", x: 220, y: 60 },
        { id: "G4", type: "AND", x: 100, y: 190 },
        { id: "G5", type: "OR",  x: 220, y: 180 },
        { id: "G6", type: "XOR", x: 360, y: 110 }
    ],

    wires: [
        // A, B -> G1
        "M 45 30 L 100 30",
        "M 45 70 L 75 70 L 75 50 L 100 50",

        // C, D -> G2
        "M 45 110 L 100 110",
        "M 45 150 L 75 150 L 75 130 L 100 130",

        // G1, G2 -> G3
        "M 148 40 L 180 40 L 180 70 L 220 70",
        "M 148 120 L 195 120 L 195 90 L 220 90",

        // E, F -> G4
        "M 45 190 L 75 190 L 75 200 L 100 200",
        "M 45 230 L 80 230 L 80 220 L 100 220",

        // G4, G -> G5
        "M 148 210 L 180 210 L 180 190 L 220 190",
        "M 45 270 L 195 270 L 195 210 L 220 210",

        // G3, G5 -> G6
        "M 268 80 L 310 80 L 310 120 L 360 120",
        "M 268 200 L 330 200 L 330 140 L 360 140",

        // Output
        "M 408 130 L 460 130"
    ],

    labels: [
        { text: "A = 1", x: 0, y: 35 },
        { text: "B = [?]", x: 0, y: 75 },
        { text: "C = 0", x: 0, y: 115 },
        { text: "D = 1", x: 0, y: 155 },
        { text: "E = 1", x: 0, y: 195 },
        { text: "F = 1", x: 0, y: 235 },
        { text: "G = 0", x: 0, y: 275 },
        { text: "F_Out = 0", x: 465, y: 135 }
    ]
}
    ],
    extreme: [
        {
            stage: 1,
            expression: "Logic & Proposition",
            question: "명제 P: 'A와 B의 상태가 서로 다르다', 명제 Q: '출력 F는 1이다'.\n명제 P → Q 가 거짓(0)이 되게 하는 Input C의 값은?",
            targetLabel: "C",
            answer: "0",
            gates: [{ id: "G1", type: "XOR", x: 150, y: 30 }, { id: "G2", type: "AND", x: 270, y: 75 }],
            wires: [
                "M 50 40 L 158 40", "M 50 80 L 100 80 L 100 60 L 158 60",
                "M 198 50 L 235 50 L 235 85 L 270 85", "M 50 140 L 235 140 L 235 105 L 270 105",
                "M 310 95 L 370 95"
            ],
            labels: [{ text: "A = 1", x: 0, y: 45 }, { text: "B = 0", x: 0, y: 85 }, { text: "C = [?]", x: 0, y: 145 }, { text: "F = ?", x: 380, y: 100 }]
        },
        {
            stage: 2,
            expression: "Logic & Proposition",
            question: "명제 P: '게이트 G1(OR)의 출력은 참(1)이다', 명제 Q: '최종 출력 F는 참(1)이다'.\n명제 P → Q 가 거짓(0)이 되기 위한 Input D의 값은?",
            targetLabel: "D",
            answer: "0",
            gates: [{ id: "G1", type: "OR", x: 150, y: 30 }, { id: "G2", type: "AND", x: 150, y: 130 }, { id: "G3", type: "AND", x: 270, y: 80 }],
            wires: [
                "M 50 40 L 150 40", "M 50 80 L 100 80 L 100 60 L 150 60",
                "M 50 140 L 150 140", "M 50 180 L 100 180 L 100 160 L 150 160",
                "M 190 50 L 235 50 L 235 90 L 270 90", "M 190 150 L 235 150 L 235 110 L 270 110",
                "M 310 100 L 370 100"
            ],
            labels: [{ text: "A = 1", x: 0, y: 45 }, { text: "B = 0", x: 0, y: 85 }, { text: "C = 1", x: 0, y: 145 }, { text: "D = [?]", x: 0, y: 185 }, { text: "F = ?", x: 380, y: 105 }]
        },
        {
            stage: 3,
            expression: "((A AND B) OR C) XOR D",
            question: "Output F가 1이 되기 위한 D의 값은?",
            targetLabel: "D",
            answer: "0",
            gates: [
                { id: "G1", type: "AND", x: 120, y: 30 }, 
                { id: "G2", type: "OR", x: 220, y: 70 }, 
                { id: "G3", type: "XOR", x: 320, y: 120 }
            ],
            wires: [
                "M 50 40 L 120 40", 
                "M 50 80 L 90 80 L 90 60 L 120 60",
                "M 160 50 L 190 50 L 190 80 L 220 80", 
                "M 50 120 L 190 120 L 190 100 L 220 100",
                "M 260 90 L 290 90 L 290 130 L 320 130", 
                "M 50 160 L 290 160 L 290 150 L 320 150",
                "M 360 140 L 410 140"
            ],
            labels: [
                { text: "A = 1", x: 0, y: 45 }, 
                { text: "B = 1", x: 0, y: 85 }, 
                { text: "C = 0", x: 0, y: 125 }, 
                { text: "D = [?]", x: 0, y: 165 }, 
                { text: "F = 1", x: 420, y: 145 }
            ]
        }
    ]
};

let currentDifficulty = 'easy';
let currentStageIndex = 0;

function startGame(difficulty) {
    currentDifficulty = difficulty;
    currentStageIndex = 0;
    
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'flex';
    document.getElementById('current-difficulty-title').innerText = `LOGIC PUZZLE - ${difficulty.toUpperCase()}`;
    
    document.querySelector('.circuit-view').style.display = 'flex';
    document.querySelector('.info-section').style.display = 'block';
    document.querySelector('.input-section').style.display = 'flex';
    document.getElementById('feedback-msg').style.display = 'block';
    document.getElementById('clear-screen').style.display = 'none';

    renderStage();
}

function renderStage() {
    const stageData = levels[currentDifficulty];
    
    if (currentStageIndex >= stageData.length) {
        showClearScreen();
        return;
    }

    const data = stageData[currentStageIndex];
    
    document.getElementById('stage-info').innerText = `STAGE ${data.stage} / 3`;
    document.getElementById('expression').innerText = data.expression;
    document.getElementById('question-text').innerText = data.question;
    document.getElementById('input-label').innerText = `${data.targetLabel} = `;
    
    const input = document.getElementById('answer-input');
    input.value = "";
    input.focus();

    const svg = document.getElementById('circuit-svg');
    svg.innerHTML = ""; 

    data.wires.forEach(wirePath => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", wirePath);
        path.setAttribute("class", "wire");
        svg.appendChild(path);
    });

    data.gates.forEach(gate => {
        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttribute("transform", `translate(${gate.x}, ${gate.y})`);
        
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", gatePaths[gate.type]);
        path.setAttribute("class", "gate");
        
        g.appendChild(path);
        svg.appendChild(g);
    });

    data.labels.forEach(label => {
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", label.x);
        text.setAttribute("y", label.y);
        text.setAttribute("class", "label");
        text.textContent = label.text;
        svg.appendChild(text);
    });

    document.getElementById('feedback-msg').innerText = "";
}

function submitAnswer() {
    const inputField = document.getElementById('answer-input');
    const userAnswer = inputField.value.trim();
    const data = levels[currentDifficulty][currentStageIndex];
    const feedback = document.getElementById('feedback-msg');

    if (userAnswer === data.answer) {
        feedback.innerText = "CORRECT!";
        feedback.style.color = "#ffffff";
        
        const wires = document.querySelectorAll('.wire');
        wires.forEach(w => w.classList.add('active'));

        setTimeout(() => {
            currentStageIndex++;
            renderStage();
        }, 1500);

    } else {
        feedback.innerText = "WRONG";
        feedback.style.color = "#ff3333";
        
        inputField.classList.add('shake');
        setTimeout(() => {
            inputField.classList.remove('shake');
            inputField.value = "";
            inputField.focus();
        }, 400);
    }
}

document.getElementById('answer-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') submitAnswer();
});

function showClearScreen() {
    document.querySelector('.circuit-view').style.display = 'none';
    document.querySelector('.info-section').style.display = 'none';
    document.querySelector('.input-section').style.display = 'none';
    document.getElementById('feedback-msg').style.display = 'none';
    
    document.getElementById('clear-title').innerText = `${currentDifficulty.toUpperCase()} CLEARED!`;
    document.getElementById('clear-screen').style.display = 'block';
}

function returnToMenu() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('start-screen').style.display = 'block';
}
