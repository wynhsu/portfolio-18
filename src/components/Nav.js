import React from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <li className='nav-item'>
                <Link className='nav-link' to={this.props.link}>{this.props.title}</Link>
            </li>
        );
    }
}