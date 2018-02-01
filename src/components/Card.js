import React from 'react';
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
    // componentDidMount() {
    //     let cards = document.querySelectorAll('card');
    //     for(let i = 0; i < cards.length; i++) {
    //         cards[i].classList.remove('')
    //     }
    // }

    render() {
        return (
            <div className='col-lg-4'>
                <div className='card p-0'>
                    <div id='remove'>
                        <img className='card-img-top rounded-top' src={this.props.src} alt={this.props.alt} />
                    </div>
                    <div className='card-body'>
                        <h4 className='card-title p-0'>{this.props.title}</h4>
                        <p className='card-text'>{this.props.text}</p>
                        <Link to={this.props.link}>Explore</Link>
                    </div>
                </div>
            </div>
        );
    }
}