import React from 'react';
import Navbar from '../components/Navbar';
import constants from '../components/constants';

export default class Coding extends React.Component {
    render() {
        let size = {
            maxWidth: '400px'
        }
        return (
            <div>
                <Navbar />
                <div className='jumbotron jumbotron-fluid'>
                    <h1>Coding Projects</h1>
                    <p></p>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg'>
                            <h4>Words With Friends</h4>
                            <p>My team and I replicated the popular game, Words with Friends. We used the Oxford Dictionary API to determine whether the players use valid words. This web app uses the React js framework, and Firebase servers to host user data.</p>
                            <p>Timeframe: Autumn 2018 - 2 weeks</p>
                            <div className='p-3'></div>
                            <a className='btn btn-primary'
                                    href="https://wynhsu.github.io/words-with-friends/#/">
                                    Play Game
                            </a>
                        </div>
                        <div className='col-lg text-center'>
                            <img src={constants.images.words} alt="WWF" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}