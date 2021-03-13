import { Link } from 'react-scroll';

import './Nav.css';
import { AppBar, Toolbar, Button, makeStyles, useMediaQuery } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

function Nav() {
    const useStyles = makeStyles({
        navToolbar: {
            minHeight: 'fit-content'
        },
        navButton: {
            fontWeight: 'bold'
        }
    });
    
    const classes = useStyles();

    const matches = useMediaQuery('(min-width: 1200px)');

    console.log(matches);

    return (
        <AppBar position='sticky'>
            <Toolbar id='nav' className={classes.navToolbar}>
                {matches ? <div id='nav-links'>
                    <Button className={classes.navButton} color='secondary'>
                    <Link to='me' activeClass='active' spy={true} smooth={true} duration={500}>Mason</Link>
                    </Button>
                    <Button className={classes.navButton} color='secondary'>
                        <Link to='about' activeClass='active' spy={true} smooth={true} duration={500}>About</Link>
                    </Button>
                    <Button className={classes.navButton} color='secondary'>
                        <Link to='portfolio' activeClass='active' spy={true} smooth={true} duration={500}>Portfolio</Link>
                    </Button>
                    <Button className={classes.navButton} color='secondary'>
                        <Link to='education' activeClass='active' spy={true} smooth={true} duration={500}>Education</Link>
                    </Button>
                </div> : 
                <Button color='secondary'>
                    <MenuIcon />
                </Button>}
            </Toolbar>
        </AppBar>
    );
};

export default Nav;