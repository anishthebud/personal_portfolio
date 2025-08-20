import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate();

    const goToMainPage = () => {
        navigate('/app');
    };

    return (
        <div
            onClick={goToMainPage}
            style={{ height: '100vh', width: '100%', cursor: 'pointer' }}
        />
    );
}

export default Landing;

