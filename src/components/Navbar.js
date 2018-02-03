import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import constants from './constants';


export default class Navbar extends React.Component {
    render() {
        return (
            <div className='sticky-top'>
                <ul className='nav d-flex justify-content-around'>
                    <div className="dropdown">
                        <button className="dropbtn">Works</button>
                        <div className="dropdown-content">
                            <Link to={constants.routes.ui}>Design</Link>
                            <Link to={constants.routes.graphic}>Graphics</Link>
                            <Link to={constants.routes.coding}>Code</Link>
                        </div>
                    </div>
                    <Nav title='About' link={constants.routes.about} />
                    <div className='d-flex'>
                        <Link to={constants.routes.home}>
                            <img className='logo' src={constants.images.logo} alt="logo" />
                        </Link>
                    </div>
                    <Nav title='Gallery' link={constants.routes.photos} />
                    <Nav title='Contact' link={constants.routes.contact} />
                </ul>
            </div>
        );
    }
}