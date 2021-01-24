import chai from "chai";
import TeacherController from "../controllers/TeacherController.js";
import TeacherModel from "../models/TeacherModel.js";

describe("TeacherController.js", () => {
  let controller = new TeacherController(new TeacherModel());

  describe("Instantiation", () => {
    it("creates an instance of a TeacherController", () => {
      chai.expect(controller).to.exist;
    });

    it("has a TeacherModel property", () => {
      chai.expect(controller.model).to.exist;
    });

    it("has a TeacherModel that is an object", () => {
      chai.expect(controller.model).to.exist.that.is.an("object");
    });
  });
});
