import chai from "chai";
import CourseModel from "../models/CourseModel.js";

describe("CourseModel.js", () => {
  let model = new CourseModel(1, "Test Title", "Test Description", 80, []);

  describe("Instantiation", () => {
    it("creates an instance of a Course model", () => {
      chai.expect(model).to.exist;
    });

    it("should be an object", () => {
      chai.expect(model).to.be.an("object");
    });

    it("includes all properties", () => {
      chai
        .expect(model)
        .to.have.all.keys([
          "id",
          "title",
          "description",
          "duration",
          "students",
        ]);
    });

    it("has an id that is a number", () => {
      chai.expect(model).to.have.a.property("id").that.is.an("number");
    });
    it("has a property title that is a string", () => {
      chai.expect(model).to.have.a.property("title").that.is.an("string");
    });
    it("has a property duration that is a number", () => {
      chai.expect(model).to.have.a.property("duration").that.is.an("number");
    });
    it("has a property students that is an array", () => {
      chai.expect(model).to.have.a.property("students").that.is.an("array");
    });
  });
});
