import React from 'react';
import Navbar from '../components/Navbar';
import constants from '../components/constants';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// import {
//     Accordion,
//     AccordionItem,
//     AccordionItemTitle,
//     AccordionItemBody,
// } from 'react-accessible-accordion';

// import '../../node_modules/react-accessible-accordion/dist/react-accessible-accordion.css';


export default class Foodie extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        var mock = {
            height: 'auto',
            width: '50vw',
        }
        var prsn = {
            maxHeight: '80vh',
            width: 'auto',
        }
        return (
            <div>
                <Navbar />
                <div className='jumbotron jumbotron-fluid pb-0'>
                    <img style={mock} src="./img/foodie/cover.png" alt="mockup" />
                    <h3>Foodie Fanatic</h3>
                    <i>Beyond the Boundaries of Taste</i>
                </div>
                <div className='whitespace'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md'>
                                <h5>Background</h5>
                                <p><i>Foodie Fanatic</i> is a mock client created by Professor Mike Doane for the course INFO330 Information Architecture. As a design team we have been given a series of information from the client, including the company's business objective, vision, and current issues. </p>
                            </div>
                            <div className='col-md'>
                                <h5>Problem</h5>
                                <p>Current issues mainly stem from two factors: One is the convoluted nature of the site's IA, resulting in difficulty navigating hidden or nested content. The second is caused by low level of relevance of search results, as well as the overwhelming number of irrelevant options currently offered.</p>
                            </div>
                            <div className='col-md'>
                                <h6 className='pt-3 pb-0'>Duration: </h6>
                                <p>Jan - Mar 2018 (10 weeks)</p>
                                <h6 className='pt-3 pb-0'>Members: </h6>
                                <p>Calvin C., Luke A., Solayman Y., Tyler T.</p>
                                <h6 className='pt-3 pb-0'>Tools: </h6>
                                <p>Figma, Balsamiq, Adobe Illustrator, Slickplan, OptimalSort</p>
                                <h6 className='pt-3 pb-0'>Skills: </h6>
                                <p>Wireframing, Information Persona Development, Project Planning, Logo Design, Storyboarding, Site Mapping</p>
                            </div>
                        </div>

                        <h4 className='text-center pb-0'>Approach</h4>
                        <div className='row'>
                            <div className='col-md'>
                                <h5>Goals</h5>
                                <p>To help drive product sales, and inform users of the latest trends relating to food.</p>
                            {/* </div>
                            <div className='col-md'> */}
                                <h5>Vision</h5>
                                <p>To bridge the gap between users and company through culinary satisfaction.</p>
                            </div>
                            <div className='col-md'>
                                <h5>Mission</h5>
                                <p className='pb-3'>1. Develop <i>Foodie Fanatic</i>'s online platform.</p>
                                <p className='pb-3'>2. Help <i>Foodie Fanatic</i> become the leading outlet for all food related products.</p>
                                <p>3. Establish a deeper connection between user and brand.</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md'>
                                <h5>Content Strategy</h5>
                                <p>&#8226; Ease of use and access, focusing on mobile first.</p>
                                <p>&#8226; Clarity and relevance to what the users are looking for.</p>
                                <p>&#8226; A sense of community and social interaction between users.</p>
                                <p>&#8226; Involvement and inclusion of all users with varying skills, backgrounds, and experiences.</p>
                            </div>
                            <div className='col-md'>
                                <h5>Online Strategy: Social Media Platform</h5>
                                <p>&#8226; Interact with a diverse group of foodies.</p>
                                <p>&#8226; Stay connected with the local foodie community.</p>
                                <p>&#8226; Share personal content, and be able to voice opinions.</p>
                                <p>&#8226; Provide feedback to further establish credentials in hte commmunity.</p>
                            </div>
                        </div>

                        <h4 className='text-center pb-0'>Deliverables</h4>
                        <div className='spacer_LR pb-0'>
                            <h5>Information Personas</h5>
                            <p>We curated three personas that best represented the information provided by our client. These are based on both the targeted demographic, as well as the most common types of users. Each of the user's scenario illustrates a particular issue with the one of the core functionalities of the current application.</p>
                        </div>
                        <Carousel>
                            <div style={prsn}>
                                <img src={constants.images.foodie.persona.valerie} alt="valerie" />
                            </div>
                            <div style={prsn}>
                                <img src={constants.images.foodie.persona.deborah} alt="deborah" />
                            </div>
                            <div style={prsn}>
                            <img src={constants.images.foodie.persona.riz} alt="riz" />
                            </div>
                        </Carousel>

                        <div className='spacer_LR'>
                            <h5 className='p-0'>Site Map</h5>
                            <img src='./img/foodie/sitemap.png' alt="sitemap" />
                        </div>
                        <div className='spacer_LR'>
                            <h5 className='p-0'>Wireframes</h5>
                            <div className='row'>
                                <img className='col-4 iphone6' src={constants.images.foodie.wireframe.event} alt="event" />
                                <img className='col-4 iphone6' src={constants.images.foodie.wireframe.profile} alt="profile"/>
                                <img className='col-4 iphone6' src={constants.images.foodie.wireframe.review} alt="review"/>
                            </div>
                        </div>

                        <h4 className='text-center'>Final Design</h4>
                        <div className='row'>
                            <img className='col-3 iphonex' src={constants.images.foodie.home} alt="home" />
                            <img className='col-3 iphonex' src={constants.images.foodie.store.product} alt="store" />
                            <img className='col-3 iphonex' src={constants.images.foodie.store.related} alt="store" />
                            <img className='col-3 iphonex' src={constants.images.foodie.store.review} alt="store" />
                        </div>
                        <div className='row'>
                            <img className='col-3 iphonex' src={constants.images.foodie.cook.recipe} alt="cook" />
                            <img className='col-3 iphonex' src={constants.images.foodie.cook.ingredient} alt="cook" />
                            <img className='col-3 iphonex' src={constants.images.foodie.cook.procedure} alt="cook" />
                            <img className='col-3 iphonex' src={constants.images.foodie.cook.seasonal} alt="cook" />
                        </div>
                        <div className='row'>
                            <img className='col-3 iphonex' src={constants.images.foodie.community.events} alt="community" />
                            <img className='col-3 iphonex' src={constants.images.foodie.community.profile} alt="community" />
                            <img className='col-3 iphonex' src={constants.images.foodie.myfoodie.profile} alt="myfoodie" />
                            <img className='col-3 iphonex' src={constants.images.foodie.myfoodie.history} alt="myfoodie" />
                        </div>

                        <div className='spacer_LR'>
                            <h5>Logo Design</h5>
                            <p>Click <a href=''>here</a> to see my process for designing the <i>Foodie Fanatic</i> logo.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}