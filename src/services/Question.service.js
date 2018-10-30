export class QuestionService {
  constructor() {
  }

  IQuestion = {
    id: string,
    correctAnswer: string,
    imageUrl: string,
    answer: string = '',
    isAnswerVisible: boolean = false
  }

  setAnswer(answer) {
      this.answer = answer;
  }

  showAnswer() {
      this.isAnswerVisible = true;
  }

  isCorrect() {
      const answer = this.answer.toLowerCase().trim();
      const correctAnswer = this.correctAnswer.toLowerCase().trim();

      return answer === correctAnswer;
  }
}