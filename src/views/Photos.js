import React from 'react';
import Navbar from '../components/Navbar';
import constants from '../components/constants';
import Gallery from 'react-grid-gallery';

export default class Photos extends React.Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        const IMAGES = [{
            src: constants.images.harley,
            thumbnail: constants.images.harley,
            thumbnailWidth: 650,
            thumbnailHeight: 500
        },
        {
            src: './img/kobe/kobe.jpg',
            thumbnail: constants.images.kobe,
            thumbnailWidth: 500,
            thumbnailHeight: 610
        },
        {
            src: constants.images.wushu.broad,
            thumbnail: constants.images.wushu.broad,
            thumbnailWidth: 500,
            thumbnailHeight: 400
        },
        {
            src: constants.images.wushu.straight,
            thumbnail: constants.images.wushu.straight,
            thumbnailWidth: 450,
            thumbnailHeight: 600
        },
        {
            src: constants.images.wushu.spear,
            thumbnail: constants.images.wushu.spear,
            thumbnailWidth: 500,
            thumbnailHeight: 400
        },
        {
            src: constants.images.wushu.long,
            thumbnail: constants.images.wushu.long,
            thumbnailWidth: 500,
            thumbnailHeight: 400
        },
        {
            src: constants.images.helmet,
            thumbnail: constants.images.helmet,
            thumbnailWidth: 500,
            thumbnailHeight: 400
        },
        {
            src: constants.images.helmets,
            thumbnail: constants.images.helmets,
            thumbnailWidth: 600,
            thumbnailHeight: 500
        },
        {
            src: constants.images.diets,
            thumbnail: constants.images.diets,
            thumbnailWidth: 800,
            thumbnailHeight: 500
        },
        {
            src: './img/breez/sprint_1.png',
            thumbnail: './img/breez/sprint_1.png',
            thumbnailWidth: 600,
            thumbnailHeight: 400
        },
        {
            src: constants.images.breez_ui.ideation,
            thumbnail: constants.images.breez_ui.ideation,
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
            src: constants.images.screens.home,
            thumbnail: constants.images.screens.home,
            thumbnailWidth: 450,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.search,
            thumbnail: constants.images.screens.search,
            thumbnailWidth: 450,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.multitask,
            thumbnail: constants.images.screens.multitask,
            thumbnailWidth: 200,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.lock,
            thumbnail: constants.images.screens.lock,
            thumbnailWidth: 450,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.joystick,
            thumbnail: constants.images.screens.joystick,
            thumbnailWidth: 700,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.notifications,
            thumbnail: constants.images.screens.notifications,
            thumbnailWidth: 200,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.albums,
            thumbnail: constants.images.screens.albums,
            thumbnailWidth: 450,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.music,
            thumbnail: constants.images.screens.music,
            thumbnailWidth: 450,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.camera,
            thumbnail: constants.images.screens.camera,
            thumbnailWidth: 700,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.browser,
            thumbnail: constants.images.screens.browser,
            thumbnailWidth: 700,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.video,
            thumbnail: constants.images.screens.video,
            thumbnailWidth: 700,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.contact,
            thumbnail: constants.images.screens.contact,
            thumbnailWidth: 700,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.email,
            thumbnail: constants.images.screens.email,
            thumbnailWidth: 700,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.message,
            thumbnail: constants.images.screens.message,
            thumbnailWidth: 700,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.task,
            thumbnail: constants.images.screens.task,
            thumbnailWidth: 800,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.note,
            thumbnail: constants.images.screens.note,
            thumbnailWidth: 800,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.calculator,
            thumbnail: constants.images.screens.calculator,
            thumbnailWidth: 200,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.clock,
            thumbnail: constants.images.screens.clock,
            thumbnailWidth: 200,
            thumbnailHeight: 400
        },
        {
            src: constants.images.screens.dialer,
            thumbnail: constants.images.screens.dialer,
            thumbnailWidth: 200,
            thumbnailHeight: 400
        },
        ]

        return (
            <div>
                <Navbar />
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