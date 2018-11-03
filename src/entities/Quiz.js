export default class Quiz {
  constructor(questions = []) {
    this.ended = false;
    this.questions = questions;
  }

  addQuestion(question) {
    this.question.push(question);
  }

  answerQuestion(questionId, answerText) {
    const question = this.questions.find(question => {
      return questionId === question.id;
    });

    question.setAnswer(answerText);
  }

  end() {
    this.ended = true;
  }
}
