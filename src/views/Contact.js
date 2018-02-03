import React from 'react';
import Nav from '../components/Nav';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import constants from '../components/constants';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                {/* <ul className='nav d-flex justify-content-around'>
                    <div className="dropdown">
                        <button className="dropbtn">Works</button>
                        <div className="dropdown-content">
                            <Link to={constants.routes.ui}>Design</Link>
                            <Link to={constants.routes.graphic}>Graphics</Link>
                            <a href=''>Code</a>
                        </div>
                    </div>
                    <Nav title='About' link={constants.routes.about} />
                    <div className='d-flex'>
                        <Link to={constants.routes.home}>
                            <img className='logo' src={constants.images.logo} alt="logo" />
                        </Link>
                    </div>
                    <Nav title='Gallery' link={constants.routes.photos} />
                    <Nav className='disabled' title='Contact' link={constants.routes.contact} />
                </ul> */}
                <Navbar />
            </div>
        );
    }
}