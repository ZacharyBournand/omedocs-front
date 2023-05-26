// Import React
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Import COMPONENTS
import Header from 'src/components/Header';
import Chatbox from 'src/components/Chatbot';
import Footer from 'src/components/Footer';

// Import from MATERIAL-UI

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Lambert from 'src/assets/img/team-id/lambert.jpg';
import Geoffrey from 'src/assets/img/team-id/goeffrey.jpg';
import Francois from 'src/assets/img/team-id/francois.jpg';
import Zachary from 'src/assets/img/team-id/zachary.png';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grow from '@material-ui/core/Grow';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import SendIcon from '@material-ui/icons/Send';

// Import team DATA
import teamData from 'src/data/teamData.json';

// Import CSS
import './styles.scss';

// Mise en place des styles MATERIAL-UI
const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    margin: '.4em',
  },
  link: {
    color: '#0368A3',
  },
  btn: {
    color: '#0368A3',
  },
  btnSend: {
    color: 'white',
    width: '150px',
    fontSize: '1rem',
    padding: '1rem',
    borderRadius: '15px',
    background: '#008DBA',
    '&:hover': {
      background: '#0368A3',
      color: '#FFF',
    },
  },
  btnBox: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const TeamPage = ({ sendMail, email, message, firstName, lastName, changeInputValue }) => {
  const classes = useStyles();

  const handlerOnChange = (event) => {
    changeInputValue(event.target.name, event.target.value);
  };

  const handlerOnSubmit = (event) => {
    event.preventDefault();
    sendMail();
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  const annimation = true;
  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="space-between" minHeight="100vh">
        <Header />
        <Box width="100%" display="flex" id="body">
          <Box
            height="100%"
            width="100%"
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            className="main-box"
          >
            <h1 className="main-box__main-title">Qui se cache derrière O'Medocs ?</h1>
            <Box display="flex" flexWrap="wrap" p={4} justifyContent="center">
              <Grow
                in={annimation}
                style={{ transformOrigin: '0 0 0' }}
                {...(annimation ? { timeout: 1000 } : {})}
              >
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="img-product-owner"
                      height="300"
                      image={Lambert}
                      title="lambert-img"
                      className={classes.img}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5" align="center">
                        Lambert
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        align="center"
                      >
                        Product Owner
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.btnBox}>
                    <Button
                      size="small"
                      target="blank"
                      href="https://github.com/LambertGuastavino"
                      color="primary"
                      className={classes.btn}
                      startIcon={<GitHubIcon />}
                    >
                      GitHub
                    </Button>
                    <Button
                      size="small"
                      target="blank"
                      href="https://www.linkedin.com/in/lambert-guastavino-b8a811192/"
                      color="primary"
                      className={classes.btn}
                      startIcon={<LinkedInIcon />}
                    >
                      LinkeDin
                    </Button>
                  </CardActions>
                </Card>
              </Grow>
              <Grow
                in={annimation}
                style={{ transformOrigin: '0 0 0' }}
                {...(annimation ? { timeout: 1500 } : {})}
              >
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="img-lead-dev-front"
                      height="300"
                      image={Francois}
                      title="francois-img"
                      className={classes.img}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5" align="center">
                        François
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        align="center"
                      >
                        Lead Dev Front
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.btnBox}>
                    <Button
                      size="small"
                      target="blank"
                      color="primary"
                      href="https://github.com/fmarc39"
                      startIcon={<GitHubIcon />}
                      className={classes.btn}
                    >
                      GitHub
                    </Button>
                    <Button
                      size="small"
                      target="blank"
                      href="https://www.linkedin.com/in/françois-marc-1a241661"
                      color="primary"
                      startIcon={<LinkedInIcon />}
                      className={classes.btn}
                    >
                      LinkeDin
                    </Button>
                  </CardActions>
                </Card>
              </Grow>
              <Grow
                in={annimation}
                style={{ transformOrigin: '0 0 0' }}
                {...(annimation ? { timeout: 2000 } : {})}
              >
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="img-git-master"
                      height="300"
                      image={Geoffrey}
                      title="lambert-img"
                      className={classes.img}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5" align="center">
                        Geoffrey
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        align="center"
                      >
                        Git Master, Dev Full-Stack
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.btnBox}>
                    <Button
                      size="small"
                      target="blank"
                      color="primary"
                      href="https://github.com/Geoffrey-Maillot"
                      startIcon={<GitHubIcon />}
                      className={classes.btn}
                    >
                      GitHub
                    </Button>
                    <Button
                      size="small"
                      target="blank"
                      href="https://www.linkedin.com/in/geoffrey-maillot-06a1411bb/"
                      color="primary"
                      startIcon={<LinkedInIcon />}
                      className={classes.btn}
                    >
                      LinkeDin
                    </Button>
                  </CardActions>
                </Card>
              </Grow>
              <Grow
                in={annimation}
                style={{ transformOrigin: '0 0 0' }}
                {...(annimation ? { timeout: 2500 } : {})}
              >
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="img-lead-dev-back"
                      height="300"
                      image={Zachary}
                      title="zachary-img"
                      className={classes.img}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h5" align="center">
                        Zachary
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        align="center"
                      >
                        Scrum Master, Lead Dev Back
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.btnBox}>
                    <Button
                      size="small"
                      target="blank"
                      color="primary"
                      startIcon={<GitHubIcon />}
                      className={classes.btn}
                      href="https://github.com/ZacharyBournand"
                    >
                      GitHub
                    </Button>
                    <Button
                      size="small"
                      target="blank"
                      color="primary"
                      startIcon={<LinkedInIcon />}
                      className={classes.btn}
                      href="https://www.linkedin.com/in/zachary-bournand-6908a5168/"
                    >
                      LinkeDin
                    </Button>
                  </CardActions>
                </Card>
              </Grow>
            </Box>
            <h1 style={{ marginBottom: '2rem' }} className="main-box__main-title">
              Nous contacter
            </h1>
            <div style={{ textAlign: 'center' }}>
              <form
                onSubmit={handlerOnSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minWidth: '300px',
                  marginTop: '20px',
                  borderRadius: '10px',
                  padding: '20px',
                  backgroundColor: '#fff',
                  boxShadow: 'rgb(0 0 0 / 35%) 0px 2px 9px 2px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                  }}
                >
                  <TextField
                    required
                    onChange={handlerOnChange}
                    variant="outlined"
                    name="email"
                    type="email"
                    value={email}
                    label="Votre Email"
                    style={{ width: '250px' }}
                  />
                  <TextField
                    required
                    onChange={handlerOnChange}
                    variant="outlined"
                    name="lastName"
                    type="text"
                    value={lastName}
                    label="Votre Nom"
                    style={{ width: '210px', margin: '0 10px' }}
                  />
                  <TextField
                    required
                    onChange={handlerOnChange}
                    variant="outlined"
                    name="firstName"
                    type="text"
                    value={firstName}
                    label="Votre prénom"
                    style={{ width: '210px' }}
                  />
                </div>

                <TextField
                  fullWidth
                  required
                  onChange={handlerOnChange}
                  variant="outlined"
                  multiline
                  rows={10}
                  name="message"
                  size="small"
                  type="text"
                  value={message}
                  label="Votre message"
                  style={{ margin: '30px' }}
                />

                <Button
                  fullWidth
                  type="submit"
                  size="small"
                  target="blank"
                  color="primary"
                  variant="contained"
                  endIcon={<SendIcon />}
                  className={classes.btnSend}
                >
                  Envoyer
                </Button>
              </form>
            </div>
            <Box display="flex" flexDirection="column">
              <Chatbox />
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

TeamPage.propTypes = {
  email: PropTypes.string,
  message: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  changeInputValue: PropTypes.func.isRequired,
  sendMail: PropTypes.func.isRequired,
};

TeamPage.defaultProps = {
  email: '',
  message: '',
  firstName: '',
  lastName: '',
};

export default TeamPage;
