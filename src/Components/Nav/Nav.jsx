import { Link } from 'react-scroll';

import './Nav.css';
import { AppBar, Toolbar, Button, makeStyles } from '@material-ui/core';

function Nav() {
    const useStyles = makeStyles({
        navToolbar: {
            minHeight: 'fit-content'
        }
    });
    
    const classes = useStyles();

    return (
        <AppBar position='sticky'>
            <Toolbar id='nav' className={classes.navToolbar}>
                <div id='nav-links'>
                    <Button>
                        <Link to='one' activeClass='active' spy={true} smooth={true} duration={500}>One</Link>
                    </Button>
                    <Button>
                        <Link to='two' activeClass='active' spy={true} smooth={true} duration={500}>Two</Link>
                    </Button>
                    <Button>
                        <Link to='three' activeClass='active' spy={true} smooth={true} duration={500}>Three</Link>
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;