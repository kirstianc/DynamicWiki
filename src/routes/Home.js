import React from 'react';
import ian_flower from '../assets/images/ian_flower.jpg';

function Home() {
    return (
        <div>
            <title>Ian Chavez, Computer Science major</title>
            <h1>Hello!</h1>
            <p>
                My name is Ian Chavez. I am a <strong>Computer Science major </strong>at{' '} <strong>San Jose State University.</strong>
                <br />
                I am a second generation Filipino located in California, United States.
            </p>
            <div class ="image-container">
                <img src={ian_flower} alt="Ian Chavez in a flower field" />
            </div>
        </div>
    );
}

export default Home;
