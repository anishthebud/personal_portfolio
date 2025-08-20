import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();

    const goToMainPage = () => {
        navigate('./main', {replace: true});
    }

    return (
        <div onClick={goToMainPage} style={{ height: '100vh', backgroundImage: 'url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop)', backgroundSize: 'cover' }}>
            
        </div>
    );
}

export default Landing;

