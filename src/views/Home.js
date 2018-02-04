import React from 'react';
import Navbar from '../components/Navbar';
import constants from '../components/constants';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';


export default class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <div className='parallax'></div>
                    <h1 className='title'>Design Empathy</h1>
                    <p className='title'>Portfolio created by Wynston Hsu</p>
                    <Carousel className='viewport'>
                        <div>
                            <div className='absolute'>
                                <h2 className=''>Design</h2>
                                <p>Designs that are natural to the human intuition and convenient for everyday life.</p>
                            </div>
                            <div className='cover'></div>
                            <img className='splash' src='./img/blur2.jpg' alt="design" />
                            <div className='button'>
                                <button>
                                    <Link to={constants.routes.ui}>Explore</Link>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className='absolute'>
                                <h2>Graphics</h2>
                                <p>Whether it be infographic, portraits or logos, I love creating beautiful graphics!</p>
                            </div>
                            <div className='cover'></div>
                            <img className='splash' src='./img/graphics.jpg' alt="graphics" />
                            <div className='button'>
                                <button>
                                    <Link to={constants.routes.graphic}>Explore</Link>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className='absolute'>
                                <h2>Code</h2>
                                <p>Coming soon!</p>
                            </div>
                            <div className='cover'></div>
                            <img className='splash' src="./img/code.jpg" alt="code" />
                        </div>
                    </Carousel>
                </div>
            </div >
        );
    }
}