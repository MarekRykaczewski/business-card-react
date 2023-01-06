import React from 'react'
import FacebookImg from '../assets/facebook.png'
import TwitterImg from '../assets/twitter.png'
import LinkedinImg from '../assets/linkedin.png'
import YoutubeImg from '../assets/youtube.png'

export default function Footer() {
    return (
        <footer className='footer'>
            <img src={TwitterImg} />
            <img src={FacebookImg} />
            <img src={LinkedinImg} />
            <img src={YoutubeImg} />
        </footer>
    )
}