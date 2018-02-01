import React from 'react';
import Nav from './Nav';
import constants from './constants';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default class Graphic extends React.Component {
    render() {

        return (
            <div>
                <div className='sticky-top'>
                    <ul className='nav d-flex justify-content-around'>
                        <Nav title='Works' link='/' />
                        <Nav title='Gallery' link='/gallery' />
                        <div className='d-flex logo'>
                            <img src={constants.images.logo} alt="logo" />
                        </div>                    <Nav title='About' link='/about' />
                        <Nav title='Contact' link='/contact' />
                    </ul>
                </div>
                <div className='jumbotron jumbotron-fluid' id='graphic'>
                    <h1>Graphic Designs</h1>
                    <p>“A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.”</p>
                    <p> - Antoine de Saint-Exupéry</p>
                </div>
                <div className='whitespace'>
                    <div className='container'>
                        <h4 className='text-center'>Sustainability of Different Diets</h4>
                        <div className='row'>
                            <div className='col-lg'>
                                <h5>How meat consumption impacts the environment</h5>
                                <p>This infographic is a piece I created from a course on Visual Information Design. The inspiration came from my own interest in sustainability, and wanting to share my experience as a pescaterian with others. The core message centers around awareness of the damage heavy meat consumption causes to the planet relative to other diets.</p>
                                <p className='pb-3'>Technologies: Adobe Illustrator, Tableau, Excel</p>
                                <a className='btn btn-primary'
                                    href="http://wynhsu.wixsite.com/info362-wynston">
                                    View Website
                            </a>
                            </div>
                            <div className='col-lg'>
                                <img src={constants.images.diets} alt="info362" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container spacer_LR'>
                    <h4 className='text-center'>Vector Graphic Illustrations</h4>
                    <div className='row spacer_bot'>
                        <div className='col-lg-4 '>
                            <h5>Harley Quinn</h5>
                            <p>This portrait is based off of Margot Robbie's Harley Quinn from the movie <i>Suicide Squad</i>. To create this vector portrait, I first sketched the outline of the characters features. I then proceeded to outline the shapes based on the different shades of light. Finally, I layered the shapes together to form the finished product.</p>
                        </div>
                        <div className='col-lg-8 horizontal'>
                            <Carousel className='remove'>
                                <div className='horizontal'>
                                    <img src={constants.images.harley} alt='portrait' />
                                    <p className="legend">Background Source: <i>Squad Yourself - Official Icon Generator for Suicide Squad</i></p>
                                </div>
                                <div className='horizontal'>
                                    <img src={constants.images.harley_origin} alt='portrait' />
                                    <p className="legend">Original Source: <i>GeekTyrant - Geek Movie and Entertainment News</i></p>
                                </div>
                            </Carousel>
                        </div>
                    </div>

                    <div className='row spacer_top spacer_bot'>
                        <div className='col-md-6'>
                            <h5>The Black Mamba</h5>
                            <p>This portrait of Kobe Bryant was created using only circles in a mosaic style. The inspiration for the art style came from Georges Seurat's famous work <i><a href='http://www.artic.edu/aic/collections/artwork/27992'>A Sunday Afternoon on the Island of La Grande Jatte</a></i>. I attempted to emulate the pointillism technique used by Seurat, but instead of uniformed small dots I utilized varying sizes</p>
                        </div>
                        <div className='vertical col-md-6'>
                            <Carousel>
                                <div className='vertical'>
                                    <img src={constants.images.kobe} alt='shapes' />
                                </div>
                                <div className='vertical'>
                                    <img src={constants.images.kobe_origin} alt='shapes' />
                                    <p className="legend">Original Source: <i>AliExpress.com</i></p>
                                </div>
                            </Carousel>
                        </div>
                    </div>

                    <div className='row spacer_bot'>
                        <div className='col-lg-4'>
                            <h5>Wushu</h5>
                            <p>Ever since my parents put me into the martial arts form in the third grade, I've practiced wushu on-and-off for a sum of roughly six years. Not only is it a great sport, it has also taught me many great life lessons such as respect, perseverance, and self-motivation. I created these figures in reflection of the impact Wushu has had on my life.</p>
                        </div>
                        <div className='horizontal col-lg-8'>
                            <Carousel>
                                <div className='horizontal'>
                                    <img src={constants.images.broad} alt='figures' />
                                    <p className="legend">Background Source: <i>123RF</i></p>
                                </div>
                                <div className='horizontal'>
                                    <img src={constants.images.broad_origin} alt='figures' />
                                    <p className="legend">Original Source: <i>Getty Images</i></p>
                                </div>
                                <div className='vertical'>
                                    <img src={constants.images.straight} alt='figures' />
                                    <p className="legend">Background Source: <i>123RF</i></p>
                                </div>
                                <div className='vertical'>
                                    <img src={constants.images.straight_origin} alt='figures' />
                                    <p className="legend">Original Source: <i>permitbeijing.com</i></p>
                                </div>
                                <div className='horizontal'>
                                    <img src={constants.images.spear} alt='figures' />
                                    <p className="legend">Background Source: <i>PNG Tree</i></p>
                                </div>
                                <div className='horizontal'>
                                    <img src={constants.images.spear_origin} alt='figures' />
                                    <p className="legend">Original Source: <i>TotalMartialartSupplies.com</i></p>
                                </div>
                                <div className='horizontal'>
                                    <img src={constants.images.long} alt='figures' />
                                    <p className="legend">Background Source: <i>Wikipedia - Yin and Yang</i></p>
                                </div>
                                <div className='horizontal'>
                                    <img src={constants.images.long_origin} alt='shapes' />
                                    <p className="legend">Original Source: <i>sportistan.com</i></p>
                                </div>
                            </Carousel>
                        </div>
                    </div>

                    <div className='row spacer_top'>
                        <div className='col-lg-4'>
                            <h5>Logo Design</h5>
                            <p>These logos were design as requested by <a href='https://bikeclarkcounty.org/'>Bike Clark County</a>. The logos were intended to be used for the organization's new Bike to Leadership program, which targeted the development of high school students into community mentors and leaders for kids.</p>
                        </div>
                        <div className='horizontal col-lg-8'>
                            <Carousel>
                                <div className='bike'>
                                    <img src={constants.images.helmet_b} alt='bike' />
                                </div>
                                <div className='bike'>
                                    <img src={constants.images.helmets} alt='bike' />
                                </div>
                                <div className='bike'>
                                    <img src={constants.images.tshirt} alt='bike' />
                                    <p className="legend">Image Source: <i>pitico.com</i></p>
                                </div>
                                <div className='bike'>
                                    <img src={constants.images.bottle} alt='bike' />
                                    <p className="legend">Image Source: <i>de-vinyl.blogspot.com</i></p>
                                </div>
                            </Carousel>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}