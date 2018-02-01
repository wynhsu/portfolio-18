import React from 'react';
import Nav from './Nav';
import constants from './constants';

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import '../../node_modules/react-accessible-accordion/dist/react-accessible-accordion.css';


export default class UI extends React.Component {
    render() {
        var padding = {
            paddingTop: '200px',
        }
        return (
            <div>
                <div className='sticky-top'>
                    <ul className='nav d-flex justify-content-around'>
                        <Nav title='Works' link='/' />
                        <Nav title='Gallery' link='/gallery' />
                        <div className='d-flex logo'>
                            <img src={constants.images.logo} alt="logo" />
                        </div>
                        <Nav title='About' link='/about' />
                        <Nav title='Contact' link='/contact' />
                    </ul>
                </div>
                <div className='jumbotron jumbotron-fluid' id='breez'>
                    <p className='text-center font-italic' style={padding}>A language inspired by nature and in harmony with people</p>
                </div>
                <div className='whitespace'>
                    <div className='container'>
                        {/* <h2 className='text-center p-4'>Breez OS</h2>
                        <p className='text-center font-italic'>A language inspired by nature and in harmony with people</p> */}
                        <div className='row'>
                            <div className='col-md'>
                                <h5>Problem</h5>
                                <p>Social disconnect stemming from convenient and prevalent access to technology has been a major problem of the century. Additionally, we observed an upsizing of phone screens in the current market trends leading to difficulty of usage - especially for one hand.</p>
                            </div>
                            <div className='col-md'>
                                <h5>Approach</h5>
                                <p>Create an OS that minimized the amount of clutter, noise, and distractions. Focused on the utilization of natural and intuitive gestures in order to accommodate one-hand use.</p>
                            </div>
                            <div className='col-md'>
                                <h6 className='pt-3 pb-0'>Duration: </h6>
                                <p>Sept - Dec 2017 (10 weeks)</p>
                                <h6 className='pt-3 pb-0'>Members: </h6>
                                <p>Brent G., Cynthia R., Eduardo R., Mike E., Sangwoo 'Martin' S.</p>
                                <h6 className='pt-3 pb-0'>Tools: </h6>
                                <p>Figma, Invision, Google Slides</p>
                            </div>
                        </div>
                        <h4 className='text-center'>Design Language</h4>
                        <div className='row'>
                            <div className='col-md'>
                                <h5 className='p-0'>Design Principles</h5>
                                <h6>Focused </h6>
                                <p>Minimize distraction in the form of colors, motion, and noise. Encourage productivity and mindful usage.</p>
                                <h6>Responsive </h6>
                                <p>Adapts and evolves, to become the extension of one's body and mind. Utilize motion and form to provide a natural experience.</p>
                                <h6>Convenient </h6>
                                <p>Facilitate the needs of the user without embellishing or distracting.</p>
                            </div>
                            <div className='col-md'>
                                <img src={constants.images.ideation} alt="ideation" />
                                <p className='text-center'>We began our design process with an affinity diagram of what we like or disliked about current mobile environments on the market.</p>
                            </div>
                        </div>

                        <h4 className='text-center pb-0'>System and Gestures</h4>
                        <div className='row'>
                            <div className='col-md-8'>
                                <h5>Our Approach</h5>
                                <p>Our intention was to design an operating system that would provide maximum comfort and functionality, through the utilization of natural human motion and gestures. In our <a href='http://scotthurff.com/posts/how-to-design-for-thumbs-in-the-era-of-huge-screens'>initial research</a>, we discovered this heat map illustrating the reachable zones on screen during one-hand use. We adopted this as a core focus, and designed our interactions around the 'natural' zones on screen.</p>
                                <img className='spacer_top' src={constants.images.gestures} alt="home_button" />
                            </div>
                            <div className='col-md-4 h-25 d-flex flex-row-reverse'>
                                <img className='h-25 m-auto' src={constants.images.heat_map} alt="heat_map" />
                            </div>
                        </div>
                        <div className='spacer_LR'>
                            <h5 className='p-0'>Concept Wireframes</h5>
                            <img src={constants.images.wireframe} alt="wireframe" />
                            <img src={constants.images.sketch} alt="sketch" />
                        </div>

                        <h4 className='text-center pb-0'>Process and Iteration</h4>
                        <div className='row'>
                            <div className='col-md'>
                                <h5>Action Orbiter</h5>
                                <p>Inspired by Google's Material Design, our team decided to incorporate many of what we thought were the best components into Breez. We utilized Material's color palette, as well as its flat design look and feel. Additionally, we drew inspiration from the floating action button present in many of Google's applications. The Action Orbiter - as we call it, would provide prominent functionalities on the screen and allows users to easily access them with one hand.</p>
                            </div>
                            <div className='col-md'>
                                <p className='pl-5'>Initial sketches for the orbiter</p>
                                <img src={constants.images.orbiter} alt="orbiter" />
                            </div>
                        </div>
                        <div className='spacer_LR'>
                            <h5 className='p-0'>Old Screens</h5>
                            <img src={constants.images.iteration} alt="iterations" />
                        </div>
                        <p className='spacer_LR pb-5'>Through our iterations, we would come to eventually abandon the idea of the orbiter. This decision was made due to many factors regarding feasibility and time constraint. It was illuminated to us during critique by professional designers that while the Action Orbiter provided access to features during one hand usage, it was at the cost of keeping said features hidden from the users. In addition to being hidden, the features within the orbiter differed depending on the app, which added another layer of complexity as it left users guessing what options were possible on each screen.</p>

                        <h4 className='text-center'>Final Screens</h4>
                        <p className='spacer_LR'>In our final development version, we were able to implement an alternative solution to the orbiter using a bottom-oriented bar that contained the core features on a given screen. While this version of our approach did not provide full one-hand access to all functions, we believed that it would still accomplish our intention for the majority.</p>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemTitle>
                                    <h5 className='p-0'>Systems</h5>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <p>
                                        <img src={constants.images.system} alt="system" />
                                    </p>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemTitle>
                                    <h5 className='p-0'>Productivity</h5>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <p>
                                        <img src={constants.images.productivity} alt="productivity" />
                                    </p>
                                </AccordionItemBody>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemTitle>
                                    <h5 className='p-0'>Communication and Media</h5>
                                </AccordionItemTitle>
                                <AccordionItemBody>
                                    <p>
                                        <img src={constants.images.communication_media} alt="communication and media" />
                                    </p>
                                </AccordionItemBody>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        );
    }
}