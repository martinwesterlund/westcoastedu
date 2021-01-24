import CourseModel from "./CourseModel.js";

class CourseListModel {
  constructor() {
    this.courses = [
      new CourseModel(
        1365,
        "Javascript from start to end",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!",
        30,
        []
      ),
      new CourseModel(
        1366,
        "NodeJs for beginners",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!",
        10,
        []
      ),
      new CourseModel(
        1367,
        "Typescript for JavaScript developers",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!",
        20,
        ["Martin"]
      ),
      new CourseModel(
        1368,
        "Web API with NodeJs",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!",
        25,
        []
      ),
      new CourseModel(
        1369,
        "Introduction to programming in Swift",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil minus, aliquid est, esse ab harum accusamus commodi sint quia iusto tempore architecto obcaecati quod vero assumenda nobis officia voluptatem veniam!",
        50,
        []
      ),
    ];
  }
}

export default CourseListModel;
