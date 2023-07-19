import React from 'react'
import './Banner.css'
import Poster from '../../assets/Banner.png'
const Banner = () => {
    return (
        <>
            <div className='bottom'>
                <p>Discover new things on SuperApp</p>
            </div>
            <img src={Poster} alt="loading poster" />
        </>
    )
}

export default Banner