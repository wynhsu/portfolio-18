import React from 'react';
import Nav from '../components/Nav';
import Card from '../components/Card';
import constants from '../components/constants';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { ScrollToTopOnMount, SectionsContainer, Section, Header } from 'react-fullpage';

export default class Home extends React.Component {
    render() {
        let options = {
            sectionClassName: 'section',
            anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
            scrollBar: false,
            navigation: true,
            verticalAlign: false,
            sectionPaddingTop: '50px',
            sectionPaddingBottom: '50px',
            arrowNavigation: true
        };
        return (
            <div>
                <div className='sticky-top'>
                    <ul className='nav d-flex justify-content-around'>
                        <Nav className='disabled' title='Works' link={constants.routes.work} />
                        <Nav title='Gallery' link={constants.routes.photos} />
                        <div className='d-flex logo'>
                            <img src={constants.images.logo} alt="logo" />
                        </div>                    <Nav title='About' link={constants.routes.about} />
                        <Nav title='Contact' link={constants.routes.contact} />
                    </ul>
                </div>

                <ParallaxProvider>
                    <Parallax slowerScrollRate>
                        <h1 className='title'>Hello World</h1>
                        <p className='title'>Portfolio created by Wynston Hsu</p>
                        <div className='cover'></div>
                        <img className='splash' src="./img/test.jpg" alt="polynesia" />
                    </Parallax>
                </ParallaxProvider>

                {/* <ScrollToTopOnMount />
                <SectionsContainer {...options}>
                    <Section><img src={constants.images.diets} alt="diets"/></Section>
                    <Section><img src={constants.images.breez} alt="breez"/></Section>
                    <Section>Page 3</Section>
                </SectionsContainer> */}

                <div className='whitespace'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-4 rounded'>
                                <h4 className='card-title p-0'>text</h4>
                                <p className='card-text'>text</p>
                                <img className='rounded' src={constants.images.breez} alt="breez" />
                            </div>
                            {/* <Card src={constants.images.breez}
                                alt='home screen'
                                title='Design'
                                text='Designs that are natural to the human intuition and convenient for everyday life.'
                                link={constants.routes.ui} />
                            <Card src={constants.images.diets}
                                alt='infographic'
                                title='Graphic'
                                text='Whether it be infographic, portraits or logos, I love creating beautiful graphics!'
                                link={constants.routes.graphic} />
                            <Card src={constants.images.words}
                                alt='game'
                                title='Coding'
                                text='Coming soon!'
                                link={constants.routes.coding} /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}