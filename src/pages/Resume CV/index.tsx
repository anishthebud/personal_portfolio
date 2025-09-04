import React from 'react';
import './index.css';
import ResumeViewer from '../../components/ResumeViewer';
import HomeButton from '../../components/HomeButton';
import HackingAnimation from '../../components/HackingAnimation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function ResumeCV() {
    return (
        <>
            <HackingAnimation color="#cf7d24" />
            <HomeButton color="#cf7d24" />
            <div className="resume-cv-container">
            <div className="page-header">
                <h1>Resume & Links</h1>
            </div>
            <div className="documents-section">
                <div className="links">
                <h2>GitHub</h2>
                <a href="https://github.com/anishthebud">
                    <FaGithub size={300} />
                </a>
                </div>
                <ResumeViewer
                    type="resume"
                    title="Professional Resume"
                    downloadUrl="/documents/resume.pdf"
                    fileName="/documents/resume.pdf#zoom=75%"
                />
                <div className="links">
                <h2>LinkedIn</h2>
                <a href="https://www.linkedin.com/in/anish-budida-57994723a/">
                    <FaLinkedin size={300} />
                </a>
                </div>
            </div>            
        </div>
        </>
    );
}

export default ResumeCV;