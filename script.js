const models = {
  dalton: {
    title: "Solid Sphere Model",
    short: "Solid Sphere",
    scientist: "John Dalton · 1803",
    src: "models/dalton-solid-sphere.glb",
    ios: "models/dalton-solid-sphere.usdz",
    alt: "3D model of Dalton's solid sphere atom model",
    description: "Dalton described atoms as tiny, solid, indivisible spheres. He proposed that atoms of the same element are identical and that compounds are made from combinations of atoms.",
    strength: "Helped explain that each element has its own type of atom.",
    limit: "Atoms are not indivisible; they contain smaller particles.",
    question: "Why was Dalton's model useful even though it was not complete?"
  },
  thomson: {
    title: "Plum Pudding Model",
    short: "Plum Pudding",
    scientist: "J. J. Thomson · 1904",
    src: "models/thomson-plum-pudding.glb",
    ios: "models/thomson-plum-pudding.usdz",
    alt: "3D model of Thomson's plum pudding atom model",
    description: "Thomson discovered electrons and imagined the atom as a positively charged sphere with negative electrons scattered inside it, like raisins in a pudding.",
    strength: "Recognized electrons as parts of atoms.",
    limit: "Did not include a nucleus and could not explain later experiments.",
    question: "What new particle did Thomson add to the idea of the atom?"
  },
  rutherford: {
    title: "Nuclear Model",
    short: "Nuclear",
    scientist: "Ernest Rutherford · 1911",
    src: "models/rutherford-nuclear.glb",
    ios: "models/rutherford-nuclear.usdz",
    alt: "3D model of Rutherford's nuclear atom model",
    description: "Rutherford's gold foil experiment showed that most of the atom is empty space and that positive charge is concentrated in a small center called the nucleus.",
    strength: "Showed that atoms have a small, dense, positively charged nucleus.",
    limit: "Did not explain why electrons stay around the nucleus without collapsing into it.",
    question: "What did the gold foil experiment reveal about empty space inside the atom?"
  },
  bohr: {
    title: "Planetary Model",
    short: "Planetary",
    scientist: "Niels Bohr · 1913",
    src: "models/bohr-planetary.glb",
    ios: "models/bohr-planetary.usdz",
    alt: "3D model of Bohr's planetary atom model",
    description: "Bohr improved Rutherford's model by saying that electrons move around the nucleus in fixed energy levels, like planets following certain paths.",
    strength: "Explained stable electron orbits and helped explain the light spectra of some elements.",
    limit: "Works best for simple atoms and does not fully explain heavier atoms.",
    question: "How are Bohr's electron shells different from Rutherford's electron paths?"
  },
  schrodinger: {
    title: "Quantum Model",
    short: "Quantum",
    scientist: "Erwin Schrödinger · 1926",
    src: "models/schrodinger-quantum-cloud.glb",
    ios: "models/schrodinger-quantum-cloud.usdz",
    alt: "3D model of Schrödinger's quantum cloud atom model",
    description: "The quantum model explains that electrons do not travel in fixed paths. Instead, they are found in regions of probability called orbitals or electron clouds.",
    strength: "Shows that electron positions are uncertain and are better described as probability clouds.",
    limit: "The model is accurate, but it is more abstract and harder to visualize than earlier models.",
    question: "Why is the quantum model shown as a cloud instead of a clear circular path?"
  }
};

