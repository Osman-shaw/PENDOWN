import { Link } from "react-router-dom";
// import Button from '@mui/material/Button';

const AddNote = () => {
  return (
    <Link to={"/add"}>
      <button className="addNote">Add Note</button>
    </Link>
  );
};


export default AddNote;