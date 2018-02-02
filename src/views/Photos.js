import React from 'react';
import Nav from '../components/Nav';
import constants from '../components/constants';
import 'react-dom';
import Gallery from 'react-grid-gallery';

export default class Photos extends React.Component {
    render() {
        const IMAGES = [{
            src: './img/harley/harley.jpg',
            thumbnail: './img/harley/harley.jpg',
            thumbnailWidth: 650,
            thumbnailHeight: 500
        },
        {
            src: './img/kobe/kobe.jpg',
            thumbnail: './img/kobe/kobe.svg',
            thumbnailWidth: 500,
            thumbnailHeight: 610
        },
        {
            src: './img/wushu/broad_sword.jpg',
            thumbnail: './img/wushu/broad_sword.jpg',
            thumbnailWidth: 500,
            thumbnailHeight: 400
        },
        {
            src: './img/wushu/straight_sword.jpg',
            thumbnail: './img/wushu/straight_sword.jpg',
            thumbnailWidth: 450,
            thumbnailHeight: 600
        },
        {
            src: './img/wushu/spear.jpg',
            thumbnail: './img/wushu/spear.jpg',
            thumbnailWidth: 500,
            thumbnailHeight: 400
        },
        {
            src: './img/wushu/long_fist.jpg',
            thumbnail: './img/wushu/long_fist.jpg',
            thumbnailWidth: 500,
            thumbnailHeight: 400
        },
        {
            src: './img/bike/helmet.svg',
            thumbnail: './img/bike/helmet.svg',
            thumbnailWidth: 500,
            thumbnailHeight: 400
        },
        {
            src: './img/bike/helmets.svg',
            thumbnail: './img/bike/helmets.svg',
            thumbnailWidth: 600,
            thumbnailHeight: 500
        },
        {
            src: './img/diets.png',
            thumbnail: './img/diets.png',
            thumbnailWidth: 600,
            thumbnailHeight: 500
        },
        {
            src: './img/breez/sprint_1.png',
            thumbnail: './img/breez/sprint_1.png',
            thumbnailWidth: 600,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/ideation.jpg',
            thumbnail: './img/breez/ideation.jpg',
            thumbnailWidth: 600,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/ideation2.jpg',
            thumbnail: './img/breez/ideation2.jpg',
            thumbnailWidth: 600,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/sprint_2_i.png',
            thumbnail: './img/breez/sprint_2_i.png',
            thumbnailWidth: 600,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/sprint_2_ii.png',
            thumbnail: './img/breez/sprint_2_ii.png',
            thumbnailWidth: 600,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/sprint_2_iii.png',
            thumbnail: './img/breez/sprint_2_iii.png',
            thumbnailWidth: 600,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/sprint_3_i.png',
            thumbnail: './img/breez/sprint_3_i.png',
            thumbnailWidth: 600,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/sprint_3_ii.png',
            thumbnail: './img/breez/sprint_3_ii.png',
            thumbnailWidth: 600,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/home.png',
            thumbnail: './img/breez/photos/home.png',
            thumbnailWidth: 500,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/search.png',
            thumbnail: './img/breez/photos/search.png',
            thumbnailWidth: 500,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/multitask.png',
            thumbnail: './img/breez/photos/multitask.png',
            thumbnailWidth: 250,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/lock.png',
            thumbnail: './img/breez/photos/lock.png',
            thumbnailWidth: 500,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/joystick.png',
            thumbnail: './img/breez/photos/joystick.png',
            thumbnailWidth: 600,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/notifications.png',
            thumbnail: './img/breez/photos/notifications.png',
            thumbnailWidth: 250,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/albums.png',
            thumbnail: './img/breez/photos/albums.png',
            thumbnailWidth: 500,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/music.png',
            thumbnail: './img/breez/photos/music.png',
            thumbnailWidth: 500,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/camera.png',
            thumbnail: './img/breez/photos/camera.png',
            thumbnailWidth: 600,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/browser.png',
            thumbnail: './img/breez/photos/browser.png',
            thumbnailWidth: 600,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/video.png',
            thumbnail: './img/breez/photos/video.png',
            thumbnailWidth: 600,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/contact.png',
            thumbnail: './img/breez/photos/contact.png',
            thumbnailWidth: 600,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/email.png',
            thumbnail: './img/breez/photos/email.png',
            thumbnailWidth: 600,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/message.png',
            thumbnail: './img/breez/photos/message.png',
            thumbnailWidth: 600,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/task.png',
            thumbnail: './img/breez/photos/task.png',
            thumbnailWidth: 800,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/note.png',
            thumbnail: './img/breez/photos/note.png',
            thumbnailWidth: 800,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/calculator.png',
            thumbnail: './img/breez/photos/calculator.png',
            thumbnailWidth: 250,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/clock.png',
            thumbnail: './img/breez/photos/clock.png',
            thumbnailWidth: 250,
            thumbnailHeight: 400
        },
        {
            src: './img/breez/photos/dialer.png',
            thumbnail: './img/breez/photos/dialer.png',
            thumbnailWidth: 250,
            thumbnailHeight: 400
        },
        ]

        return (
            <div>
                <div className='sticky-top'>
                    <ul className='nav d-flex justify-content-around'>
                        <Nav title='Works' link={constants.routes.work} />
                        <Nav title='About' link={constants.routes.about} />
                        <div className='d-flex logo'>
                            <img src={constants.images.logo} alt="logo" />
                        </div>
                        <Nav className='disabled' title='Gallery' link={constants.routes.photos} />
                        <Nav title='Contact' link={constants.routes.contact} />
                    </ul>
                </div>
                <div className='jumbotron jumbotron-fluid'>
                    <div>
                        <h2>Photo Gallery</h2>
                    </div>
                </div>
                <div>
                    <Gallery images={IMAGES} />
                </div>
            </div>
        );
    }
}