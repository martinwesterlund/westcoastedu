import chai from "chai";
import TeacherModel from "../models/TeacherModel.js";

describe("TeacherModel.js", () => {
  let model = new TeacherModel(
    1,
    "test@mail.com",
    "qwerty123",
    "Namn",
    "Namnsson",
    ["JavaScript", "Pascal", "C++"]
  );

  describe("Instantiation", () => {
    it("creates an instance of a Teacher model", () => {
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
          "email",
          "password",
          "firstName",
          "lastName",
          "competences",
        ]);
    });

    it("has an id that is a number", () => {
      chai.expect(model).to.have.a.property("id").that.is.a("number");
    });
    it("has a property email that is a string", () => {
      chai.expect(model).to.have.a.property("email").that.is.a("string");
    });
    it("has a property password that is a string", () => {
      chai.expect(model).to.have.a.property("password").that.is.a("string");
    });
    it("has a property firstName that is a string", () => {
      chai.expect(model).to.have.a.property("firstName").that.is.a("string");
    });
    it("has a property lastName that is a string", () => {
      chai.expect(model).to.have.a.property("lastName").that.is.a("string");
    });
    it("has a property competences that is an array", () => {
      chai.expect(model).to.have.a.property("competences").that.is.an("array");
    });
  });
});
