import './Header.css';

import { makeStyles } from '@material-ui/core';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

function Header() {
    const useStyles = makeStyles({
        linkIcons: {
            width: 40,
            height: 40,
            margin: '0 10px 0 10px',
            color: 'black'
        },
    });

    const classes = useStyles();

    return (
        <div id='header'>
            <div id='me-card'>
                <img id='me-photo' src="https://github.com/masonleonhart.png?size=200/" alt="" />
                <div id='me-info'>
                    <p id='full-name-header'>Mason Leonhart</p>
                    <p className='location-phone-email'>Fargo, North Dakota</p>
                    <p className='location-phone-email'>(402) 216-2512 | mason.leonhart@gmail.com</p>
                    <div id='header-link-wrapper'>
                        <a href='https://github.com/masonleonhart' target='_blank' rel='noreferrer'><GitHubIcon className={classes.linkIcons} /></a>
                        <a href='https://www.linkedin.com/in/masonleonhart/' target='_blank' rel='noreferrer'><LinkedInIcon className={classes.linkIcons} /></a>
                        <a href="mailto:mason.leonhart@gmaill.com"><EmailIcon className={classes.linkIcons} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;