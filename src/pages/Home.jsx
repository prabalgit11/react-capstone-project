import React from 'react'
import Banner from './../components/Home/Banner';
import SignUpForm from './../components/Home/SignUpForm';

const Home = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Banner />
            <SignUpForm />
        </div>
    )
}

export default Home
