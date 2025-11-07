import { useState,useEffect } from "react";
import axios from "axios";
import AddNote from "../components/AddNote";
import NoteCard from "../components/NoteCard";
import Typography  from "@mui/material/Typography";

const Home = () => {
    const messageStyle = {
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        height: "50vh",
        color: "#aaa",
        letterSpacing: "1px",
        fontSize: "1.3em",
    };
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        const fetchNotes = () => {
            axios.get("https://mern-notes-backend-5z2j.onrender.com/allNotes")
                .then((res) => {
                    if (res.data.content) {
                        setNotes(res.data.content);
                    } else {
                        setNotes([]);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchNotes();
    }, []);
    return (
        <div>
            <Typography className="headline">
                Save Your <span>Notes</span> Here
            </Typography>

            <div className="cards">
                {notes && notes.length > 0 ? (
                    notes.map((note) => (
                        <NoteCard key={note._id} note={note} />
                    ))
                ) : (
                    <Typography style={messageStyle}>No Notes To Show</Typography>
                )}
            </div>
            <AddNote />
        </div>
    );
}

export default Home;