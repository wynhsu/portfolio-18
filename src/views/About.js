import React from 'react';
import Nav from '../components/Nav';
import constants from '../components/constants';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <div className='sticky-top'>
                    <ul className='nav d-flex justify-content-around'>
                        <Nav title='Works' link={constants.routes.work} />
                        <Nav title='Gallery' link={constants.routes.photos} />
                        <div className='d-flex logo'>
                            <img src={constants.images.logo} alt="logo" />
                        </div>                    <Nav className='disabled' title='About' link={constants.routes.about} />
                        <Nav title='Contact' link={constants.routes.contact} />
                    </ul>
                </div>
                <div className='jumbotron jumbotron-fluid'>
                    <div className='void'>
                        <h2>"If you aren't failing every now and then, you're probably playing it too safe."</h2>
                        <h5> - Woody Allen</h5>
                    </div>
                </div>
                <div className='whitespace'>
                    <div className='container'>
                        <img className='d-block mx-auto' id='about' src={constants.images.profile} alt="profile" />
                        <h2 className='text-center pb-0'>Wynston Hsu</h2>
                        <p className='text-center sub'>許惟恩</p>
                        <div className='pt-0'>
                            <p className='void'>I am a Junior Informatics student at the University of Washington. As my interest lie in both Human-Computer Interaction and Data Science, I strive to become a design technologist to bridge the gap between designer and development. Creative freedom is something I value deeply, and seeing other's creative work has always inspired me to push myself and do the same. On my own time, I enjoy tackling personal graphics design projects.</p>
                            <p className='void'>Growing up I was exposed to a variety of cultures and values. I was born in Washington D.C., but amlost immediately moved to Taiwan where my parents grew up. I grew up learning a mix of English, Mandarin, and the local Taiwanese dialect. I lived there for eleven-years till I moved back to the US and settled in Washington. Because of my diverse upbringing, I enjoy viewing things from different perspectives. I find it easy to empathize with the thoughts, experiences, and emotions of others. This skill has been critical to my role as a designer and </p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}