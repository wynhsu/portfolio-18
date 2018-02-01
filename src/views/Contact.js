import React from 'react';
import Nav from '../components/Nav';
import constants from '../components/constants';

export default class Contact extends React.Component {
    render() {
        return (
            <div className=''>
                <ul className='nav d-flex justify-content-around'>
                    <Nav title='Works' link={constants.routes.work} />
                    <Nav title='Gallery' link={constants.routes.photos} />
                    <div className='d-flex logo'>
                        <img src={constants.images.logo} alt="logo"/>
                    </div>                    <Nav title='About' link={constants.routes.about} />
                    <Nav className='disabled' title='Contact' link={constants.routes.contact} />
                </ul>
            </div>
        );
    }
}