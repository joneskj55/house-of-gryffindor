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
    self.calculate(); // get quiz results
    $("#summary").show(); // Show results

    // TODO: Show Score as percentage
    // TODO: Display list of incorrect answers
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
      if (answer === "correct") {
        correctAnswers++;
        score++;
        total = correctAnswers;
      }
    });

    console.log("total: " + total);
    if (total <= 5) {
      let rank = document.getElementById("rank");
      rank.innerHTML = "Rank: Beginner";
    } else if (total <= 8 && total > 5) {
      let rank = document.getElementById("rank");
      rank.innerHTML = "Rank: Novice";
    } else {
      let rank = document.getElementById("rank");
      rank.innerHTML = "Rank: Expert";
      console.log("score: " + score);
    }
  };

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