const quizQuestions = [
  {
    q: "Who proposed the solid sphere model of the atom?",
    choices: ["John Dalton", "J. J. Thomson", "Niels Bohr", "Erwin Schrödinger"],
    answer: 0,
    explain: "Dalton described atoms as tiny solid spheres."
  },
  {
    q: "What year is commonly linked with Dalton's atomic model?",
    choices: ["1803", "1904", "1911", "1926"],
    answer: 0,
    explain: "Dalton's model is commonly dated 1803."
  },
  {
    q: "Which scientist discovered the electron and proposed the plum pudding model?",
    choices: ["Rutherford", "Thomson", "Bohr", "Dalton"],
    answer: 1,
    explain: "J. J. Thomson discovered electrons and included them in his model."
  },
  {
    q: "In Thomson's model, electrons are scattered inside a sphere of what charge?",
    choices: ["Negative charge", "Positive charge", "No charge", "Magnetic charge"],
    answer: 1,
    explain: "The plum pudding model placed negative electrons in a positive sphere."
  },
  {
    q: "Which experiment helped Rutherford discover the nucleus?",
    choices: ["Oil drop experiment", "Gold foil experiment", "Cathode ray experiment", "Flame test experiment"],
    answer: 1,
    explain: "Rutherford used the gold foil experiment to show that atoms have a nucleus."
  },
  {
    q: "What did Rutherford conclude about most of the atom?",
    choices: ["It is completely solid", "It is mostly empty space", "It has no charge", "It has no electrons"],
    answer: 1,
    explain: "Most alpha particles passed through the foil, showing that atoms are mostly empty space."
  },
  {
    q: "What is found at the center of Rutherford's nuclear model?",
    choices: ["Electron cloud", "Solid shell", "Small positive nucleus", "Negative pudding"],
    answer: 2,
    explain: "Rutherford placed a small, dense, positive nucleus at the center."
  },
  {
    q: "Bohr's model says electrons move around the nucleus in fixed ____.",
    choices: ["energy levels", "random clouds", "solid spheres", "puddings"],
    answer: 0,
    explain: "Bohr proposed fixed energy levels or shells."
  },
  {
    q: "Which model is often drawn like planets orbiting the sun?",
    choices: ["Dalton model", "Thomson model", "Bohr model", "Quantum model"],
    answer: 2,
    explain: "The Bohr model is also called the planetary model."
  },
  {
    q: "Which model introduced the idea that electron energy is quantized?",
    choices: ["Bohr model", "Dalton model", "Thomson model", "Solid sphere model"],
    answer: 0,
    explain: "Bohr explained that electrons occupy specific energy levels."
  },
  {
    q: "Who is associated with the quantum model shown as an electron cloud?",
    choices: ["John Dalton", "Erwin Schrödinger", "Ernest Rutherford", "J. J. Thomson"],
    answer: 1,
    explain: "Schrödinger is associated with the quantum mechanical model."
  },
  {
    q: "In the quantum model, electrons are best described as being found in ____.",
    choices: ["fixed circular paths", "solid balls", "probability clouds", "positive pudding"],
    answer: 2,
    explain: "The quantum model uses probability clouds or orbitals."
  },
  {
    q: "Which is the correct order of the models from earliest to latest?",
    choices: ["Bohr, Dalton, Thomson, Rutherford, Quantum", "Dalton, Thomson, Rutherford, Bohr, Quantum", "Thomson, Dalton, Bohr, Rutherford, Quantum", "Quantum, Bohr, Rutherford, Thomson, Dalton"],
    answer: 1,
    explain: "The timeline is Dalton → Thomson → Rutherford → Bohr → Quantum."
  },
  {
    q: "What was a major limitation of Dalton's model?",
    choices: ["It had too many electrons", "It did not include the nucleus", "It treated atoms as indivisible", "It used probability clouds"],
    answer: 2,
    explain: "Dalton thought atoms were indivisible, but atoms contain subatomic particles."
  },
  {
    q: "Which model is accepted as the most accurate among the five shown?",
    choices: ["Solid sphere", "Plum pudding", "Planetary", "Quantum model"],
    answer: 3,
    explain: "The quantum model is the most accurate modern model among these choices."
  }
];

const viewer = document.querySelector("#atomViewer");
const arButton = document.querySelector("#arButton");
const viewerNote = document.querySelector("#viewerNote");
const viewerModelName = document.querySelector("#viewerModelName");
const tabs = document.querySelectorAll(".model-tab");
const fields = {
  title: document.querySelector("#modelTitle"),
  scientist: document.querySelector("#modelScientist"),
  description: document.querySelector("#modelDescription"),
  strength: document.querySelector("#modelStrength"),
  limit: document.querySelector("#modelLimit"),
  question: document.querySelector("#modelQuestion")
};

let currentModel = models.dalton;
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

async function fileExists(url) {
  try {
    const response = await fetch(url, { method: "HEAD", cache: "no-store" });
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function updateArButton() {
  arButton.disabled = false;
  arButton.textContent = "View this atom in AR";
  viewerNote.textContent = "Tip: Use one finger to rotate and two fingers to zoom before opening AR.";

  if (isIOS) {
    const exists = await fileExists(currentModel.ios);
    if (!exists) {
      arButton.disabled = true;
      arButton.textContent = "iPhone AR needs USDZ file";
      viewerNote.textContent = "The 3D model works here. To open AR on iPhone, add the matching .usdz file in the models folder.";
    }
  }
}

function showModel(id) {
  const model = models[id];
  currentModel = model;
  fields.title.textContent = model.title;
  fields.scientist.textContent = model.scientist;
  fields.description.textContent = model.description;
  fields.strength.textContent = model.strength;
  fields.limit.textContent = model.limit;
  fields.question.textContent = model.question;
  viewerModelName.textContent = model.short;
  viewer.src = model.src;
  viewer.setAttribute("ios-src", model.ios);
  viewer.alt = model.alt;
  tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.id === id));
  updateArButton();
}

