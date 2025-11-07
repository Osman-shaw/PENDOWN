import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const NoteCard = ({note}) => {
    
  return (
    <div className="noteCard">
            <h2 className="title">
                <Link to={`/details/${note._id}`} style={{textDecoration: 'none', color: '#f5400f'}}>{note.title}</Link>
                <Link to={`/details/${note._id}`} style={{color: '#f5400f'}}><i className="fa-solid fa-ellipsis-vertical"></i></Link>
            </h2>
            <p className="details">
                {note.details}
            </p>
            </div>    
        );
    };
    
    NoteCard.propTypes = {
        note: PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            details: PropTypes.string.isRequired,
        }).isRequired,
    };
    
 
   export default NoteCard; 