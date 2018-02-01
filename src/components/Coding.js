import React from 'react';
import Nav from './Nav';

export default class Coding extends React.Component {
    render() {
        return (
            <div className=''>
                <ul className='nav d-flex justify-content-around'>
                    <Nav title='Works' link='/' />
                    <Nav title='Gallery' link='/gallery' />
                    <div>logo</div>
                    <Nav title='About' link='/about' />
                    <Nav title='Contact' link='/contact' />
                </ul>
            </div>
        );
    }
}