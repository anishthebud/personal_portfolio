import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './landing.css';

function Landing() {
    const navigate = useNavigate();
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const goToMainPage = () => {
        navigate('./main', {replace: true});
    }

    // Preload critical images
    useEffect(() => {
        const preloadImages = () => {
            const imageUrls = [
                './personalPortfolioBackground.png',
                './profilePic.png',
                './personalPortfolioLogo.png'
            ];

            let loadedCount = 0;
            const totalImages = imageUrls.length;

            imageUrls.forEach(url => {
                const img = new Image();
                img.onload = () => {
                    loadedCount++;
                    if (loadedCount === totalImages) {
                        setImagesLoaded(true);
                    }
                };
                img.onerror = () => {
                    loadedCount++;
                    if (loadedCount === totalImages) {
                        setImagesLoaded(true);
                    }
                };
                img.src = url;
            });
        };

        preloadImages();
    }, []);

    return (
        <>
            <div 
                className="outerImage"
                style={{ 
                    backgroundImage: 'url(/personalPortfolioBackground.png)', 
                    backgroundSize: 'cover', 
                    display: 'block', 
                    height: '100vh', 
                    position: 'relative',
                    opacity: imagesLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out'
                }}
            />
            
            <img 
                loading="eager" 
                src='./profilePic.png' 
                alt='Anish Budida Profile Picture' 
                onClick={goToMainPage} 
                style={{
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    width: '400px', 
                    height: '400px', 
                    borderRadius: '200px', 
                    outline: '2px solid white', 
                    boxShadow: '0 20px 20px rgba(0, 0, 0, 0.25)', 
                    cursor: 'pointer',
                    opacity: imagesLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out'
                }}
            />
            
            <img 
                loading="eager" 
                src='./personalPortfolioLogo.png' 
                alt='Anish Budida Portfolio Logo' 
                style={{
                    position: 'absolute', 
                    top: 0, 
                    left: '50%', 
                    transform: 'translate(-50%, 0%)',
                    opacity: imagesLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out'
                }}
            />
            
            <p 
                id='actionText' 
                style={{
                    color: 'white', 
                    position: 'absolute', 
                    top: '75%', 
                    left: '50%', 
                    transform: 'translate(-50%, 0%)',
                    opacity: imagesLoaded ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out'
                }}
            >
                Click Picture to Enter Portfolio
            </p>
        </>
    );
}

export default Landing;

