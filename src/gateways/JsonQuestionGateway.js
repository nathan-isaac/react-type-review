import jsonData from "../source-data.js";
import { Question } from "../entities/Question.js";

export default class JsonQuestionGateway {
  allQuestions() {
    return jsonData.map((card, index) => {
      return new Question(index, card.name, card.img);
    });
  }
}