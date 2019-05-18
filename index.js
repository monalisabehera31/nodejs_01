const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json());
const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2'},
  { id: 3, name: 'course3' }
];

app.get("/", (req, res) => {
  res.send("hello world!!!");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("The course with given Id was not found ");
  res.send(course);
});
app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.query);
});
app.post("/api/courses", (req, res) => {
const schema={
name: Joi.String().min(3).required()
};
 const result=Joi.validate(req.body,schema)
 console.log(result);
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`listening to port ${port}...`));
