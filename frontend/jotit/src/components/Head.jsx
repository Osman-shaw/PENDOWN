import {Link} from 'react-router-dom';
// import Button from '@mui/material/Button'

const Head = () => {

    const linkStyle = {
        color: 'white',
        textDecoration: '#D3D1CB',
    }

   
    return (
        <nav>
         <div className="logo">
                <Link to={'/'}  style={linkStyle}><h2>JotIt</h2></Link>
             <div className='action'>
              {/* <button>logout</button> */}
             </div>
        </div>
       </nav>
    );
}


export default Head;