tabs.forEach(tab => tab.addEventListener("click", () => showModel(tab.dataset.id)));

arButton.addEventListener("click", async () => {
  if (arButton.disabled) return;
  try {
    await viewer.activateAR();
  } catch (error) {
    viewerNote.textContent = "AR could not open. Please check your browser and the model file path.";
  }
});

const quizDialog = document.querySelector("#quizDialog");
const openQuizButtons = ["#openQuiz", "#openQuizTop", "#openQuizBottom"].map(selector => document.querySelector(selector));
const closeQuiz = document.querySelector("#closeQuiz");
const questionText = document.querySelector("#questionText");
const choicesBox = document.querySelector("#choices");
const feedback = document.querySelector("#feedback");
const quizProgress = document.querySelector("#quizProgress");
const quizScore = document.querySelector("#quizScore");
const nextQuestion = document.querySelector("#nextQuestion");
const restartQuiz = document.querySelector("#restartQuiz");

let quizIndex = 0;
let score = 0;
let answered = false;

function openQuiz() {
  renderQuestion();
  if (typeof quizDialog.showModal === "function") {
    quizDialog.showModal();
  } else {
    quizDialog.setAttribute("open", "");
  }
}

function closeQuizDialog() {
  if (typeof quizDialog.close === "function") quizDialog.close();
  else quizDialog.removeAttribute("open");
}

function renderQuestion() {
  const item = quizQuestions[quizIndex];
  answered = false;
  questionText.textContent = `${quizIndex + 1}. ${item.q}`;
  quizProgress.textContent = `Question ${quizIndex + 1} of ${quizQuestions.length}`;
  quizScore.textContent = `Score: ${score}`;
  feedback.textContent = "";
  feedback.className = "feedback";
  nextQuestion.textContent = quizIndex === quizQuestions.length - 1 ? "Show Result" : "Next";
  nextQuestion.disabled = true;
  choicesBox.innerHTML = "";

  item.choices.forEach((choice, choiceIndex) => {
    const button = document.createElement("button");
    button.className = "choice";
    button.type = "button";
    button.textContent = choice;
    button.addEventListener("click", () => chooseAnswer(button, choiceIndex));
    choicesBox.appendChild(button);
  });
}

function chooseAnswer(button, choiceIndex) {
  if (answered) return;
  answered = true;
  const item = quizQuestions[quizIndex];
  const buttons = choicesBox.querySelectorAll(".choice");

  buttons.forEach((choiceButton, index) => {
    choiceButton.disabled = true;
    if (index === item.answer) choiceButton.classList.add("correct");
  });

  if (choiceIndex === item.answer) {
    score += 1;
    button.classList.add("correct");
    feedback.textContent = `Correct! ${item.explain}`;
    feedback.classList.add("good");
  } else {
    button.classList.add("wrong");
    feedback.textContent = `Not quite. ${item.explain}`;
    feedback.classList.add("bad");
  }

  quizScore.textContent = `Score: ${score}`;
  nextQuestion.disabled = false;
}

function showFinalResult() {
  const percent = Math.round((score / quizQuestions.length) * 100);
  questionText.textContent = `Your final score is ${score} out of ${quizQuestions.length} (${percent}%).`;
  choicesBox.innerHTML = "";
  quizProgress.textContent = "Quiz completed";
  quizScore.textContent = `Score: ${score}/${quizQuestions.length}`;
  feedback.className = "feedback good";
  feedback.textContent = percent >= 80
    ? "Great work! You understand the timeline of atomic models."
    : percent >= 60
      ? "Good effort! Review the strengths and limitations, then try again."
      : "Keep practicing. Revisit the 5 models, then restart the quiz.";
  nextQuestion.textContent = "Done";
  nextQuestion.disabled = false;
}

nextQuestion.addEventListener("click", () => {
  if (quizIndex === quizQuestions.length - 1 && answered) {
    showFinalResult();
    quizIndex += 1;
    return;
  }

  if (quizIndex >= quizQuestions.length) {
    closeQuizDialog();
    return;
  }

  quizIndex += 1;
  renderQuestion();
});

restartQuiz.addEventListener("click", () => {
  quizIndex = 0;
  score = 0;
  renderQuestion();
});

openQuizButtons.forEach(button => button && button.addEventListener("click", openQuiz));
closeQuiz.addEventListener("click", closeQuizDialog);

showModel("dalton");
