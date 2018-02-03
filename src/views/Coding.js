import React from 'react';
import Nav from '../components/Nav';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import constants from '../components/constants';

export default class Coding extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className='jumbotron jumbotron-fluid'>
                    <h1>Coding Projects</h1>
                    <p>Coming soon!</p>
                </div>
            </div>
        );
    }
}