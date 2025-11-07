// importing models
import Note from '../models/noteModel.js';


const get_all_notes = (req, res) => {
  try {
    const notes = Note.find();
    if (notes.length > 0) {
      res.json({
        msg: 'All notes have been fetched successfully!',
        content: notes,
      });
    } else {
      res.json({ msg: 'No notes to show!' });
    }
  } catch (error) {
    res.json({ msg: error.message });
  }
};


//  adding new notes to the mongodb database
const add_note = async (req, res) => {
    const note = new Note({
        title: req.body.title,
        content: req.body.content,
    });
    try {
        const savedNote = await note.save();
        res.json({
        msg: 'Your note was saved successfully!',
        content: savedNote,
        });
    } catch (error) {
        res.json({ msg: error.message });
    }
    };


    // to retriev single note by its id
    const get_one_note = (req, res) => {
        const id = req.params.id;
        Note.findById(id)
          .then((result) => {
            if (result != null) {
              res.json({
                msg: "The note was fetched successfully!",
                content: result,
              });
            } else {
              res.json({ msg: "This note doesn't exits!" });
            }
          })
          .catch((error) => res.json({ msg: error.message }));
      };
      
      
    //   edit an existing note
    const update_note = (req, res) => {
        const id = req.params.id;
        Note.findByIdAndUpdate(id, req.body, { new: true }).then((result) => {
          if (result != null) {
            res.json({
              msg: "The note was updated successfully!",
              content: result,
            });
          } else {
            res.json({ msg: "This note doesn't exist!" });
          }
        }).catch((error) => res.json({ msg: error.message }));
        };

        // delete a note from the database

        const delete_note = (req, res) => {
            const id = req.params.id;
            Note.findByIdAndDelete(id)
              .then((result) => {
                if (result != null) {
                  res.json({
                    msg: "The note was deleted successfully!",
                    content: result,
                  });
                } else {
                  res.json({ msg:"This note doesn't exist!" });
                }
              })
              .catch((error) => res.json({ msg: error.message }));
          }
        //   export modules

       module.exports = { get_all_notes, add_note, get_one_note, update_note, delete_note };