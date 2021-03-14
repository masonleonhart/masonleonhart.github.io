import { useState } from 'react';
import PropTypes from 'prop-types';

import './CV.css';
import { Paper, makeStyles, useMediaQuery, Tabs, Tab, Box, Typography } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function CV() {
    const [tabValue, setTabValue] = useState(0);

    const useStyles = makeStyles({
        paper: {
            height: '100%',
            maxWidth: 1400,
            margin: 'auto'
        },
    });

    const matches = useMediaQuery('(max-width: 871px)');

    const classes = useStyles();

    return (
        <div id='cv'>
            <Paper className={classes.paper}>
                <Tabs
                    value={tabValue}
                    onChange={(event, newValue) => setTabValue(newValue)}
                    indicatorColor='primary'
                    textColor='primary'
                    variant='fullWidth'
                >
                    <Tab label='Portfolio' />
                    <Tab label={matches ? 'Education' : 'Skills and Education'} />
                    <Tab label='Experience' />
                </Tabs>
                <TabPanel value={tabValue} index={0}>
                    Item One
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                    Item Three
                </TabPanel>
            </Paper>
        </div>
    );
};

export default CV;