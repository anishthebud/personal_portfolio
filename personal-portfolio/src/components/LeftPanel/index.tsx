import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function LeftPanel() {
    const [selectedCategory, setSelectedCategory] = useState<string>('Education');
    const [projectItem, setProjectItem] = useState<string>('');

    function renderSelectionMenu() {
        if (selectedCategory === 'Education') {
            return (
                <div className="selectionMenu">
                    <div className={`selectionItem ${projectItem === 'CS 1332' ? 'selected' : ''}`} onClick={() => setProjectItem('CS 1332')}>CS 1332: Data Structures and Algorithms</div>
                    <div className={`selectionItem ${projectItem === 'CS 2110' ? 'selected' : ''}`} onClick={() => setProjectItem('CS 2110')}>CS 2110: Computer Organization and Programming</div>
                    <div className={`selectionItem ${projectItem === 'CS 2340' ? 'selected' : ''}`} onClick={() => setProjectItem('CS 2340')}>CS 2340: Objects and Design</div>
                    <div className={`selectionItem ${projectItem === 'CS 3510' ? 'selected' : ''}`} onClick={() => setProjectItem('CS 3510')}>CS 3510: Design and Analysis of Algorithms</div>
                    <div className={`selectionItem ${projectItem === 'CS 3600' ? 'selected' : ''}`} onClick={() => setProjectItem('CS 3600')}>CS 3600: Introduction to Artificial Intelligence</div>
                </div>
            );
        } else if (selectedCategory === 'Projects') {
            return (
                <div className="selectionMenu">
                    <div className={`selectionItem ${projectItem === 'Personal Portfolio' ? 'selected' : ''}`} onClick={() => setProjectItem('Personal Portfolio')}>Personal Portfolio</div>
                    <div className={`selectionItem ${projectItem === 'YouTube VoiceOver' ? 'selected' : ''}`} onClick={() => setProjectItem('YouTube VoiceOver')}>YouTube VoiceOver</div>
                    <div className={`selectionItem ${projectItem === 'Braille Buddy' ? 'selected' : ''}`} onClick={() => setProjectItem('Braille Buddy')}>Braille Buddy</div>
                </div>
            );
        }
    }

    return (
        <div className="panel">
            <div className="categoryMenu">
                <div 
                    id='left-item'
                    className={`categoryItem ${selectedCategory === 'Education' ? 'selected' : ''}`} 
                    onClick={() => setSelectedCategory('Education')}
                >
                    Education
                </div>
                <div 
                    id='right-item'
                    className={`categoryItem ${selectedCategory === 'Projects' ? 'selected' : ''}`} 
                    onClick={() => setSelectedCategory('Projects')}
                >
                    Projects
                </div>
            </div>
            {renderSelectionMenu()}
        </div>
    );
}

export default LeftPanel;

