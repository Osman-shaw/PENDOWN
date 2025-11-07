import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DetailCard from "../components/DetailCard";

const NoteDetails = () => {
    const { id } = useParams();
    const [note, setNote] = useState({
        id: "",
        title: "",
        details: "",
    });
    useEffect(() => {
        axios
            .get(`https://mern-notes-backend-5z2j.onrender.com/noteDetails/${id}`)
            .then((res) => {
                setNote(res.data.content);
            })
            .catch((err) => console.log(err));
    }, [id]);
    return (
        <div className="container">
            <DetailCard note={note} />
        </div>
    );
}
export default NoteDetails;