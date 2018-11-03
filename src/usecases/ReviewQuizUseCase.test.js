import ReviewQuizUseCase from "./ReviewQuizUseCase.js";
import Question from "../entities/Question.js";

class InMemoryQuestionsGateway {
  constructor() {
    this.questions = [];
  }

  allQuestions() {
    return this.questions;
  }

  addQuestion(question) {
    this.questions.push(question);
  }
}

describe("ReviewQuizUseCase", () => {
  let gateway;
  let useCase;

  beforeEach(() => {
    gateway = new InMemoryQuestionsGateway();
    useCase = new ReviewQuizUseCase(gateway);
  });

  it("default view model", () => {
    const viewModel = useCase.viewModel();

    expect(viewModel).toEqual({
      questions: []
    });
  });

  it("has question", () => {
    gateway.addQuestion(new Question(1, "Correct Answer"));

    const viewModel = useCase.viewModel();

    expect(viewModel).toEqual({
      questions: [
        {
          id: 1,
          answer: ""
        }
      ]
    });
  });

  it("set answer to question", () => {
    gateway.addQuestion(new Question(1, "Correct Answer"));

    useCase.answerQuestion(1, "Some text");

    const viewModel = useCase.viewModel();

    expect(viewModel).toEqual({
      questions: [
        {
          id: 1,
          answer: "Some text"
        }
      ]
    });
  });

  it("should check answers", () => {
    gateway.addQuestion(new Question(1, "Correct Answer"));
    gateway.addQuestion(new Question(2, "Answer"));

    useCase.answerQuestion(1, "Correct Answer");
    useCase.answerQuestion(2, "Wrong Answer");

    useCase.checkAnswers();

    const viewModel = useCase.viewModel();

    expect(viewModel).toEqual({
      questions: [
        {
          id: 1,
          answer: "Correct Answer",
          correct: true
        },
        {
          id: 2,
          answer: "Wrong Answer",
          correct: false
        }
      ],
      submitted: true
      // pass: false,
      // score: 0.5
    });
  });

  const assertViewModel = (overrides = {}) => {
    const defaultViewModel = {
      questions: []
    };
    const viewModel = useCase.viewModel();

    expect(viewModel).toEqual({});
  };

  const createViewModel = (overrides = {}) => {};
});
