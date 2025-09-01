import React from 'react';
import './index.css';
import ResumeViewer from '../../components/ResumeViewer';
import HomeButton from '../../components/HomeButton';
import HackingAnimation from '../../components/HackingAnimation';

function ResumeCV() {
    return (
        <>
            <HackingAnimation color="#cf7d24" />
            <HomeButton color="#cf7d24" />
            <div className="resume-cv-container">
            <div className="page-header">
                <h1>Resume & Cover Letter</h1>
            </div>
            
            <div className="documents-section">
                <ResumeViewer
                    type="resume"
                    title="Professional Resume"
                    downloadUrl="/documents/resume.pdf"
                    fileName="/documents/resume.pdf#zoom=75%"
                />
                <ResumeViewer
                    type="coverLetter"
                    title="Cover Letter"
                    downloadUrl="/documents/resume.pdf"
                    fileName="/documents/resume.pdf#zoom=75%"
                />
            </div>            
        </div>
        </>
    );
}

export default ResumeCV;