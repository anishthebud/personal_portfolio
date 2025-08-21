import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landing.css';

function Landing() {
    const navigate = useNavigate();

    const goToMainPage = () => {
        navigate('./main', {replace: true});
    }

    return (
        <>
            <div className="outerImage"style={{ backgroundImage: 'url(/personalPortfolioBackground.png)', backgroundSize: 'cover', display: 'block', height: '100vh', position: 'relative' }}>
                
            </div>
            <img src='./profilePic.png' alt='Anish Budida Profile Picture' onClick={goToMainPage} style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', borderRadius: '200px', outline: '2px solid white', boxShadow: '0 20px 20px rgba(0, 0, 0, 0.25)', cursor: 'pointer'}}/>
            <img src='./personalPortfolioLogo.png' alt='Anish Budida Portfolio Logo' style={{position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, 0%)'}}/>
            <p id='actionText' style={{color: 'white', position: 'absolute', top: '75%', left: '50%', transform: 'translate(-50%, 0%)'}}>Click Picture to Enter Portfolio</p>
        </>
    );
}

export default Landing;

