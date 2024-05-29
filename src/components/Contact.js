import {
    Grid,
    TextField,
    Button,
    IconButton
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Fab from '@mui/material/Fab';
import '../styles/Contact.css'
import Nav from "./Nav";

const Contact = () => {

    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="contact-parent-container">
            <p className="contact-heading">Contact me</p>
            <div className="contact-child-container">
                <div className="text-container">
                    <p className="contact-text">Got something to say? I'm all ears! Whether it's a question, a suggestion, or just a friendly hello, I'd love to hear from you. Get in touch with me through the channels below!</p>
                    <div className="text-icons">
                        <div style={{display: 'flex'}}>
                            <LocationOnIcon style={{marginTop: '3%', marginRight: '2%', color: '#b7c396'}}/>
                            <p>Delray Beach, FL</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <LocalPhoneIcon style={{marginTop: '3%', marginRight: '2%', color: '#b7c396'}}/>
                            <p>+1 (954) 304 - 7271</p>
                        </div>
                        <div style={{display: 'flex'}}>
                            <EmailIcon style={{marginTop: '3%', marginRight: '2%', color: '#b7c396'}}/>
                            <p>rvassolergallo@gmail.com</p>
                        </div>
                    </div>
                    <IconButton size="small">
                        <a href="https://www.linkedin.com/in/rebeca-vassoler-gallo-06835a264/" target="_blank" rel="noopener noreferrer">
                            <Fab disabled aria-label="LinkedIn page" size="small" style={{backgroundColor:'#b7c396'}}>
                                <LinkedInIcon />
                            </Fab>
                        </a>
                    </IconButton>
                    <IconButton size="small">
                        <a href="https://wa.me/9543047271" target="_blank" rel="noopener noreferrer">
                            <Fab disabled aria-label="WhatsApp link" size="small" style={{backgroundColor:'#b7c396'}}>
                                <WhatsAppIcon />
                            </Fab>
                        </a>
                    </IconButton>
                    <IconButton size="small">
                        <a href="https://github.com/rebs1203" target="_blank" rel="noopener noreferrer">
                            <Fab disabled aria-label="GitHub page" size="small" style={{backgroundColor:'#b7c396'}}>
                                <GitHubIcon />
                            </Fab>
                        </a>
                    </IconButton>
                </div>
                <div className="form-container">
                    <form
                        action="https://formsubmit.co/rvassolergallo@gmail.com"
                        method="POST"
                    >
                        <Grid container spacing={2}>
                                <Grid xs={6} item>
                                    <TextField
                                        placeholder="Enter first name"
                                        label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        name="FirstName"
                                    />
                                </Grid>
                                <Grid xs={6} item>
                                    <TextField
                                        placeholder="Enter last name"
                                        label="Last Name"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        name="LastName"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        type="email"
                                        placeholder="Enter email"
                                        label="Email"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        name="Email"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        type="number"
                                        placeholder="Enter phone number"
                                        label="Phone"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        name="Phone"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        label="Message"
                                        multiline
                                        rows={4}
                                        placeholder="Type your message here"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        name="Message"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        sx={{
                                        mt: "1.5rem",
                                        py: ".65rem",
                                        backgroundColor: "#b7c396",
                                        "&:hover": {
                                            backgroundColor: "#99aa66",
                                        },
                                        }}
                                        >
                                        Submit
                                    </Button>
                                </Grid>
                        </Grid>
                    </form>
                </div>
                <ArrowBackIosNewIcon fontSize="large" sx={{ color: '#fefae0', position: 'fixed', bottom: '50%', left: '94.5%', transform: 'translateX(-50)', marginTop: '10%', ':hover': { color: '#99aa66'}}} onClick={() => {handleNavigate('/Portfolio')}}/>
            </div>
            <Nav iconNav={'contact'} />
        </div>
    )
}

export default Contact