import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const [value, setValue] = useState('one');
    const navigate = useNavigate()

    return (
        <div style={{marginTop: '0.5%'}}>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="Home" label="Home" onClick={navigate('/')} style={{marginLeft: '65%'}}/>
                    <Tab value="About" label="About" onClick={navigate('/About')}/>
                    <Tab value="Skills" label="Skills" onClick={navigate('/Skills')}/>
                    <Tab value="Projects" label="Projects" onClick={navigate('/Projects')}/>
                    <Tab value="Contact" label="Contact" onClick={navigate('/Contact')}/>
                </Tabs>
            </Box>
        </div>
    )
}

export default NavBar