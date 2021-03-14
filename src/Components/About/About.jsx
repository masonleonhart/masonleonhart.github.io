import { useMediaQuery } from '@material-ui/core';

import './About.css';

import winnie from '../../Assets/IMG_1305.jpg'

function About() {
    const matches = useMediaQuery('(max-width: 871px)');

    return (
        <div id='about'>
            <div id='about-stuff' className={matches ? 'about-column' : 'about-row'}>
                <p id='about-header'>About</p>
                <p id='about-content'>
                    I enjoy cooking, video games, and the wilderness. When I am not learning
                    about or writing code, you can find me with friends and family, my pups,
                    or dusting clay pigeons at The Shooting Park.
            </p>
                <img id='winnie-image' src={winnie} alt="" />
            </div>
        </div>
    );
};

export default About;