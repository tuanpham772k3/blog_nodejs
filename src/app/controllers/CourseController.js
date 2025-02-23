const Course = require("../model/course");
const { mongooseToObject } = require("../../util/mongoose");
const course = require("../model/course");

class CourseController {
  //[GET] /show
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  //[GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }
  //[POST] /courses/store
  store(req, res, next) {
    const formData = req.body;
    formData.image = `https://i3.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => {});
  }
}

module.exports = new CourseController();
