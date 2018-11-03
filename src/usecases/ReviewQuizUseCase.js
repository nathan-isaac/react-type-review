import Quiz from "../entities/Quiz.js";

export default class ReviewQuizSessionUseCase {
  constructor(questionGateway) {
    this.gateway = questionGateway;
    this.createQuiz();
  }

  createQuiz() {
    const questions = this.gateway.allQuestions();
    this.quiz = new Quiz(questions);
  }

  answerQuestion(questionId, answerText) {
    this.quiz.answerQuestion(questionId, answerText);
  }

  checkAnswers() {
    this.quiz.submit();
  }

  reset() {
    this.createQuiz();
  }

  viewModel() {
    const questions = this.quiz.questions.map(question => {
      return {
        id: question.id,
        answer: question.answer,
        isCorrect: question.isCorrect(),
        imageUrl: question.imageUrl
      };
    });

    const session = {
      questions: questions,
      submitted: this.quiz.ended,
    };

    return session;
  }
}
