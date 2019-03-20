

let score = 0
let currNum = 0
let showQuest;
let questions = [
    {q:'Strongest Pokemon',
     answers: {
         a: 'Dragonite',
         b: 'Kobe',
         c: 'Mew',
         d: 'Chuck Norris'
     },
    correct: 'a'},
    {q:'Weakest Pokemon',
     answers: {
         a: 'Dragonite',
         b: 'Ditto',
         c: 'Mew',
         d: 'Magikarp'
     }, correct: 'd'},
     {q:'Which is a Water Pokemon',
     answers: {
         a: 'Dragonite',
         b: 'Lapras',
         c: 'Mew',
         d: 'Chuck Norris'
     }, correct: 'b'
    }
     
]
// display all of questionare 
const getTrivia = () =>{
   document.getElementById('questions').innerHTML = questions[currNum].q
   document.getElementById('answer1').innerHTML = 
   `<input class="hotog" type="radio" name="answer1" value="a">${questions[currNum].answers.a}`
   document.getElementById('answer2').innerHTML = 
   `<input class="hotog" type="radio" name="answer2" value="b">${questions[currNum].answers.b}`
   document.getElementById('answer3').innerHTML = 
   `<input class="hotog" type="radio" name="answer3" value="c">${questions[currNum].answers.c}`
   document.getElementById('answer4').innerHTML = 
   `<input class="hotog" type="radio" name="answer4" value="d">${questions[currNum].answers.d}`
   document.getElementById('answer').innerHTML = `<button id="finalAns" type="submit">Submit</button>`
   console.log(questions[currNum].answers.a)
//setting a setInterval to display the next question after 30secs
   showQuest = setInterval(nextQuest, 30000)
   document.getElementById('timer').innerHTML = showQuest
   console.log(showQuest)
// if user gets question correct add to score and 
}
// submit button to check answer
const checkAnswer= e =>{
    if (e.target.className === 'a'){
        console.log(e.target)
    } else{
        console.log(e.target)
    }
}
let nextQuest= () =>{
    currNum++
    getTrivia()
}




// question objects
// [
//  { questionId, isCorrect}
// ]

// render questions
// create question tag (What is something?)
// render choices (data-value = true or false)

// Answer question
// timed answer
// needs a submit button for answer
// if answer is correct or incorrect

// whenver we click a choice
// set the clicked one to look different
// set all others to go back to default
// modify the question object to have value for whether they answered right or wrong

// whenever finish game button is clicked OR the timer runs out
// iterate over questions, count up isCorrect



