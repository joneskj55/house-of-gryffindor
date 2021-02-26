function QuizViewModel() {
  const self = this;

  // Get value of checked radio buttons and store in array
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
    self.calculate(); // Get quiz results
    $("#summary").show(); // Show results

    // TODO: Display list of incorrect answers
  };

  // Get score and rank
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

    // Store chosen answers in array
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

    let correctAnswers = 0; // Counter for correct answers
    let total = 0; // Counter for total correct used to calculate rank & score
    let score = 0; // Counter for score to be used for tally

    // Iterate over answers array and tally up score
    userAnswers.forEach(function (answer) {
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

  // Retest button
  self.retest = function () {
    window.location.reload();
  };

  // Back button
  self.back = function () {
    $("#answers").hide(); // Hide answers
    $("#crest").show(); // Show crest
    $("#summary").show(); // Display quiz summary
  };

  // Answers button
  self.answers = function () {
    $("#summary").hide(); // Hide quiz summary
    $("#answers").show(); // Display answers
  };
}

ko.applyBindings(new QuizViewModel());
