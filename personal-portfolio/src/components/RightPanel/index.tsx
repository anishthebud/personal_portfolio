import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function RightPanel() {
    return (
        <div className="panel">
            <div className="image-container">
                <img src="" alt="" />
            </div>
            <div className="text-container">
                <p>
                    This is a panel that will be shown on the right side.
                    It will display information regarding each of my projects and education.
                </p>
            </div>
        </div>
    );
}

export default RightPanel;

