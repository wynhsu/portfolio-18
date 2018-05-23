import React from 'react';
import Navbar from '../components/Navbar';
import constants from '../components/constants';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';


export default class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
        setTimeout(() => {
            let cite = document.querySelectorAll('.title');
            cite[3].classList.remove('d-none');
        }, 1500);
    }

    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <div className='parallax'></div>
                    <h1 className='title' id='creating'>Creating</h1>
                    <h4 className='title'>Through</h4>
                    <h1 className='title' id='empathy'>Empathy</h1>
                    <p className='title d-none'>Portfolio created by Wynston Hsu</p>
                    <Carousel className='viewport'>
                        <div>
                            <div className='absolute'>
                                <h2 className=''>Breez Mobile OS</h2>
                                <p>A language inspired by nature and in harmony with people</p>
                                {/* <p>Designs that are natural to the human intuition and convenient for everyday life.</p> */}
                            </div>
                            <div className='cover'></div>
                            <img className='splash' src='./img/breez/breez_logo.svg' alt="design" />
                            <div className='button'>
                                <button>
                                    <Link to={constants.routes.ui}>Explore</Link>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className='absolute'>
                                <h2 className=''>Foodie Fanatic</h2>
                                <p>Beyond the boundaries of taste</p>
                            </div>
                            <div className='cover'></div>
                            <img className='splash' src='./img/foodie/cover.png' alt="design" />
                            <div className='button'>
                                <button>
                                    <Link to={constants.routes.foodie}>Explore</Link>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className='absolute'>
                                <h2>Graphics</h2>
                                <p>Whether it be infographic, portraits or logos, I love creating beautiful graphics!</p>
                            </div>
                            <div className='cover'></div>
                            <img className='splash' src='./img/diets.png' alt="graphics" />
                            <div className='button'>
                                <button>
                                    <Link to={constants.routes.graphic}>Explore</Link>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className='absolute'>
                                <h2>Code</h2>
                                <p>My own implementation of <i>Words With Friends!</i></p>
                            </div>
                            <div className='cover'></div>
                            <img className='splash' src="./img/WWF_Mockup.jpg" alt="code" />
                            <div className='button'>
                                <button>
                                    <Link to={constants.routes.coding}>Explore</Link>
                                </button>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div >
        );
    }
}