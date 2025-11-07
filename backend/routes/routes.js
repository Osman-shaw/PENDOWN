// import libraries
import { Router } from 'express';
const router = Router();

// import controllers
import noteController from '../controllers/noteController';
import messageController from '../controllers/messageController';

// feedbackroutes
router.post('/submitFeedback', messageController.submit_feedback);

// note routes
router.get('/allNotes', noteController.get_all_notes);
router.post('/addNote', noteController.add_note);
router.get('/noteDetails/:id', noteController.get_one_note);
router.patch('/updateNote/:id', noteController.update_note);
router.delete('/deleteNote/:id', noteController.delete_note);

// export
module.exports = router;