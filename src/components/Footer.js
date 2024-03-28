import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {

    const [value, setValue] = useState(0);

    return (
        <div className='footer-container'>
            <div className='icons'>
                <Box className='bottom-navigation' sx={{ width: 500 }}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
                        <BottomNavigationAction label="Email" icon={<EmailIcon />} />
                        <BottomNavigationAction label="WhatsApp" icon={<WhatsAppIcon />} />
                    </BottomNavigation>
                </Box>
            </div>
            <div className='nav-column-one'>
                <a>Home</a>
                <a>About</a>
                <a>Skills</a>
            </div>
            <div className='nav-column-two'>
                <a>Projects</a>
                <a>Contact</a>
            </div>
        </div>
    )
}

export default Footer