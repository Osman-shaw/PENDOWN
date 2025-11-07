// import models
import Message from "../models/message";
// controllers
// submit message through a form
const submit_feedback = (req, res) => {
  let message = new Message(req.body);
  message
    .save()
    .then((result) => {
      res.json({ msg: "Thank you for your feedback!" });
    })
    .catch((error) => res.json({ msg: error.message }));
};
// exports
module.exports={ submit_feedback };