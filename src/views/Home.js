import React from 'react';
import Nav from '../components/Nav';
import Card from '../components/Card';
import constants from '../components/constants';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default class Home extends React.Component {
    render() {
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
                {/* <div className='jumbotron jumbotron-fluid'>
                    <h1>Lorem ipsum</h1>
                    <p>Lorem ipsum</p>
                </div> */}

                <ParallaxProvider>
                    <Parallax slowerScrollRate>
                    
                        <img src="./img/test.jpg" alt="polynesia" />
                    </Parallax>
                </ParallaxProvider>

                <div className='whitespace'>
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
                </div>
            </div>
        );
    }
}