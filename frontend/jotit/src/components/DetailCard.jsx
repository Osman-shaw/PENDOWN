import swal from 'sweetalert2';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
import PropTypes from "prop-types";

const DetailCard = ({note}) => {
    const btnStyle = {
        padding: "0.5em 1em",
        fontSize: "1.1em",
        letterSpacing: "1px",
        background: "linear-gradient(rgb(54, 34, 228),rgb(54, 34, 228))",
        color: "#f4f0e4",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        textDecoration: "none",
    };
    const navigate = useNavigate();
    const deleteNote = () => {
        swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`https://mern-notes-backend-5z2j.onrender.com/deleteNote/${note._id}`)
                    .then(() => {
                        navigate("/");
                        swal.fire(
                            "Deleted!",
                            "Your Note has been deleted.",
                            "success"
                        );
                    })
                    .catch((err) => console.error(err));
                }
            });
        };
    
        DetailCard.propTypes = {
            note: PropTypes.shape({
                _id: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                details: PropTypes.string.isRequired,
            }).isRequired,
        };

    return (
        <div className="note-details">
            <h1 className="title">{note.title}</h1>
            <p className="details">{note.details}</p>
            <div className="action">
                <Link style={btnStyle} to={`/edit/${note._id}`}>
                    {" "}
                    Edit
                </Link>
                <button style={btnStyle} onClick={deleteNote}>
                    Delete
                </button>
            </div>
        </div>
    );
};
    export default DetailCard;
