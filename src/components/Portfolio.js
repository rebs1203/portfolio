import '../styles/Portfolio.css'
import { Paper, Box, IconButton } from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import DevicesIcon from '@mui/icons-material/Devices';
import Fab from '@mui/material/Fab';
import Nav from './Nav'
import todoApp from '../img/TodoApp.png'
import advocaciaGallo from '../img/AdvocaciaGallo.png'
import ourWeatherApp from '../img/OurWeatherApp.png'
import petPals from '../img/PetPals.png'
import recipeBlog from '../img/RecipeBlog.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Portfolio = () => {

    const [hovered, setHovered] = useState(null)
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    const urlObject = [
        {
            img: petPals,
            github:'https://github.com/Code-the-Dream-School/ffprac-team3-back',
            website: 'https://github.com/Code-the-Dream-School/ffprac-team3-front'
        },
        {
            img: ourWeatherApp,
            github:'https://github.com/Mrmckney/weather-app',
            website: 'https://www.ourweatherapp.com'
        },
        {
            img: recipeBlog,
            github:'https://github.com/rebs1203/recipe-blog',
            website: 'https://recipe-blog-react.onrender.com/'
        },
        {
            img: todoApp,
            github:'https://github.com/rebs1203/react-project-ctd',
            website: 'https://main.d3d16i8lgoyqnj.amplifyapp.com/'
        },
        {
            img: advocaciaGallo,
            github:'https://github.com/rebs1203/advocacia-gallo-react',
            website: 'https://main.d1oprg7qntid5l.amplifyapp.com'
        }
    ]

    return (
        <div className="portfolio-parent-container">
            <div className="portfolio-child-container">
                <p className="portfolio-heading">My Portfolio</p>
                <p className="portfolio-text">Take a look at my previous projects.</p>
                <div className='projects-container'>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            width: '75%',
                            justifyContent: 'center',
                            marginLeft: '3%',
                            marginBottom: '7%',
                            '& > :not(style)': {
                                m: 3,
                                width: 228,
                                height: 228,
                            },
                        }}>
                            {urlObject.map((item, index)=> {
                            return (
                                <Paper
                                    elevation={12}
                                    style={{
                                        backgroundImage: `url(${item.img})`,
                                        backgroundSize: 'cover',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}
                                    className='transition'
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: 'transparent',
                                            transition: 'all 0.25s ease-in-out',
                                        }}
                                        
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = '#99aa66';
                                            setHovered(index)
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                            setHovered(null)
                                        }}
                                    >
                                        <IconButton size="small" style={hovered !== index ? { display: 'none' } : {textAlign: 'center', marginTop: '38%'}}>
                                            <a href={item.github} target="_blank" rel="noopener noreferrer">
                                                <Fab disabled aria-label="Github link to code" size="medium" style={{ backgroundColor: '#b7c396'}}>
                                                    <GitHubIcon />
                                                </Fab>
                                            </a>
                                        </IconButton>
                                        <IconButton size="small" style={hovered !== index ? { display: 'none' } : {textAlign: 'center', marginTop: '38%'}}>
                                            <a href={item.website} target="_blank" rel="noopener noreferrer">
                                                <Fab disabled aria-label="link to website" size="medium" style={{ backgroundColor: '#b7c396' }}>
                                                    <DevicesIcon />
                                                </Fab>
                                            </a>
                                        </IconButton>
                                    </div>
                                </Paper>

                            
                            
                            )})}
                    </Box>
                </div>
                <Nav iconNav={'portfolio'} />
            </div>
            <ArrowForwardIosIcon fontSize="large" sx={{ color: '#fefae0', position: 'fixed', bottom: '50%', left: '94.5%', transform: 'translateX(-50)', marginTop: '10%', ':hover': { color: '#99aa66' } }} onClick={() => { handleNavigate('/Contact') }} />
            <ArrowBackIosNewIcon fontSize="large" sx={{ color: '#fefae0', position: 'fixed', bottom: '44%', left: '94.5%', transform: 'translateX(-50)', marginTop: '10%', ':hover': { color: '#99aa66' } }} onClick={() => { handleNavigate('/About') }} />
        </div>
    )
}

export default Portfolio