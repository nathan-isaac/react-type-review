import Quiz from "../../classes/Quiz.js"
import jsonData from "../../source-data.js";

class Quiz {
  constructor(questions = []) {
      // questions = jsonData
  }

// interface for a quiz:
  IQuiz = {
    id: question.id,
    isCorrect: question.isCorrect(),
    showImage: question.showImage,
    imageUrl: question.imageUrl,
    answer: question.answer,
  }

  get quiz() {
    // randomizes questions
    // builds quiz object form Quiz class (which would be imported)
  }

  end() {
    this.ended = true;
  }

  reset() {
    this.quiz.reset();
  }

  // quiz.js
  addQuestion(question) {
    this.question.push(question);
  }

  // quiz.js
  answerQuestion(questionId, answerText) {
    const question = this.questions.find(question => {
      return questionId === question.id;
    });

    question.setAnswer(answerText);
  }

  checkAnswers(answers) {

  }

  // to go in application view
  toggleAnswers() {
    this.quiz.toggleAnswers();
  }
}