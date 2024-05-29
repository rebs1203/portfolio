import '../styles/About.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import DownloadIcon from '@mui/icons-material/Download';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav.js';



const About = () => {

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="about-parent-container">
            <div className="about-child-container">
                <p className='about-heading'>About me</p>
                <p className='about-text'>Hello World! I’m Rebeca, a FullStack Web Developer based in sunny South Florida. With a passion for crafting immersive digital experiences, I specialize in creating websites from top to bottom, inside and out!</p>
                <p className='about-text'>My journey into the world of web development began with a non-traditional background, which presented its own set of challenges. However, fueled by ambition and a relentless drive to learn and improve my skills, I've navigated through obstacles to emerge as the developer I am today.</p>
                <p className='about-text'>As your dedicated developer, I bring not only technical expertise but also a fierce determination to see your project succeed. Whether it's building a stunning user interface or optimizing backend functionality, I pour my ambition into every aspect of the development process. Together, let's take your project to new heights and achieve the success it deserves.</p>
                <Nav iconNav={'about'} />
                <a href='https://docs.google.com/document/d/1VYjcF44REHhUXju2gKTpYjTHRHNmVEdQ1dwqovT0tPU/edit?usp=drive_link' target='_blank'><Button variant="contained" style={{backgroundColor: '#b7c396', marginRight: '18%', marginTop: '2%'}}><DownloadIcon />  Download CV</Button></a>
                <p className='heading-timeline'>My Timeline</p>
                <div className='timeline'>
                    <div className='timeline-left'>
                        <Timeline>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot style={{backgroundColor:'#b7c396'}}>
                                    <BusinessCenterIcon/>
                                </TimelineDot>
                                <TimelineConnector sx={{bgcolor:'#b7c396'}}/>
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <p style={{fontFamily: 'Poppins', fontSize: '0.8em', color: 'grey'}}>April 23/ Present</p>
                                    <p style={{fontFamily: 'Poppins', fontWeight: '700'}}>
                                    Web Developer
                                    </p>
                                    <p style={{fontFamily: 'Poppins', fontSize: '0.8em', color: 'grey'}}>Freelance</p>
                                    <p style={{fontFamily: 'Poppins', width: '60%'}}>Focused on React fundamentals, project management, and teamwork skills. Equipped with a robust skill set in React.js development and positioned as a competent professional in web development.</p>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot style={{backgroundColor:'#b7c396'}}>
                                    <BusinessCenterIcon/>
                                </TimelineDot>
                                <TimelineConnector sx={{bgcolor:'#b7c396'}}/>
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <p style={{fontFamily: 'Poppins', fontSize: '0.8em', color: 'grey'}}>March 24/ May 24</p>
                                    <p style={{fontFamily: 'Poppins', fontWeight: '700'}}>
                                    Practicum Team Member
                                    </p>
                                    <p style={{fontFamily: 'Poppins', fontSize: '0.8em', color: 'grey'}}>Code The Dream</p>
                                    <p style={{fontFamily: 'Poppins', width: '60%'}}>As an integral member of a practicum team, I fulfill the role of a Full Stack Web Developer, proficiently utilizing React.js for front-end development, Node.js for back-end operations, and MongoDB for database management. Collaborating with a team of five members, we collectively undertake the development of a comprehensive full stack application, ensuring project success through diligent mentorship and evaluation.</p>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot style={{backgroundColor:'#b7c396'}}>
                                    <BusinessCenterIcon/>
                                </TimelineDot>
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <p style={{fontFamily: 'Poppins', fontSize: '0.8em', color: 'grey'}}>May 23/ Present</p>
                                    <p style={{fontFamily: 'Poppins', fontWeight: '700'}}>
                                    Volunteer Staff
                                    </p>
                                    <p style={{fontFamily: 'Poppins', fontSize: '0.8em', color: 'grey'}}>GCode</p>
                                    <p style={{fontFamily: 'Poppins', width: '60%'}}>Facilitate weekly office hours to mentor students, emphasizing a dedication to education and fostering academic achievement. Additionally, volunteer for tasks within the non-profit, supporting its mission of empowering women and non-binary individuals of color in tech.</p>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                    <div className='timeline-right'>
                    <Timeline>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot style={{backgroundColor:'#b7c396'}}>
                                    <SchoolIcon/>
                                </TimelineDot>
                                <TimelineConnector sx={{bgcolor:'#b7c396'}}/>
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <p style={{fontFamily: 'Poppins', fontSize: '0.8em', color: 'grey'}}>Sep 23/ Feb 24</p>
                                    <p style={{fontFamily: 'Poppins', fontWeight: '700'}}>
                                    React.js
                                    </p>
                                    <p style={{fontFamily: 'Poppins', fontSize: '0.8em', color: 'grey'}}>Code The Dream</p>
                                    <p style={{fontFamily: 'Poppins', width: '60%'}}>Focused on React fundamentals, project management, and teamwork skills. Equipped with a robust skill set in React.js development and positioned as a competent professional in web development.</p>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot style={{backgroundColor:'#b7c396'}}>
                                    <SchoolIcon/>
                                </TimelineDot>
                                <TimelineConnector sx={{bgcolor:'#b7c396'}}/>
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <p style={{fontFamily: 'Poppins', fontSize: '0.8em', color: 'grey'}}>Sep 23/ Feb 24</p>
                                    <p style={{fontFamily: 'Poppins', fontWeight: '700'}}>
                                    Node/Express.js
                                    </p>
                                    <p style={{fontFamily: 'Poppins', fontSize: '0.8em', color: 'grey'}}>Code The Dream</p>
                                    <p style={{fontFamily: 'Poppins', width: '60%'}}>Focused on advanced Node.js/Express concepts including back-end development, API creation, and MongoDB integration. Hands-on experience with creating and testing APIs, and exploring MongoDB for data persistence and authentication. Expanded skill set to include proficient back-end development with Node.js and MongoDB.</p>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot style={{backgroundColor:'#b7c396'}}>
                                    <SchoolIcon/>
                                </TimelineDot>
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <p style={{fontFamily: 'Poppins', fontSize: '0.8em', color: 'grey'}}>Jan 23/ April 23</p>
                                    <p style={{fontFamily: 'Poppins', fontWeight: '700'}}>
                                    Intro to Web Dev
                                    </p>
                                    <p style={{fontFamily: 'Poppins', fontSize: '0.8em', color: 'grey'}}>GCode</p>
                                    <p style={{fontFamily: 'Poppins', width: '60%'}}>As a participant in GCode, an innovative initiative connecting women and non-binary people of color to tech opportunities, I acquired expertise in HTML5, CSS, and JavaScript. This knowledge empowered me to create and deploy accessible websites.</p>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
            </div>
            <ArrowForwardIosIcon fontSize="large" sx={{ color: '#fefae0', position: 'fixed', bottom: '50%', left: '94.5%', transform: 'translateX(-50)', marginTop: '10%', ':hover': { color: '#99aa66'}}} onClick={() => {handleNavigate('/Portfolio')}}/>
            <ArrowBackIosNewIcon fontSize="large" sx={{ color: '#fefae0', position: 'fixed', bottom: '44%', left: '94.5%', transform: 'translateX(-50)', marginTop: '10%', ':hover': { color: '#99aa66'}}} onClick={() => {handleNavigate('/')}}/>
        </div>
    )
}

export default About