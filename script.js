let questions = {
    pipes: [
        {question: "Pipe A can fill a tank in 20 minutes. Pipe B can fill it in 30 minutes. How long will it take both pipes working together to fill the tank?", options: ["12 minutes", "15 minutes", "25 minutes", "50 minutes"], answer: "12 minutes"},
        // Add 9 more questions for 'Pipes and Cisterns'
    ],
    probability: [
        {question: "What is the probability of rolling a 3 on a six-sided die?", options: ["1/6", "1/3", "1/2", "1/4"], answer: "1/6"},
        // Add 9 more questions for 'Probability'
    ],
    age: [
        {question: "John is twice as old as Jane. Five years ago, John was three times as old as Jane. How old is John now?", options: ["10", "20", "30", "40"], answer: "30"},
        // Add 9 more questions for 'Problems on Age'
    ],
    profit: [
        {question: "If a product is sold at a profit of 20%, and the cost price is $50, what is the selling price?", options: ["$60", "$70", "$80", "$90"], answer: "$60"},
        // Add 9 more questions for 'Profit and Loss'
    ]
};




let currentQuestionIndex = 0;
let currentCategory = "";
let userName = "";

function startQuiz() {
    userName = document.getElementById("userName").value;

    if (userName.trim() === "") {
        alert("Please enter your name to start the quiz.");
    } else {
        document.getElementById("namep").textContent = "Hello " + userName + "!";
        document.getElementById("user-details").style.display = "none";
        document.getElementById("categories").style.display = "block";
    }
}

function startCategoryQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    document.getElementById("categories").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    showQuestion();
}

function showQuestion() {
    let questionData = questions[currentCategory][currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questionData.options.forEach(option => {
        let button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    let correctAnswer = questions[currentCategory][currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong! The correct answer is " + correctAnswer);
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentCategory].length) {
        showQuestion();
    } else {
        alert("Quiz finished!");
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("categories").style.display = "block";
    }
}