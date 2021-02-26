// const questions = [{
//   number: 1,
//   question: 'What is it?',
//   answers: [{
//     a: "first correct answer",
//     b: "second wrong answer",
//     c: "third wrong answer",
//     d: "third wrong answer",
//   }],
//   correctAnswer: "first correct answer"
// },
//   {
//     number: 2,
//     question: 'What is it?',
//     answers: [{
//       a: "first wrong answer",
//       b: "second correct answer",
//       c: "third wrong answer",
//       d: "third wrong answer",
//     }],
//     correctAnswer: "second correct answer"
//   },
//   {
//     number: 3,
//     question: 'What is it?',
//     answers: [{
//       a: "first wrong answer",
//       b: "second wrong answer",
//       c: "third correct answer",
//       d: "third wrong answer",
//     }],
//     correctAnswer: "third correct answer"
//   },
//   {
//     number: 4,
//     question: 'What is it?',
//     answers: [{
//       a: "first wrong answer",
//       b: "second wrong answer",
//       c: "third wrong answer",
//       d: "fourth correct answer",
//     }],
//     correctAnswer: "fourth correct answer"
//   },
//   {
//     number: 5,
//     question: 'What is it?',
//     answers: [{
//       a: "fifth correct answer",
//       b: "second wrong answer",
//       c: "third wrong answer",
//       d: "third wrong answer",
//     }],
//     correctAnswer: "fifth correct answer"
//   }];

function QuizViewModel() {
  const self = this;

  // Get value of checked (correct, incorrect, or null) Use `data-bind` to get value
  // Clean this up (DRY), this is just to get the quiz working
  var userSelections = ko.observableArray();
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

  // Start quiz
  self.start = function () {
    $("#start").hide(); // Hide start button
    $(".header").hide(); // Hide header
    $(".sub-header").hide(); // Hide subheader
    $("#crest").hide(); // Hide crest
    $("#quiz").show(); // Show quiz
  };

  // Clear quiz on button click
  self.clear = function () {
    $('input[type="radio"]').prop("checked", false);
  };

  // Submit quiz
  self.submit = function () {
    $("#quiz").hide(); // Hide quiz
    $("#crest").show(); // Show crest
    $("#summary").show(); // Show results
    self.calculate();
    // TODO: Get value of checked (correct, incorrect, or null) Use `data-bind` to get value
    // TODO: If checked correct < 6 return Beginner, else if checked correct > 5 && < 8 return Novice, else return Expert
    // TODO: For all checked incorrect display in summary page
    // TODO: Show results (rank, score: percentage, list of incorrect answers)
    // TODO: Show results

    // console.log("submit button works");
    // console.log(userSelections()); // Array of user selections
    // console.log(self.results()); // Array of user selections from results() function
  };

  self.calculate = function () {
    const userChoice1 = $("input[type=radio][name=q1]:checked").val();
    const userChoice2 = $("input[type=radio][name=q2]:checked").val();
    const userChoice3 = $("input[type=radio][name=q3]:checked").val();
    const userChoice4 = $("input[type=radio][name=q4]:checked").val();
    const userChoice5 = $("input[type=radio][name=q5]:checked").val();
    const userChoice6 = $("input[type=radio][name=q6]:checked").val();
    const userChoice7 = $("input[type=radio][name=q7]:checked").val();
    const userChoice8 = $("input[type=radio][name=q8]:checked").val();
    const userChoice9 = $("input[type=radio][name=q9]:checked").val();
    const userChoice10 = $("input[type=radio][name=q10]:checked").val();

    const userAnswers = [];
    userAnswers.push(
      userChoice1,
      userChoice2,
      userChoice3,
      userChoice4,
      userChoice5,
      userChoice6,
      userChoice7,
      userChoice8,
      userChoice9,
      userChoice10
    );

    let correctAnswers = 0;
    let total = 0;
    let score = 0;

    userAnswers.forEach(function (answer) {
      //console.log(answer);

      if (answer === "correct") {
        correctAnswers++;
        score++;
        //console.log(correctAnswers);
        //console.log(score);
        total = correctAnswers;
      }
    });

    console.log("total: " + total);
    if (total <= 5) {
      //console.log("Beginner");
      let rank = document.getElementById("rank");
      rank.innerHTML = "Rank: Beginner";
    } else if (total <= 8 && total > 5) {
      //console.log("Novice");
      let rank = document.getElementById("rank");
      rank.innerHTML = "Rank: Novice";
    } else {
      //console.log("Expert");
      let rank = document.getElementById("rank");
      rank.innerHTML = "Rank: Expert";
      console.log("score: " + score);
    }
  };
  // Results (might not need this; the observableArray is doing the same thing)
  // self.results = ko.computed(function () {
  //   // TODO: Tally up amount of correct answers and display
  //   return userSelections();
  // }, self);

  // Retest button
  self.retest = function () {
    window.location.reload();
  };

  // Back button
  self.back = function () {
    $("#answers").hide();
    $("#crest").show();
    $("#summary").show();
  };

  // Answers button
  self.answers = function () {
    $("#summary").hide();
    $("#answers").show();
  };
}

ko.applyBindings(new QuizViewModel());
