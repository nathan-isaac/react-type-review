export default class Quiz {
  constructor(questions = []) {
    this.ended = false;
    this.questions = questions;
  }

  addQuestion(question) {
    this.questions.push(question);
  }

  answerQuestion(questionId, answerText) {
    const question = this.questions.find(question => {
      return questionId === question.id;
    });

    question.setAnswer(answerText);
  }

  submit() {
    this.ended = true;
  }
}
