import chai from "chai";
import CourseController from "../controllers/CourseController.js";
import CourseModel from "../models/CourseModel.js";

describe("CourseController.js", () => {
  let controller = new CourseController(new CourseModel());

  describe("Instantiation", () => {
    it("creates an instance of a CourseController", () => {
      chai.expect(controller).to.exist;
    });

    it("has a CourseModel property", () => {
      chai.expect(controller.model).to.exist;
    });

    it("has a CourseModel that is an object", () => {
      chai.expect(controller.model).to.exist.that.is.an("object");
    });
  });
});
