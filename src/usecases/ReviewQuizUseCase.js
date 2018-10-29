
// entities 

class Question {
    constructor(id, correctAnswer = null) {
        this.id = id;
        this.correctAnswer = correctAnswer;
        this.answer = null;
        this.image_url = null;
        this.isAnswerVisible = false;
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

class Quiz {
    constructor() {
        this.questions = [];
    }

    addQuestion(question) {
        this.question.push(question);
    }
}

class Session {
    constructor() {
        this.quiz = new Quiz();
        this.startDateTime = new Date();
        this.endDateTime = new Date();
    }

    addQuestions(questions) {
        questions.forEach(question => {
            this.quiz.addQuestion(question);
        });
    }

    answerQuestion(questionId, answer) {
       this.quiz.answerQuestion(questionId, answer);
    }

    start() {
        this.startDateTime = new Date();
    }

    end() {
        this.endDateTime = new Date();
    }
}

// use case code

const questions = [
    new Question(1, 'Arial'),
    new Question(2, 'Comic Sans'),
    new Question(3, 'Helvetica'),
];

class ReviewQuizSessionUseCase {
    constructor() {
        this.session = new Session(); 
        this.session.addQuestions(questions);
        this.session.start();
    }

    checkAnswers() {
        this.session.end();
    }

    reset() {
        this.session.reset();
    }

    answerQuestion(questionId, answerText) {
        this.session.answerQuestion(questionId, answerText);
    }

    viewModel() {
        const questions = this.session.questions.map(question => {
            return {
                id: question.id,
                isCorrect: question.isCorrect(),
                showImage: question.showImage,
            }
        });

        const session = {
            questions: questions,
        };

        return session;
    }
}