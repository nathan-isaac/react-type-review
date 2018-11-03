
import Quiz from '../entities/Quiz.js';

export default class ReviewQuizSessionUseCase {
    constructor(questionGateway) {
        const questions = questionGateway.allQuestions();
        this.quiz = new Quiz(questions); 
    }

    // quiz
    checkAnswers() {
    }

    // quiz
    toggleAnswers() {
        this.quiz.toggleAnswers();
    }

    // quiz
    reset() {
        this.quiz.reset();
    }

    // quiz
    answerQuestion(questionId, answerText) {
        this.quiz.answerQuestion(questionId, answerText);
    }

    // type shipped with quiz
    viewModel() {
        const questions = this.quiz.questions.map(question => {
            if (this.quiz.ended) {

            }


            return {
                id: question.id,
                answer: question.answer,
                isCorrect: question.isCorrect(),
                // showImage: question.showImage,
                imageUrl: question.imageUrl,
            }
        });

        const session = {
            questions: questions,
        };

        return session;
    }
}