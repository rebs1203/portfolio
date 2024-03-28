import '../styles/HomeBanner.css'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const HomeBanner = () => {

    const [value, setValue] = useState(0);

    return (
        <div className='parent-container'>
            <div className='child-container'>
                <h1>Hi,</h1>
                <h1 className='intro'>I'm Rebeca</h1>
                <h1 className='intro'>Full Stack Developer</h1>
                <Button className='contact-button' color="secondary" variant='contained'>Contact</Button>
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
            <img src='https://media.greatbigphotographyworld.com/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg' alt='placeholder'/>
        </div>
    )
}

export default HomeBanner

