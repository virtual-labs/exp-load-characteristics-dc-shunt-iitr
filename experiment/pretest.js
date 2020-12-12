/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
    {
      question: "DC shunt generator has terminal voltage versus load current characteristic which is",  ///// Write the question inside double quotes
      answers: {
        a: "Constant",                  ///// Write the option 1 inside double quotes
        b: "Slightly drooping",                  ///// Write the option 2 inside double quotes
        c: "Slightly rising",                  ///// Write the option 3 inside double quotes
        d: "Highly drooping"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
     question: "Which of the following type of dc generator gives constant output voltage at all loads ?",  ///// Write the question inside double quotes
      answers: {
        a: "Shunt generator",                  ///// Write the option 1 inside double quotes
        b: "Series generator",                  ///// Write the option 2 inside double quotes
        c: "Shot shunt compound generator",                  ///// Write the option 3 inside double quotes
        d: "Level compound generator"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line
{
     question: "The terminal voltage of dc shunt generator drops on load because of",  ///// Write the question inside double quotes
      answers: {
        a: "Armature reaction",                  ///// Write the option 1 inside double quotes
        b: "Armature resistance",                  ///// Write the option 2 inside double quotes
        c: "Weakening of the field due to armature reaction",                  ///// Write the option 3 inside double quotes
        d: "All of these"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
     question: "If the load on an over-compounded dc generator is reduced, the terminal voltage",  ///// Write the question inside double quotes
      answers: {
        a: "Increases",                  ///// Write the option 1 inside double quotes
        b: "Decreases",                  ///// Write the option 2 inside double quotes
        c: "Remains unchanged",                  ///// Write the option 3 inside double quotes
        d: "May increase or decrease14"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },


    {
     question: "Copper losses in armature of dc generator amount to which of the following percentage of full load losses ?",  ///// Write the question inside double quotes
      answers: {
        a: "5 to 10%",                  ///// Write the option 1 inside double quotes
        b: "10 to 20%",                  ///// Write the option 2 inside double quotes
        c: "20 to 30%",                  ///// Write the option 3 inside double quotes
        d: "30 to 40%"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    /* To add more MCQ's, copy the below section, starting from open curly braces ( { )
        till closing curly braces comma ( }, )

        and paste it below the curly braces comma ( below correct answer }, ) of above 
        question

    Copy below section

    {
      question: "This is question n?",
      answers: {
        a: "Option 1",
        b: "Option 2",
        c: "Option 3",
        d: "Option 4"
      },
      correctAnswer: "c"
    },

    Copy above section

    */




  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////