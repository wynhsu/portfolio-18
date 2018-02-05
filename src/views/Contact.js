import React from 'react';
import Navbar from '../components/Navbar';
import constants from '../components/constants';

export default class Contact extends React.Component {
    switchLILight(evt) {
        let darks = document.querySelectorAll('.icon-dark');
        darks[0].classList.add('d-none');
        let lights = document.querySelectorAll('.icon-light');
        lights[0].classList.remove('d-none');
    }
    
    switchLIDark(evt) {
        let darks = document.querySelectorAll('.icon-dark');
        darks[0].classList.remove('d-none');
        let lights = document.querySelectorAll('.icon-light');
        lights[0].classList.add('d-none');
    }

    switchGHLight(evt) {
        let darks = document.querySelectorAll('.icon-dark');
        darks[1].classList.add('d-none');
        let lights = document.querySelectorAll('.icon-light');
        lights[1].classList.remove('d-none');
    }
    
    switchGHDark(evt) {
        let darks = document.querySelectorAll('.icon-dark');
        darks[1].classList.remove('d-none');
        let lights = document.querySelectorAll('.icon-light');
        lights[1].classList.add('d-none');
    }

    switchELight(evt) {
        let darks = document.querySelectorAll('.icon-dark');
        darks[2].classList.add('d-none');
        let lights = document.querySelectorAll('.icon-light');
        lights[2].classList.remove('d-none');
    }
    
    switchEDark(evt) {
        let darks = document.querySelectorAll('.icon-dark');
        darks[2].classList.remove('d-none');
        let lights = document.querySelectorAll('.icon-light');
        lights[2].classList.add('d-none');
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='jumbotron jumbotron-fluid'>
                    <div className='void'>
                        <h1 id='contact'>Get in touch</h1>
                    </div>
                </div>
                <div className='container'>
                    <div className='row justify-content-around' id='drawer'>
                        <a className='col' href='https://www.linkedin.com/in/wynston-hsu/' onMouseEnter={evt => this.switchLILight(evt.currentTarget)} onMouseLeave={evt => this.switchLIDark(evt.currentTarget)}>
                            <img className='icon-dark' src="./img/contact/linkedin-dark.svg" alt="icon" />
                            <img className='icon-light d-none' src="./img/contact/linkedin-light.svg" alt="icon" />
                        </a>
                        <a className='col' href='https://github.com/wynhsu' onMouseEnter={evt => this.switchGHLight(evt.currentTarget)} onMouseLeave={evt => this.switchGHDark(evt.currentTarget)}>
                            <img className='icon-dark' src="./img/contact/github-dark.svg" alt="icon" />
                            <img className='icon-light d-none' src="./img/contact/github-light.svg" alt="icon" />
                        </a>
                        <a className='col' href='mailto:wynhsu@uw.edu' onMouseEnter={evt => this.switchELight(evt.currentTarget)} onMouseLeave={evt => this.switchEDark(evt.currentTarget)}>
                            <img className='icon-dark' src="./img/contact/email-dark.svg" alt="icon" />
                            <img className='icon-light d-none' src="./img/contact/email-light.svg" alt="icon" />
                        </a>
                    </div>
                </div>
                <div className='button-dark'>
                    <a href="./A4_complete.pdf" target='_blank' id='link'>Checkout my Resume</a>
                </div>
                <p className='footer'>&#169;2018 &#9824; Wynston Hsu</p>
            </div>
        );
    }
}