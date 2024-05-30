import '../styles/Home.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav.js';

const HomeBanner = ({iconNav, mediaQuery}) => {

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    const style1 = {
        color: '#fefae0',
        position: 'fixed',
        bottom: '50%',
        left: mediaQuery ? '89%' : '94.5%',
        transform: 'translateX(-50)',
        marginTop: '10%',
        ':hover': { color: '#99aa66'}
    }

    return (
        <div className='parent-container'>
            <div className='child-container'>
                <p className='heading'>Hi, my name is </p>
                <p className='heading' style={{color:'#b7c396'}}>Rebeca Gallo.</p>
                <p className='heading'>Full Stack Developer.</p>
                <p className='text'>Based in sunny South Florida, I'm a freelance developer who's passionate about coding and building sleek, functional websites. With each project, I aim to infuse elegance and modernity into my work, delivering user-friendly experiences that leave a lasting impression.</p>
                <Nav iconNav={iconNav}/>
            </div>
            <ArrowForwardIosIcon fontSize="large" sx={style1} onClick={() => handleNavigate('/About')}/>
        </div>
    )
}

export default HomeBanner

