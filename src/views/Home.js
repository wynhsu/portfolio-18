import React from 'react';
import Nav from '../components/Nav';
import Card from '../components/Card';
import constants from '../components/constants';

import { Carousel } from 'react-responsive-carousel';

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
                        <Nav title='About' link={constants.routes.about} />
                        <div className='d-flex logo'>
                            <img src={constants.images.logo} alt="logo" />
                        </div>
                        <Nav title='Gallery' link={constants.routes.photos} />
                        <Nav title='Contact' link={constants.routes.contact} />
                    </ul>
                </div>

                <div>
                    <div className='parallax'></div>
                    <h1 className='title'>Design Empathy</h1>
                    <p className='title'>Portfolio created by Wynston Hsu</p>
                    <Carousel>
                        <div>
                            <h2 className='title'>Design</h2>
                            <p className='title'>Designs that are natural to the human intuition and convenient for everyday life.</p>
                            <img className='splash' src={constants.images.breez} alt="design" />
                        </div>
                        <div>
                            <h2 className='title'>Graphics</h2>
                            <p className='title'>Whether it be infographic, portraits or logos, I love creating beautiful graphics!</p>
                            <img className='splash' src='/img/office.jpg' alt="graphics" />

                        </div>
                        <div>
                            <img className='splash' src="./img/test.jpg" alt="polynesia" />
                        </div>
                    </Carousel>
                </div>

                {/* <ParallaxProvider>
                    <Parallax slowerScrollRate>
                        <div className='parallax'></div>
                        <h1 className='title'>Design Empathy</h1>
                        <p className='title'>Portfolio created by Wynston Hsu</p>
                        <div className='cover'></div>
                        <img className='splash' src="./img/test.jpg" alt="polynesia" /> */}
                {/* <div className='container hover'>
                            <div className='row'>
                                <div className='col-lg-4 rounded'>
                                    <h4 className=''>text</h4>
                                    <p className=''>text</p>
                                    <img className='rounded' src={constants.images.breez} alt="breez" />
                                </div>
                            </div>
                        </div> */}
                {/* </Parallax>
                </ParallaxProvider > */}

                {/* <ScrollToTopOnMount />
                <SectionsContainer {...options}>
                    <Section><img src={constants.images.diets} alt="diets"/></Section>
                    <Section><img src={constants.images.breez} alt="breez"/></Section>
                    <Section>Page 3</Section>
                </SectionsContainer> */}

                {/* <div className='whitespace'>
                    <div className='container'>
                        <div className='row'>
                            <Card src={constants.images.breez}
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
                                link={constants.routes.coding} />
                        </div>
                    </div>
                </div> */}
            </div >
        );
    }
}