import Fab from '@mui/material/Fab';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmailIcon from '@mui/icons-material/Email';
import { IconButton } from '@mui/material';
import '../styles/Nav.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Nav = ({iconNav}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (iconNav) {
            document.querySelector(`#${iconNav}`).classList.add('selected')
        } else {
            document.querySelector(`#${iconNav}`).classList.remove('selected')
        }

        if (iconNav === 'home') {
            document.querySelector('#navigation').classList.add('navigation-row')
        } else {
            document.querySelector('#navigation').classList.add('navigation-column')
        }
    }, [])

    const handleNavigate = (path) => {
        navigate(path);
    };


    return (
        <div id='navigation'>
            <IconButton onClick={() => handleNavigate('/')}>
                <Fab disabled aria-label="like" className='nav-icon' id='home'>
                    <HomeIcon />
                </Fab>
            </IconButton>
            <IconButton onClick={() => handleNavigate('/About')}>
                <Fab disabled aria-label="like" className='nav-icon' id='about'>
                    <PersonIcon />
                </Fab>
            </IconButton>
            <IconButton onClick={() => handleNavigate('/Portfolio')}>
                <Fab disabled aria-label="like" className='nav-icon' id='portfolio'>
                    <BusinessCenterIcon />
                </Fab>
            </IconButton>
            <IconButton onClick={() => handleNavigate('/Contact')}>
                <Fab disabled aria-label="like" className='nav-icon' id='contact'>
                    <EmailIcon />
                </Fab>
            </IconButton>
        </div>
    )
}

export default Nav