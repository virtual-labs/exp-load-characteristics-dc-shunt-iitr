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
      question: "Armature magnetic field in a dc generator produces which of the following effect?",  ///// Write the question inside double quotes
      answers: {
        a: "It demagnetizes or reduces the main flux",                  ///// Write the option 1 inside double quotes
        b: "It cross-magnetizes the main flux",                  ///// Write the option 2 inside double quotes
        c: "It magnetizes or reinforces the main flux",                  ///// Write the option 3 inside double quotes
        d: "Both (a) and (b)"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

    {
      question: "In a dc generator, the polarity of the interpole is",  ///// Write the question inside double quotes
      answers: {
        a: "Always N",                  ///// Write the option 1 inside double quotes
        b: "Always S",                  ///// Write the option 2 inside double quotes
        c: "C Same as the main pole ahead",                  ///// Write the option 3 inside double quotes
        d: "Same as main pole behind"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },                                  ///// To add more questions, copy the section below 
    									                  ///// this line

{
      question: "In a dc generator, compared to the air gap under field poles, the interpole air gap is made",  ///// Write the question inside double quotes
      answers: {
        a: "Larger",                  ///// Write the option 1 inside double quotes
        b: "Smaller",                  ///// Write the option 2 inside double quotes
        c: "The same",                  ///// Write the option 3 inside double quotes
        d: "Much smaller"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    }, 

    {
      question: "The function of using compensating winding in dc machines is to neutral-lize the",  ///// Write the question inside double quotes
      answers: {
        a: "Armature reaction in the interpole zone",                  ///// Write the option 1 inside double quotes
        b: "Armature reacting in the commu-tating zone",                  ///// Write the option 2 inside double quotes
        c: "Armature reaction under the pole faces",                  ///// Write the option 3 inside double quotes
        d: "Cross-magnetizing armature reaction"                   ///// Write the option 4 inside double quotes
      },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    }, 


    {
      question: "The yoke of a dc generator is made of cast iron because",  ///// Write the question inside double quotes
      answers: {
        a: "It is cheaper",                  ///// Write the option 1 inside double quotes
        b: "It completes the magnetic path",                  ///// Write the option 2 inside double quotes
        c: "It gives mechanical protection to the machine",                  ///// Write the option 3 inside double quotes
        d: "All of these"                   ///// Write the option 4 inside double quotes
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