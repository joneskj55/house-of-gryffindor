/*============================================
; Title: House Gryffindor JavaScript Trivia
; Author: Kevin Jones
; Date: 11 February 2021
; Description: JavaScript quiz built using
; Knockout.js (JavaScript file)
;===========================================*/

function QuizViewModel() {
  const self = this;

  // Get value of checked radio buttons and store in array
  const userSelections = ko.observableArray();
  userSelections.push(
    (self.userSelection1 = ko.observable()),
    (self.userSelection2 = ko.observable()),
    (self.userSelection3 = ko.observable()),
    (self.userSelection4 = ko.observable()),
    (self.userSelection5 = ko.observable()),
    (self.userSelection6 = ko.observable()),
    (self.userSelection7 = ko.observable()),
    (self.userSelection8 = ko.observable()),
    (self.userSelection9 = ko.observable()),
    (self.userSelection10 = ko.observable())
  );

  // Quiz questions array
  self.questions = [
    {
      number: 1,
      question:
        "1. What is the proper way to write a single-line comment in JavaScript?",
      answers: [
        {
          a: "/-- This is a comment --/",
          b: "// This is a comment",
          c: "<%-- This is a comment --%>",
          d: "<!-- This is a comment -->",
        },
      ],
      correctAnswer: "b",
      userSelection: self.userSelection1,
    },
    {
      number: 2,
      question:
        "2. Which of the following is the correct way to embed JavaScript into HTML?",
      answers: [
        {
          a: "<script></script>",
          b: "<java></java>",
          c: "<javascript></javascript>",
          d: "<jscript></jscript>",
        },
      ],
      correctAnswer: "a",
      userSelection: self.userSelection2,
    },
    {
      number: 3,
      question:
        "3. Which of the following is the correct way to call a function?",
      answers: [
        {
          a: "myFunction{};",
          b: "$.myFunction;",
          c: "myFunction[];",
          d: "myFunction();",
        },
      ],
      correctAnswer: "d",
      userSelection: self.userSelection3,
    },
    {
      number: 4,
      question: "4. Which of the following is a valid way to create an array?",
      answers: [
        {
          a: "let cereal = ['cheerios', 'pops'];",
          b: "const cereal = ['cheerios', 'pops'];",
          c: "var cereal = ['cheerios', 'pops'];",
          d: "All of the above",
        },
      ],
      correctAnswer: "d",
      userSelection: self.userSelection4,
    },
    {
      number: 5,
      question: "5. Dummy question?",
      answers: [
        {
          a: "correct",
          b: "<java></java>",
          c: "<javascript></javascript>",
          d: "<jscript></jscript>",
        },
      ],
      correctAnswer: "a",
      userSelection: self.userSelection5,
    },
    {
      number: 6,
      question: "6. Dummy question?",
      answers: [
        {
          a: "myFunction{};",
          b: "correct",
          c: "myFunction[];",
          d: "myFunction();",
        },
      ],
      correctAnswer: "b",
      userSelection: self.userSelection6,
    },
    {
      number: 7,
      question: "7. Dummy question?",
      answers: [
        {
          a: "correct",
          b: "// This is a comment",
          c: "<%-- This is a comment --%>",
          d: "<!-- This is a comment -->",
        },
      ],
      correctAnswer: "a",
      userSelection: self.userSelection7,
    },
    {
      number: 8,
      question: "8. Dummy question?",
      answers: [
        {
          a: "<script></script>",
          b: "<java></java>",
          c: "<javascript></javascript>",
          d: "correct",
        },
      ],
      correctAnswer: "d",
      userSelection: self.userSelection8,
    },
    {
      number: 9,
      question: "9. Dummy question?",
      answers: [
        {
          a: "myFunction{};",
          b: "$.myFunction;",
          c: "correct",
          d: "myFunction();",
        },
      ],
      correctAnswer: "c",
      userSelection: self.userSelection9,
    },
    {
      number: 10,
      question: "10. Dummy question?",
      answers: [
        {
          a: "correct",
          b: "$.myFunction;",
          c: "myFunction[];",
          d: "myFunction();",
        },
      ],
      correctAnswer: "a",
      userSelection: self.userSelection10,
    },
  ];

  // Question observables
  self.question1 = ko.observable(self.questions[0].question);
  self.question2 = ko.observable(self.questions[1].question);
  self.question3 = ko.observable(self.questions[2].question);
  self.question4 = ko.observable(self.questions[3].question);
  self.question5 = ko.observable(self.questions[4].question);
  self.question6 = ko.observable(self.questions[5].question);
  self.question7 = ko.observable(self.questions[6].question);
  self.question8 = ko.observable(self.questions[7].question);
  self.question9 = ko.observable(self.questions[8].question);
  self.question10 = ko.observable(self.questions[9].question);

  // Question one answer observables
  self.q1optionA = ko.observable(self.questions[0].answers[0].a);
  self.q1optionB = ko.observable(self.questions[0].answers[0].b);
  self.q1optionC = ko.observable(self.questions[0].answers[0].c);
  self.q1optionD = ko.observable(self.questions[0].answers[0].d);

  // Question two answer observables
  self.q2optionA = ko.observable(self.questions[1].answers[0].a);
  self.q2optionB = ko.observable(self.questions[1].answers[0].b);
  self.q2optionC = ko.observable(self.questions[1].answers[0].c);
  self.q2optionD = ko.observable(self.questions[1].answers[0].d);

  // Question three answer observables
  self.q3optionA = ko.observable(self.questions[2].answers[0].a);
  self.q3optionB = ko.observable(self.questions[2].answers[0].b);
  self.q3optionC = ko.observable(self.questions[2].answers[0].c);
  self.q3optionD = ko.observable(self.questions[2].answers[0].d);

  // Question four answer observables
  self.q4optionA = ko.observable(self.questions[3].answers[0].a);
  self.q4optionB = ko.observable(self.questions[3].answers[0].b);
  self.q4optionC = ko.observable(self.questions[3].answers[0].c);
  self.q4optionD = ko.observable(self.questions[3].answers[0].d);

  // Question five answer observables
  self.q5optionA = ko.observable(self.questions[4].answers[0].a);
  self.q5optionB = ko.observable(self.questions[4].answers[0].b);
  self.q5optionC = ko.observable(self.questions[4].answers[0].c);
  self.q5optionD = ko.observable(self.questions[4].answers[0].d);

  // Question six answer observables
  self.q6optionA = ko.observable(self.questions[5].answers[0].a);
  self.q6optionB = ko.observable(self.questions[5].answers[0].b);
  self.q6optionC = ko.observable(self.questions[5].answers[0].c);
  self.q6optionD = ko.observable(self.questions[5].answers[0].d);

  // Question seven answer observables
  self.q7optionA = ko.observable(self.questions[6].answers[0].a);
  self.q7optionB = ko.observable(self.questions[6].answers[0].b);
  self.q7optionC = ko.observable(self.questions[6].answers[0].c);
  self.q7optionD = ko.observable(self.questions[6].answers[0].d);

  // Question eight answer observables
  self.q8optionA = ko.observable(self.questions[7].answers[0].a);
  self.q8optionB = ko.observable(self.questions[7].answers[0].b);
  self.q8optionC = ko.observable(self.questions[7].answers[0].c);
  self.q8optionD = ko.observable(self.questions[7].answers[0].d);

  // Question nine answer observables
  self.q9optionA = ko.observable(self.questions[8].answers[0].a);
  self.q9optionB = ko.observable(self.questions[8].answers[0].b);
  self.q9optionC = ko.observable(self.questions[8].answers[0].c);
  self.q9optionD = ko.observable(self.questions[8].answers[0].d);

  // Question ten answer observables
  self.q10optionA = ko.observable(self.questions[9].answers[0].a);
  self.q10optionB = ko.observable(self.questions[9].answers[0].b);
  self.q10optionC = ko.observable(self.questions[9].answers[0].c);
  self.q10optionD = ko.observable(self.questions[9].answers[0].d);

  // Start quiz
  self.start = function () {
    $("#start").hide(); // Hide start button
    $(".header").hide(); // Hide header
    $(".sub-header").hide(); // Hide subheader
    $("#crest").hide(); // Hide crest
    $("#quiz").show(); // Show quiz
  };

  // Get score and rank
  self.calculate = function () {
    self.userChoice1 = $("input[type=radio][name=q1]:checked").val();
    self.userChoice2 = $("input[type=radio][name=q2]:checked").val();
    self.userChoice3 = $("input[type=radio][name=q3]:checked").val();
    self.userChoice4 = $("input[type=radio][name=q4]:checked").val();
    self.userChoice5 = $("input[type=radio][name=q5]:checked").val();
    self.userChoice6 = $("input[type=radio][name=q6]:checked").val();
    self.userChoice7 = $("input[type=radio][name=q7]:checked").val();
    self.userChoice8 = $("input[type=radio][name=q8]:checked").val();
    self.userChoice9 = $("input[type=radio][name=q9]:checked").val();
    self.userChoice10 = $("input[type=radio][name=q10]:checked").val();

    // Store chosen answers in array
    self.userAnswers = [];
    self.userAnswers.push(
      self.userChoice1,
      self.userChoice2,
      self.userChoice3,
      self.userChoice4,
      self.userChoice5,
      self.userChoice6,
      self.userChoice7,
      self.userChoice8,
      self.userChoice9,
      self.userChoice10
    );

    let correctAnswers = 0; // Counter for correct answers
    let total = 0; // Counter for total correct used to calculate rank & score
    let score = 0; // Counter for score to be used for tally

    // Iterate over answers array and tally up score
    self.userAnswers.forEach(function (answer) {
      if (answer === "correct") {
        correctAnswers++;
        score++;
        total = correctAnswers;
      }
    });

    // Get rank and score and display in DOM
    if (total <= 5) {
      let rank = document.getElementById("rank");
      rank.innerHTML = "Rank: Beginner";
      let htmlScore = document.getElementById("score");
      htmlScore.innerHTML = "Score: " + score.toString() * 10 + "%";
    } else if (total <= 8 && total > 5) {
      let rank = document.getElementById("rank");
      rank.innerHTML = "Rank: Novice";
      let htmlScore = document.getElementById("score");
      htmlScore.innerHTML = "Score: " + score.toString() * 10 + "%";
    } else {
      let rank = document.getElementById("rank");
      rank.innerHTML = "Rank: Expert";
      let htmlScore = document.getElementById("score");
      htmlScore.innerHTML = "Score: " + score.toString() * 10 + "%";
    }
  };

  // Clear quiz on button click
  self.clear = function () {
    $('input[type="radio"]').prop("checked", false);
  };

  // Submit quiz
  self.submit = function () {
    self.calculate(); // Get quiz results
    $("#quiz").hide(); // Hide quiz
    $("#crest").show(); // Show crest
    $("#summary").show(); // Show results
  };

  // Retest button
  self.retest = function () {
    window.location.reload();
  };

  // Answers button
  self.answers = function () {
    $("#summary").hide(); // Hide quiz summary
    $("#crest").hide(); // Hide crest
    $("#answers").show(); // Show answers div
  };

  // Back button
  self.back = function () {
    $("#answers").hide(); // Hide answers
    $("#crest").show(); // Show crest
    $("#summary").show(); // Display quiz summary
  };
}

ko.applyBindings(new QuizViewModel());
